import type { MetadataRoute } from "next"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.mzedutoursandtravels.com"

  const packageSlugs = [
    "tsavo-national-park",
    "tsavo-game-drive",
    "mzima-springs",
    "shimba-hills-reserve",
    "fort-jesus",
    "mombasa-marine-park",
    "haller-park",
    "arabuko-sokoke-forest",
    "custom-coastal-package",
    "custom-trip-package",
    "amboseli-safari-experience",
    "nairobi-national-park-tour",
    "coastline-road-trip",
  ]

  const packagePages: MetadataRoute.Sitemap = packageSlugs.map((slug) => ({
    url: `${baseUrl}/packages/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.8,
  }))

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.7,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.3,
    },
    ...packagePages,
  ]
}
