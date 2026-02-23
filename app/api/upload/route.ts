import { put } from "@vercel/blob"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData()
    const file = formData.get("file") as File

    if (!file) {
      return NextResponse.json({ error: "No file provided" }, { status: 400 })
    }

    // Validate file type
    const validImageTypes = ["image/jpeg", "image/png", "image/gif", "image/webp"]
    const validVideoTypes = ["video/mp4", "video/mpeg", "video/webm", "video/quicktime"]
    const isValidFile = [...validImageTypes, ...validVideoTypes].includes(file.type)

    if (!isValidFile) {
      return NextResponse.json(
        { error: "Please upload a valid image (JPEG, PNG, GIF, WebP) or video (MP4, WebM, MOV) file" },
        { status: 400 },
      )
    }

    // Limit file size to 50MB
    const maxSize = 50 * 1024 * 1024
    if (file.size > maxSize) {
      return NextResponse.json({ error: "File size must be less than 50MB" }, { status: 400 })
    }

    // Generate unique filename
    const timestamp = Date.now()
    const randomString = Math.random().toString(36).substring(2, 8)
    const extension = file.name.split(".").pop()
    const fileName = `blog-media/${timestamp}-${randomString}.${extension}`

    // Upload to Vercel Blob
    const blob = await put(fileName, file, {
      access: "public",
    })

    return NextResponse.json({
      url: blob.url,
      filename: file.name,
      size: file.size,
      type: file.type,
    })
  } catch (error) {
    console.error("Upload error:", error)
    return NextResponse.json({ error: "Upload failed. Please try again." }, { status: 500 })
  }
}
