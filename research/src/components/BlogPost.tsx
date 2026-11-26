import type { ReactNode } from "react";
import SiteShell from "./SiteShell";
import BlogChartMount from "./BlogChartMount";

export type BlogAuthor = {
  name: string;
  role: string;
  photo: string;
};

export type BlogRelated = {
  href: string;
  date: string;
  title: string;
  image?: string;
};

export type BlogPostProps = {
  backHref: string;
  date: string;
  title: string;
  subtitle: string;
  authors: BlogAuthor[];
  hero: { src: string; alt: string };
  bodyHtml: string;
  charts?: string[];
  related?: BlogRelated[];
};

const CHART_RE = /<!--CHART:(\d+)-->/g;

function renderBody(bodyHtml: string, charts: string[]): ReactNode[] {
  const nodes: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;
  const re = new RegExp(CHART_RE);
  while ((match = re.exec(bodyHtml)) !== null) {
    const html = bodyHtml.slice(last, match.index);
    if (html.trim()) {
      nodes.push(
        <div
          key={`html-${match.index}`}
          className="blog__body-chunk"
          dangerouslySetInnerHTML={{ __html: html }}
        />,
      );
    }
    const chartIndex = Number(match[1]) - 1;
    const chartHtml = charts[chartIndex];
    if (chartHtml) {
      nodes.push(<BlogChartMount key={`chart-${match[1]}`} html={chartHtml} />);
    }
    last = match.index + match[0].length;
  }
  const tail = bodyHtml.slice(last);
  if (tail.trim()) {
    nodes.push(
      <div
        key="html-tail"
        className="blog__body-chunk"
        dangerouslySetInnerHTML={{ __html: tail }}
      />,
    );
  }
  return nodes;
}

export default function BlogPost({
  backHref,
  date,
  title,
  subtitle,
  authors,
  hero,
  bodyHtml,
  charts = [],
  related = [],
}: BlogPostProps) {
  return (
    <SiteShell>
      <article className="blog">
        <a className="blog__back" href={backHref}>
          <img
            className="blog__back-icon"
            src="https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1249/6a04bd23eb9d40f76dac1bff_Arrows%202%20(3).svg"
            alt=""
            width={17}
            height={17}
          />
          Back
        </a>
        <p className="blog__date">{date}</p>
        <h1 className="blog__title">{title}</h1>
        <p className="blog__subtitle">{subtitle}</p>
        <ul className="blog__authors">
          {authors.map((author) => (
            <li key={author.name}>
              <img
                className="blog__author-photo"
                src={author.photo}
                alt=""
                width={48}
                height={48}
              />
              <div>
                <span className="blog__author-name">{author.name}</span>
                <span className="blog__author-role">{author.role}</span>
              </div>
            </li>
          ))}
        </ul>
        <div className="blog__hero">
          <img src={hero.src} alt={hero.alt} />
        </div>
        <div className="blog__body">{renderBody(bodyHtml, charts)}</div>
        {related.length > 0 && (
          <section className="blog__related">
            <h2 className="blog__related-title">Other articles</h2>
            <ul className="blog__related-list">
              {related.map((item) => (
                <li key={item.href}>
                  <a
                    className="blog__related-card"
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {item.image && (
                      <div className="blog__related-media">
                        <img src={item.image} alt="" />
                      </div>
                    )}
                    <p className="blog__related-date">{item.date}</p>
                    <h3 className="blog__related-name">{item.title}</h3>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </article>
    </SiteShell>
  );
}
