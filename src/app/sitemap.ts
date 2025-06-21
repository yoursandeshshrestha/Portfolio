import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.sandeshshrestha.tech";
  const lastModified = new Date().toISOString();

  // Core pages
  const routes = [
    {
      url: baseUrl,
      lastModified: lastModified,
      changeFrequency: "daily" as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/projects`,
      lastModified: lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/open-source-contributions`,
      lastModified: lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
  ];

  // Blog posts with specific dates
  const blogPosts = [
    {
      url: `${baseUrl}/blog/cap-theorem-to-sql-databases-and-mongodb-1`,
      lastModified: "2024-02-06T00:00:00.000Z",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/bad-api-fetch-vs-good-api-fetch-in-javascript`,
      lastModified: "2024-02-06T00:00:00.000Z",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blog/nextjs-vs-reactjs-when-to-use-each-framework`,
      lastModified: "2024-02-06T00:00:00.000Z",
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ];

  // Projects with their launch dates
  const projects = [
    {
      url: `${baseUrl}/projects/codeloom`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/projects/soluna`,
      lastModified: lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
  ];

  return [...routes, ...blogPosts, ...projects];
}
