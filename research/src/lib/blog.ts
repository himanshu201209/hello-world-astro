export type SanityBlogCard = {
  _id: string;
  title: string;
  slug: string;
  date: string;
  imageUrl: string | null;
  imageAlt: string;
};

export type SanityBlogPost = SanityBlogCard & {
  authorName: string | null;
  body: unknown[] | null;
  seoTitle: string | null;
  seoDescription: string | null;
};

/** Formats dates like the Research papers section: "October 2026". */
export function formatBlogMonthYear(dateIso: string | null | undefined) {
  if (!dateIso) return "";
  const date = new Date(dateIso);
  if (Number.isNaN(date.getTime())) return "";
  return date.toLocaleDateString("en-US", {
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
