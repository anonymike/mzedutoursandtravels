import { useState, useEffect, useRef, useCallback } from "react"
import { MessageCircle, X, FileText, Send, Bot, ChevronDown } from "lucide-react"
import { useLocation } from "wouter"

const WHATSAPP_NUMBER = "254723471093"
const WHATSAPP_MESSAGE = "Hello! I'd like to request a quote for a safari tour."

type Panel = "menu" | "whatsapp" | "ai" | null

interface ChatMessage {
  role: "user" | "assistant"
  content: string
}

const WA_ICON = (
  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
)

export default function FloatingRequestButton() {
  const [panel, setPanel] = useState<Panel>(null)
  const [location, navigate] = useLocation()
  const ref = useRef<HTMLDivElement>(null)

  const [chatMessages, setChatMessages] = useState<ChatMessage[]>([])
  const [chatInput, setChatInput] = useState("")
  const [chatLoading, setChatLoading] = useState(false)
  const chatEndRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setPanel(null)
      }
    }
    document.addEventListener("mousedown", handler)
    return () => document.removeEventListener("mousedown", handler)
  }, [])

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatMessages, chatLoading])

  useEffect(() => {
    if (panel === "ai" && chatMessages.length === 0) {
      setChatMessages([{
        role: "assistant",
        content: "Hello! 👋 I'm Safari AI, your MZEDU Tours assistant. Ask me about our safari packages, services, pricing, or how to book your dream Kenya adventure!"
      }])
    }
    if (panel === "ai") {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [panel])

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const handleQuoteForm = () => {
    setPanel(null)
    if (location === "/") {
      document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" })
    } else {
      navigate("/")
      setTimeout(() => {
        document.getElementById("booking")?.scrollIntoView({ behavior: "smooth", block: "start" })
      }, 400)
    }
  }

  const sendMessage = useCallback(async () => {
    const text = chatInput.trim()
    if (!text || chatLoading) return

    const userMsg: ChatMessage = { role: "user", content: text }
    const newMessages = [...chatMessages, userMsg]
    setChatMessages(newMessages)
    setChatInput("")
    setChatLoading(true)

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: newMessages }),
      })

      if (!res.body) throw new Error("No stream")

      const reader = res.body.getReader()
      const decoder = new TextDecoder()
      let assistantContent = ""
      setChatMessages(prev => [...prev, { role: "assistant", content: "" }])

      while (true) {
        const { done, value } = await reader.read()
        if (done) break
        const lines = decoder.decode(value).split("\n")
        for (const line of lines) {
          if (!line.startsWith("data: ")) continue
          try {
            const data = JSON.parse(line.slice(6))
            if (data.content) {
              assistantContent += data.content
              setChatMessages(prev => {
                const updated = [...prev]
                updated[updated.length - 1] = { role: "assistant", content: assistantContent }
                return updated
              })
            }
          } catch {}
        }
      }
    } catch {
      setChatMessages(prev => [...prev, {
        role: "assistant",
        content: "Sorry, I'm having trouble connecting. Please try WhatsApp for immediate help! 📱"
      }])
    } finally {
      setChatLoading(false)
    }
  }, [chatInput, chatMessages, chatLoading])

  const isOpen = panel !== null

  return (
    <>
      <style>{`
        @keyframes fab-bounce {
          0%   { transform: scale(1); }
          30%  { transform: scale(1.12); }
          60%  { transform: scale(0.95); }
          80%  { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
        @keyframes fab-pulse {
          0%, 100% { box-shadow: 0 0 0 0 rgba(139,26,26,0.5); }
          50%       { box-shadow: 0 0 0 10px rgba(139,26,26,0); }
        }
        @keyframes menu-in {
          from { opacity: 0; transform: translateY(12px) scale(0.92); }
          to   { opacity: 1; transform: translateY(0)   scale(1); }
        }
        @keyframes panel-in {
          from { opacity: 0; transform: translateY(16px) scale(0.95); }
          to   { opacity: 1; transform: translateY(0)    scale(1); }
        }
        @keyframes wa-bubble {
          0%   { transform: scale(0.7); opacity: 0; }
          70%  { transform: scale(1.06); opacity: 1; }
          100% { transform: scale(1); }
        }
        .fab-btn { animation: fab-pulse 2.5s ease-in-out infinite; }
        .fab-btn:hover { animation: fab-bounce 0.45s ease forwards; }
        .menu-item { animation: menu-in 0.22s ease both; }
        .panel-anim { animation: panel-in 0.25s cubic-bezier(.34,1.56,.64,1) both; }
        .wa-bubble { animation: wa-bubble 0.35s cubic-bezier(.34,1.56,.64,1) both; }
      `}</style>

      <div ref={ref} className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col items-end gap-3">

        {/* WhatsApp popup panel */}
        {panel === "whatsapp" && (
          <div className="panel-anim w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
            <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between">
              <div className="flex items-center gap-2 text-white font-bold text-sm">
                {WA_ICON}
                WhatsApp
              </div>
              <button onClick={() => setPanel(null)} className="text-white/80 hover:text-white transition">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="bg-[#e5ddd5] px-4 py-5">
              <div className="wa-bubble inline-block bg-white rounded-2xl rounded-tl-sm px-4 py-3 shadow-sm max-w-[80%]">
                <p className="text-sm text-gray-800">Hello 👋</p>
                <p className="text-sm text-gray-800">How can we help you?</p>
              </div>
            </div>
            <div className="bg-[#f0f0f0] px-4 pb-4 flex justify-end">
              <button
                onClick={() => { openWhatsApp(); setPanel(null) }}
                className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1fbe59] text-white font-semibold text-sm px-5 py-2.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                Open chat
                {WA_ICON}
              </button>
            </div>
          </div>
        )}

        {/* AI Chat panel */}
        {panel === "ai" && (
          <div className="panel-anim w-72 sm:w-80 rounded-2xl overflow-hidden shadow-2xl border border-white/10 flex flex-col" style={{ maxHeight: "420px" }}>
            <div className="bg-gradient-to-r from-[#0d1c2e] to-[#1a3a5c] px-4 py-3 flex items-center justify-between flex-shrink-0">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#E8A020] flex items-center justify-center">
                  <Bot className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Safari AI</p>
                  <p className="text-white/60 text-xs">MZEDU Tours Assistant</p>
                </div>
              </div>
              <button onClick={() => setPanel(null)} className="text-white/70 hover:text-white transition">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="bg-[#f4f8fb] flex-1 overflow-y-auto px-3 py-3 space-y-2" style={{ minHeight: 0 }}>
              {chatMessages.map((msg, i) => (
                <div key={i} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[85%] px-3 py-2 rounded-2xl text-xs leading-relaxed ${
                      msg.role === "user"
                        ? "bg-[#E8A020] text-white rounded-br-sm"
                        : "bg-white text-gray-800 shadow-sm border border-gray-100 rounded-bl-sm"
                    }`}
                  >
                    {msg.content}
                  </div>
                </div>
              ))}
              {chatLoading && (
                <div className="flex justify-start">
                  <div className="bg-white border border-gray-100 shadow-sm px-3 py-2 rounded-2xl rounded-bl-sm">
                    <div className="flex gap-1">
                      {[0, 1, 2].map(i => (
                        <div key={i} className="w-1.5 h-1.5 bg-[#0099CC] rounded-full animate-bounce" style={{ animationDelay: `${i * 0.15}s` }} />
                      ))}
                    </div>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            <div className="bg-white border-t border-gray-100 px-3 py-2 flex gap-2 flex-shrink-0">
              <input
                ref={inputRef}
                value={chatInput}
                onChange={e => setChatInput(e.target.value)}
                onKeyDown={e => e.key === "Enter" && !e.shiftKey && sendMessage()}
                placeholder="Ask about our safaris…"
                className="flex-1 text-xs bg-gray-50 rounded-full px-3 py-2 outline-none border border-gray-200 focus:border-[#E8A020] transition"
                disabled={chatLoading}
              />
              <button
                onClick={sendMessage}
                disabled={!chatInput.trim() || chatLoading}
                className="w-8 h-8 rounded-full bg-[#E8A020] hover:bg-[#c8880a] disabled:opacity-40 flex items-center justify-center transition-all hover:scale-110 flex-shrink-0"
              >
                <Send className="w-3.5 h-3.5 text-white" />
              </button>
            </div>
          </div>
        )}

        {/* Expanded menu */}
        {panel === "menu" && (
          <div className="flex flex-col items-end gap-2">
            {[
              {
                delay: "0.05s",
                label: "Chat with AI",
                icon: <Bot className="w-4 h-4 flex-shrink-0" />,
                bg: "bg-gradient-to-r from-[#0d1c2e] to-[#1a3a5c]",
                hover: "hover:from-[#1a3a5c] hover:to-[#1f4a74]",
                action: () => setPanel("ai"),
              },
              {
                delay: "0.1s",
                label: "WhatsApp",
                icon: WA_ICON,
                bg: "bg-[#25D366]",
                hover: "hover:bg-[#1fbe59]",
                action: () => setPanel("whatsapp"),
              },
              {
                delay: "0.15s",
                label: "Quote Request Form",
                icon: <FileText className="w-4 h-4 flex-shrink-0" />,
                bg: "bg-[#0099CC]",
                hover: "hover:bg-[#007aab]",
                action: handleQuoteForm,
              },
            ].map((item) => (
              <button
                key={item.label}
                onClick={item.action}
                style={{ animationDelay: item.delay }}
                className={`menu-item flex items-center gap-3 ${item.bg} ${item.hover} text-white text-sm font-semibold px-4 py-2.5 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105 whitespace-nowrap`}
              >
                {item.icon}
                {item.label}
              </button>
            ))}
          </div>
        )}

        {/* Main FAB */}
        <button
          onClick={() => setPanel(p => p === null || p === "ai" || p === "whatsapp" ? "menu" : null)}
          aria-label={isOpen ? "Close menu" : "Request a quote"}
          className="fab-btn flex items-center gap-2.5 bg-[#8B1A1A] hover:bg-[#a31f1f] text-white font-semibold px-4 py-3 sm:px-5 rounded-full shadow-xl transition-colors duration-200"
        >
          {isOpen ? (
            <>
              <ChevronDown className="w-5 h-5" />
              <span className="text-sm whitespace-nowrap hidden sm:inline">Close</span>
            </>
          ) : (
            <>
              <span className="text-sm whitespace-nowrap">Request A Quote</span>
              <MessageCircle className="w-5 h-5 flex-shrink-0" />
            </>
          )}
        </button>
      </div>
    </>
  )
}
