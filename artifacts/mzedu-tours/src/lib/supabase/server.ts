// Server-side Supabase is not used in Vite (client-only)
// This is a stub for compatibility

export function isSupabaseConfigured() {
  return !!(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY)
}
