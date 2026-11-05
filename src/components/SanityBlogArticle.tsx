import { PortableText, type PortableTextComponents } from "@portabletext/react";
import SiteShell from "./SiteShell";
import { formatBlogMonthYear, type SanityBlogPost } from "../lib/blog";
import { urlFor } from "../lib/sanity";

type SanityBlogArticleProps = {
  post: SanityBlogPost;
  homeHref: string;
};

const portableComponents: PortableTextComponents = {
  types: {
    image: ({ value }) => {
      if (!value?.asset) return null;
      const src = urlFor(value).width(1600).fit("max").auto("format").url();
      return (
        <figure className="paper__figure">
          <img src={src} alt={value.alt || ""} loading="lazy" />
        </figure>
      );
    },
  },
  marks: {
    link: ({ children, value }) => (
      <a href={value?.href} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    ),
  },
};

export default function SanityBlogArticle({
  post,
  homeHref,
}: SanityBlogArticleProps) {
  return (
    <SiteShell>
      <article className="paper">
        <a className="paper__back" href={homeHref}>
          ← Back
        </a>
        <p className="paper__date">{formatBlogMonthYear(post.date)}</p>
        <h1 className="paper__title">{post.title.trim()}</h1>
        {post.authorName ? (
          <ul className="paper__authors">
            <li>
              <span className="paper__author-name">{post.authorName}</span>
            </li>
          </ul>
        ) : null}
        {post.imageUrl ? (
          <div className="paper__hero">
            <img src={post.imageUrl} alt={post.imageAlt || ""} />
          </div>
        ) : null}
        {post.body?.length ? (
          <div className="paper__body">
            <PortableText value={post.body} components={portableComponents} />
          </div>
        ) : null}
      </article>
    </SiteShell>
  );
}
