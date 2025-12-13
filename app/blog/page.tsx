"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User, BookOpen, Search, ArrowRight, Shield, Filter, X } from "lucide-react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { getSupabaseBrowserClient } from "@/lib/supabase/client"

interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featured_image: string | null
  category: string
  author_name: string
  published: boolean
  created_at: string
}

const categories = ["All", "Travel Tips", "Wildlife", "Photography", "Destinations", "Culture"]

// Fallback posts for when database is not connected
const fallbackPosts: BlogPost[] = [
  {
    id: "1",
    title: "The Ultimate Guide to Kenya Safari Planning",
    slug: "ultimate-guide-kenya-safari",
    excerpt:
      "Everything you need to know before embarking on your first African safari adventure, from packing tips to wildlife spotting.",
    content:
      "Planning your first safari can be overwhelming, but with the right preparation, it becomes the adventure of a lifetime...",
    featured_image: "/tsavo-national-park-with-elephants-and-wildlife.jpg",
    author_name: "MZEDU Tours Team",
    published: true,
    created_at: "2024-12-10",
    category: "Travel Tips",
  },
  {
    id: "2",
    title: "Top 5 Wildlife Encounters in Tsavo National Park",
    slug: "wildlife-encounters-tsavo",
    excerpt:
      "Discover the incredible wildlife that calls Tsavo home, from the famous red elephants to elusive leopards.",
    content: "Tsavo National Park is one of Kenya's largest and oldest wildlife reserves...",
    featured_image: "/african-elephant-in-tsavo-national-park-kenya.jpg",
    author_name: "MZEDU Tours Team",
    published: true,
    created_at: "2024-12-08",
    category: "Wildlife",
  },
  {
    id: "3",
    title: "Capturing the Perfect Safari Photo",
    slug: "capturing-perfect-safari-photo",
    excerpt: "Professional tips and tricks for photographing African wildlife during your safari adventure.",
    content: "Wildlife photography on safari presents unique challenges and opportunities...",
    featured_image: "/lions-resting-under-acacia-tree-kenya-safari.jpg",
    author_name: "MZEDU Tours Team",
    published: true,
    created_at: "2024-12-05",
    category: "Photography",
  },
  {
    id: "4",
    title: "The Magic of Amboseli: Elephants and Kilimanjaro",
    slug: "magic-amboseli-elephants-kilimanjaro",
    excerpt: "Experience the breathtaking views of Mount Kilimanjaro while watching elephant herds roam freely.",
    content: "Amboseli National Park offers one of the most iconic African landscapes...",
    featured_image: "/mount-kilimanjaro-with-elephants-in-amboseli.jpg",
    author_name: "MZEDU Tours Team",
    published: true,
    created_at: "2024-12-01",
    category: "Destinations",
  },
]

export default function BlogPage() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null)
  const [isConnected, setIsConnected] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [showFilters, setShowFilters] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      setIsScrolled(scrollPosition > 400)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    fetchPosts()
  }, [])

  const fetchPosts = async () => {
    setLoading(true)
    try {
      const supabase = getSupabaseBrowserClient()
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("published", true)
        .order("created_at", { ascending: false })

      if (!error && data && data.length > 0) {
        setPosts(data)
        setIsConnected(true)
      } else {
        setPosts(fallbackPosts)
        setIsConnected(false)
      }
    } catch {
      setPosts(fallbackPosts)
      setIsConnected(false)
    }
    setLoading(false)
  }

  const filteredPosts = posts.filter((post) => {
    const matchesCategory = activeCategory === "All" || post.category === activeCategory
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const calculateReadTime = (content: string) => {
    const words = content.split(" ").length
    return `${Math.max(1, Math.ceil(words / 200))} min read`
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 bg-gradient-to-b from-primary/5 to-background">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 px-4 py-2 rounded-full mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium text-primary">Safari Stories & Insights</span>
          </div>
          <h1 className="font-serif text-5xl md:text-6xl font-bold text-foreground mb-6 animate-in fade-in slide-in-from-bottom-4 duration-700 delay-100">
            Our Blog
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto animate-in fade-in slide-in-from-bottom-4 duration-700 delay-200">
            Discover travel tips, wildlife stories, and insider guides for your African adventure
          </p>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section
        className={`py-8 px-6 border-b border-border bg-background/95 backdrop-blur-sm z-40 transition-all duration-500 ${
          isScrolled ? "opacity-0 pointer-events-none -translate-y-4" : "sticky top-16 opacity-100"
        }`}
      >
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-6">
            {/* Search Bar */}
            <div className="relative w-full md:w-96">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-full border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            {/* Admin Button */}
            <Link
              href="/auth/login"
              className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <Shield className="w-5 h-5" />
              Admin Login
            </Link>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2.5 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? "bg-primary text-primary-foreground shadow-lg scale-105"
                    : "bg-muted text-muted-foreground hover:bg-muted/80 hover:scale-105"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Floating Filter Button */}
      {isScrolled && (
        <div className="fixed right-6 top-24 z-50 animate-in fade-in slide-in-from-right-4 duration-500">
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center justify-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all duration-300 shadow-2xl hover:shadow-3xl hover:scale-105"
          >
            <Filter className="w-5 h-5" />
            Filters
          </button>

          {/* Floating Filters Panel */}
          {showFilters && (
            <div className="absolute top-14 right-0 bg-card border border-border rounded-2xl shadow-2xl p-6 w-80 animate-in fade-in slide-in-from-top-4 duration-300">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-semibold text-lg">Filter Articles</h3>
                <button
                  onClick={() => setShowFilters(false)}
                  className="w-8 h-8 rounded-full hover:bg-muted flex items-center justify-center transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Search in floating panel */}
              <div className="relative mb-4">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-3 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-sm"
                />
              </div>

              {/* Categories in floating panel */}
              <div>
                <p className="text-sm font-medium mb-3 text-muted-foreground">Categories</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <button
                      key={category}
                      onClick={() => setActiveCategory(category)}
                      className={`px-4 py-1.5 rounded-full font-medium transition-all duration-300 text-sm ${
                        activeCategory === category
                          ? "bg-primary text-primary-foreground shadow-md"
                          : "bg-muted text-muted-foreground hover:bg-muted/80"
                      }`}
                    >
                      {category}
                    </button>
                  ))}
                </div>
              </div>

              {/* Admin Link in floating panel */}
              <Link
                href="/auth/login"
                className="flex items-center justify-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-lg font-medium hover:bg-primary/20 transition-all duration-300 mt-4 text-sm"
              >
                <Shield className="w-4 h-4" />
                Admin Login
              </Link>
            </div>
          )}
        </div>
      )}

      {/* Connection Status Banner */}
      {!isConnected && !loading && (
        <div className="bg-amber-50 border-b border-amber-200 px-6 py-3">
          <div className="max-w-7xl mx-auto text-center text-amber-800 text-sm">
            THIS IS OUR LATEST INSIGHTS & ADVENTURES
          </div>
        </div>
      )}

      {/* Blog Posts Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {loading ? (
            <div className="text-center py-20">
              <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
              <p className="text-muted-foreground">Loading posts...</p>
            </div>
          ) : filteredPosts.length > 0 ? (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.map((post, index) => (
                <article
                  key={post.id}
                  className="group bg-card rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-border/40 animate-in fade-in zoom-in-95 duration-500 cursor-pointer"
                  style={{ animationDelay: `${index * 50}ms` }}
                  onClick={() => setSelectedPost(post)}
                >
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={post.featured_image || "/african-savanna-landscape-with-acacia-trees.jpg"}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/90 text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(post.created_at)}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        <span>{calculateReadTime(post.content)}</span>
                      </div>
                    </div>

                    <h2 className="font-serif text-xl font-bold text-foreground mb-3 line-clamp-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h2>

                    <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{post.excerpt}</p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <span className="text-sm font-medium text-foreground">{post.author_name}</span>
                      </div>
                      <span className="text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all">
                        Read More
                        <ArrowRight className="w-4 h-4" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
              <p className="text-muted-foreground">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Start Your Safari Journey?
          </h2>
          <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
            Turn these stories into your own adventures with our expertly guided safari tours
          </p>
          <Link
            href="/#booking"
            className="inline-block bg-white text-primary px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-xl"
          >
            Book Your Adventure Now
          </Link>
        </div>
      </section>

      {/* Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-card rounded-2xl w-full max-w-4xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
            {/* Header Image */}
            <div className="relative h-64 md:h-80">
              <Image
                src={selectedPost.featured_image || "/african-savanna-landscape-with-acacia-trees.jpg"}
                alt={selectedPost.title}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <button
                onClick={() => setSelectedPost(null)}
                className="absolute top-4 right-4 w-10 h-10 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center transition-colors"
              >
                <span className="text-white text-xl">&times;</span>
              </button>
              <div className="absolute bottom-6 left-6 right-6">
                <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-semibold mb-3 inline-block">
                  {selectedPost.category}
                </span>
                <h1 className="font-serif text-3xl md:text-4xl font-bold text-white">{selectedPost.title}</h1>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-8">
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                    <User className="w-5 h-5 text-primary" />
                  </div>
                  <span className="font-medium text-foreground">{selectedPost.author_name}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  <span>{formatDate(selectedPost.created_at)}</span>
                </div>
                <div className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  <span>{calculateReadTime(selectedPost.content)}</span>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">{selectedPost.excerpt}</p>
                <p className="text-foreground leading-relaxed whitespace-pre-wrap">{selectedPost.content}</p>
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <Link
                  href="/#booking"
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-full font-semibold hover:bg-primary/90 transition-all"
                >
                  Book Your Safari
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </div>
  )
}
