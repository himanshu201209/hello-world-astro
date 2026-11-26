import { createClient, type SanityClient } from "@sanity/client";
import { createImageUrlBuilder } from "@sanity/image-url";
import groq from "groq";
import type { SanityBlogCard, SanityBlogPost } from "./blog";

export type { SanityBlogCard, SanityBlogPost } from "./blog";
export { formatBlogMonthYear } from "./blog";

/** Public Sanity project values — safe to ship; `.env` may be absent on Webflow Cloud builds. */
const DEFAULT_PROJECT_ID = "eoib96e0";
const DEFAULT_DATASET = "production";
const DEFAULT_API_VERSION = "2025-02-19";

const projectId =
  import.meta.env.PUBLIC_SANITY_PROJECT_ID || DEFAULT_PROJECT_ID;
const dataset = import.meta.env.PUBLIC_SANITY_DATASET || DEFAULT_DATASET;
const apiVersion =
  import.meta.env.PUBLIC_SANITY_API_VERSION || DEFAULT_API_VERSION;

export const sanityClient: SanityClient = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: true,
  perspective: "published",
});

const builder = createImageUrlBuilder(sanityClient);

export function urlFor(source: Parameters<typeof builder.image>[0]) {
  return builder.image(source);
}

const blogCardFields = groq`
  _id,
  title,
  "slug": slug.current,
  "date": coalesce(publishedAt, _createdAt),
  "imageUrl": coalesce(featuredImage.asset->url, mainImage.asset->url),
  "imageAlt": coalesce(featuredImage.alt, mainImage.alt, title)
`;

export const BLOGS_QUERY = groq`
  *[_type == "post" && defined(slug.current) && !(_id in path("drafts.**"))]
  | order(coalesce(publishedAt, _createdAt) desc) {
    ${blogCardFields}
  }
`;

export const BLOG_BY_SLUG_QUERY = groq`
  *[_type == "post" && slug.current == $slug && !(_id in path("drafts.**"))][0] {
    ${blogCardFields},
    "authorName": author->name,
    body,
    "seoTitle": seo.seoTitle,
    "seoDescription": seo.seoDescription
  }
`;

export async function getPublishedBlogs(): Promise<SanityBlogCard[]> {
  try {
    return await sanityClient.fetch(BLOGS_QUERY);
  } catch (error) {
    console.error("Failed to fetch Sanity blogs", error);
    return [];
  }
}

export async function getBlogBySlug(
  slug: string,
): Promise<SanityBlogPost | null> {
  try {
    return await sanityClient.fetch(BLOG_BY_SLUG_QUERY, { slug });
  } catch (error) {
    console.error("Failed to fetch Sanity blog", slug, error);
    return null;
  }
}
