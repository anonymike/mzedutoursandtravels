"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Plus,
  Edit,
  Trash2,
  Eye,
  EyeOff,
  LogOut,
  Search,
  BookOpen,
  LayoutDashboard,
  Save,
  X,
  Upload,
  ArrowLeft,
  AlertTriangle,
} from "lucide-react"
import { getSupabaseBrowserClient, isSupabaseConfigured } from "@/lib/supabase/client"

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
  updated_at: string
}

const categories = ["Travel Tips", "Wildlife", "Photography", "Destinations", "Culture"]

export default function AdminBlogPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [searchQuery, setSearchQuery] = useState("")
  const [showEditor, setShowEditor] = useState(false)
  const [editingPost, setEditingPost] = useState<BlogPost | null>(null)
  const [saving, setSaving] = useState(false)
  const [deleting, setDeleting] = useState<string | null>(null)
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    featured_image: "",
    category: "Travel Tips",
    published: false,
  })

  const supabaseConfigured = isSupabaseConfigured()
  const supabase = supabaseConfigured ? getSupabaseBrowserClient() : null

  useEffect(() => {
    if (supabase) {
      fetchPosts()
    } else {
      setLoading(false)
    }
  }, [supabase])

  const fetchPosts = async () => {
    if (!supabase) return
    setLoading(true)
    const { data, error } = await supabase.from("blog_posts").select("*").order("created_at", { ascending: false })

    if (!error && data) {
      setPosts(data)
    }
    setLoading(false)
  }

  const handleLogout = async () => {
    if (!supabase) return
    await supabase.auth.signOut()
    router.push("/auth/login")
    router.refresh()
  }

  const generateSlug = (title: string) => {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)/g, "")
  }

  const handleSavePost = async () => {
    if (!supabase || !formData.title || !formData.excerpt || !formData.content) return

    setSaving(true)

    const { data: userData } = await supabase.auth.getUser()
    const slug = generateSlug(formData.title)

    const postData = {
      title: formData.title,
      slug: editingPost ? editingPost.slug : slug,
      excerpt: formData.excerpt,
      content: formData.content,
      featured_image: formData.featured_image || null,
      category: formData.category,
      published: formData.published,
      author_id: userData.user?.id,
      author_name: userData.user?.user_metadata?.full_name || "MZEDU Tours Team",
    }

    if (editingPost) {
      const { error } = await supabase.from("blog_posts").update(postData).eq("id", editingPost.id)

      if (!error) {
        await fetchPosts()
        closeEditor()
      }
    } else {
      const { error } = await supabase.from("blog_posts").insert([postData])

      if (!error) {
        await fetchPosts()
        closeEditor()
      }
    }

    setSaving(false)
  }

  const handleDeletePost = async (id: string) => {
    if (!supabase || !confirm("Are you sure you want to delete this post?")) return

    setDeleting(id)
    const { error } = await supabase.from("blog_posts").delete().eq("id", id)

    if (!error) {
      setPosts(posts.filter((p) => p.id !== id))
    }
    setDeleting(null)
  }

  const handleTogglePublish = async (post: BlogPost) => {
    if (!supabase) return
    const { error } = await supabase.from("blog_posts").update({ published: !post.published }).eq("id", post.id)

    if (!error) {
      setPosts(posts.map((p) => (p.id === post.id ? { ...p, published: !p.published } : p)))
    }
  }

  const openEditor = (post?: BlogPost) => {
    if (post) {
      setEditingPost(post)
      setFormData({
        title: post.title,
        excerpt: post.excerpt,
        content: post.content,
        featured_image: post.featured_image || "",
        category: post.category,
        published: post.published,
      })
    } else {
      setEditingPost(null)
      setFormData({
        title: "",
        excerpt: "",
        content: "",
        featured_image: "",
        category: "Travel Tips",
        published: false,
      })
    }
    setShowEditor(true)
  }

  const closeEditor = () => {
    setShowEditor(false)
    setEditingPost(null)
    setFormData({
      title: "",
      excerpt: "",
      content: "",
      featured_image: "",
      category: "Travel Tips",
      published: false,
    })
  }

  const filteredPosts = posts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()),
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  if (!supabaseConfigured) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-card rounded-2xl border border-border p-8 text-center">
          <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <AlertTriangle className="w-8 h-8 text-amber-600" />
          </div>
          <h1 className="font-serif text-2xl font-bold text-foreground mb-4">Supabase Not Configured</h1>
          <p className="text-muted-foreground mb-6">
            To use the blog admin dashboard, you need to connect your Supabase project. Please add the following
            environment variables:
          </p>
          <div className="bg-muted rounded-xl p-4 text-left mb-6">
            <code className="text-sm text-foreground">
              NEXT_PUBLIC_SUPABASE_URL
              <br />
              NEXT_PUBLIC_SUPABASE_ANON_KEY
            </code>
          </div>
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary hover:text-primary/80 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-card border-b border-border sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
              <ArrowLeft className="w-5 h-5" />
            </Link>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center">
                <LayoutDashboard className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h1 className="font-serif text-xl font-bold text-foreground">Blog Dashboard</h1>
                <p className="text-sm text-muted-foreground">Manage your blog posts</p>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/blog"
              className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-2"
            >
              <Eye className="w-4 h-4" />
              View Blog
            </Link>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 text-muted-foreground hover:text-red-500 transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Actions Bar */}
        <div className="flex flex-col md:flex-row gap-4 items-center justify-between mb-8">
          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search posts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>

          <button
            onClick={() => openEditor()}
            className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            <Plus className="w-5 h-5" />
            New Post
          </button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{posts.length}</p>
                <p className="text-sm text-muted-foreground">Total Posts</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                <Eye className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{posts.filter((p) => p.published).length}</p>
                <p className="text-sm text-muted-foreground">Published</p>
              </div>
            </div>
          </div>
          <div className="bg-card rounded-xl p-6 border border-border">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                <EyeOff className="w-6 h-6 text-amber-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">{posts.filter((p) => !p.published).length}</p>
                <p className="text-sm text-muted-foreground">Drafts</p>
              </div>
            </div>
          </div>
        </div>

        {/* Posts Table */}
        {loading ? (
          <div className="text-center py-20">
            <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4" />
            <p className="text-muted-foreground">Loading posts...</p>
          </div>
        ) : filteredPosts.length > 0 ? (
          <div className="bg-card rounded-xl border border-border overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead className="bg-muted/50">
                  <tr>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Post</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Category</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-foreground">Date</th>
                    <th className="text-right px-6 py-4 text-sm font-semibold text-foreground">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border">
                  {filteredPosts.map((post) => (
                    <tr key={post.id} className="hover:bg-muted/30 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-4">
                          <div className="relative w-16 h-12 rounded-lg overflow-hidden bg-muted flex-shrink-0">
                            {post.featured_image ? (
                              <Image
                                src={post.featured_image || "/placeholder.svg"}
                                alt={post.title}
                                fill
                                className="object-cover"
                              />
                            ) : (
                              <div className="w-full h-full flex items-center justify-center">
                                <BookOpen className="w-5 h-5 text-muted-foreground" />
                              </div>
                            )}
                          </div>
                          <div className="min-w-0">
                            <h3 className="font-semibold text-foreground truncate max-w-xs">{post.title}</h3>
                            <p className="text-sm text-muted-foreground truncate max-w-xs">{post.excerpt}</p>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-3 py-1 bg-muted rounded-full text-sm text-muted-foreground">
                          {post.category}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <button
                          onClick={() => handleTogglePublish(post)}
                          className={`px-3 py-1 rounded-full text-sm font-medium ${
                            post.published ? "bg-green-100 text-green-700" : "bg-amber-100 text-amber-700"
                          }`}
                        >
                          {post.published ? "Published" : "Draft"}
                        </button>
                      </td>
                      <td className="px-6 py-4 text-sm text-muted-foreground">{formatDate(post.created_at)}</td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => openEditor(post)}
                            className="w-8 h-8 bg-muted hover:bg-primary/10 rounded-lg flex items-center justify-center transition-colors"
                          >
                            <Edit className="w-4 h-4 text-foreground" />
                          </button>
                          <button
                            onClick={() => handleDeletePost(post.id)}
                            disabled={deleting === post.id}
                            className="w-8 h-8 bg-muted hover:bg-red-100 rounded-lg flex items-center justify-center transition-colors disabled:opacity-50"
                          >
                            {deleting === post.id ? (
                              <div className="w-4 h-4 border-2 border-red-300 border-t-red-600 rounded-full animate-spin" />
                            ) : (
                              <Trash2 className="w-4 h-4 text-red-500" />
                            )}
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-center py-20 bg-card rounded-xl border border-border">
            <BookOpen className="w-16 h-16 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-foreground mb-2">No posts found</h3>
            <p className="text-muted-foreground mb-6">Start by creating your first blog post</p>
            <button
              onClick={() => openEditor()}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all"
            >
              <Plus className="w-5 h-5" />
              Create Post
            </button>
          </div>
        )}
      </main>

      {/* Editor Modal */}
      {showEditor && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 animate-in fade-in duration-300">
          <div className="bg-card rounded-2xl w-full max-w-3xl max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-300">
            <div className="sticky top-0 bg-card border-b border-border p-6 flex items-center justify-between z-10">
              <h2 className="font-serif text-2xl font-bold text-foreground">
                {editingPost ? "Edit Post" : "Create New Post"}
              </h2>
              <button
                onClick={closeEditor}
                className="w-10 h-10 bg-muted hover:bg-muted/80 rounded-full flex items-center justify-center transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="p-6 space-y-6">
              {/* Title */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Post Title</label>
                <input
                  type="text"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  placeholder="Enter post title..."
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>

              {/* Category & Published */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Category</label>
                  <select
                    value={formData.category}
                    onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    {categories.map((category) => (
                      <option key={category} value={category}>
                        {category}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Status</label>
                  <button
                    onClick={() => setFormData({ ...formData, published: !formData.published })}
                    className={`w-full px-4 py-3 rounded-xl border font-medium transition-all ${
                      formData.published
                        ? "bg-green-100 border-green-300 text-green-700"
                        : "bg-amber-100 border-amber-300 text-amber-700"
                    }`}
                  >
                    {formData.published ? "Published" : "Draft"}
                  </button>
                </div>
              </div>

              {/* Excerpt */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Excerpt</label>
                <textarea
                  value={formData.excerpt}
                  onChange={(e) => setFormData({ ...formData, excerpt: e.target.value })}
                  placeholder="Write a short summary of your post..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>

              {/* Content */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Content</label>
                <textarea
                  value={formData.content}
                  onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                  placeholder="Write your full blog post content here..."
                  rows={10}
                  className="w-full px-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                />
              </div>

              {/* Featured Image */}
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">Featured Image URL</label>
                <div className="relative">
                  <Upload className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <input
                    type="text"
                    value={formData.featured_image}
                    onChange={(e) => setFormData({ ...formData, featured_image: e.target.value })}
                    placeholder="Enter image URL..."
                    className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  />
                </div>
                {formData.featured_image && (
                  <div className="mt-4 relative w-full h-48 rounded-xl overflow-hidden bg-muted">
                    <Image
                      src={formData.featured_image || "/placeholder.svg"}
                      alt="Preview"
                      fill
                      className="object-cover"
                    />
                  </div>
                )}
              </div>
            </div>

            {/* Footer */}
            <div className="sticky bottom-0 bg-card border-t border-border p-6 flex items-center justify-end gap-4">
              <button
                onClick={closeEditor}
                className="px-6 py-3 rounded-xl font-semibold text-muted-foreground hover:bg-muted transition-all"
              >
                Cancel
              </button>
              <button
                onClick={handleSavePost}
                disabled={saving || !formData.title || !formData.excerpt || !formData.content}
                className="flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-xl font-semibold hover:bg-primary/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {saving ? (
                  <>
                    <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                    Saving...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    {editingPost ? "Update Post" : "Create Post"}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
