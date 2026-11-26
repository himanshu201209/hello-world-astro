import { useEffect, useRef } from "react";
import { PortableText, type PortableTextComponents } from "@portabletext/react";
import SiteShell from "./SiteShell";
import { formatBlogMonthYear, type SanityBlogPost } from "../lib/blog";
import { urlFor } from "../lib/sanity";

type SanityBlogArticleProps = {
  post: SanityBlogPost;
  homeHref: string;
};

/** Renders Studio `htmlEmbed` blocks (iframes / pasted HTML). Re-runs scripts. */
function HtmlEmbedBlock({ html }: { html?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const markup = html?.trim() || "";

  useEffect(() => {
    const container = ref.current;
    if (!container || !markup || !/<script/i.test(markup)) return;

    const scripts = container.querySelectorAll("script");
    scripts.forEach((oldScript) => {
      const newScript = document.createElement("script");
      for (const attr of Array.from(oldScript.attributes)) {
        newScript.setAttribute(attr.name, attr.value);
      }
      if (oldScript.textContent) {
        newScript.textContent = oldScript.textContent;
      }
      oldScript.parentNode?.replaceChild(newScript, oldScript);
    });
  }, [markup]);

  if (!markup) return null;

  return (
    <div
      ref={ref}
      className="paper__embed"
      dangerouslySetInnerHTML={{ __html: markup }}
      suppressHydrationWarning
    />
  );
}

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
    htmlEmbed: ({ value }) => <HtmlEmbedBlock html={value?.html} />,
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
