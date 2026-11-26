import SiteShell from "./SiteShell";

export type ResearchAuthor = {
  name: string;
  role: string;
};

export type ResearchArticleProps = {
  backHref: string;
  date: string;
  title: string;
  authors: ResearchAuthor[];
  image: string;
  imageAlt?: string;
  lede: string;
  sections: Array<{
    heading: string;
    paragraphs: string[];
  }>;
};

export default function ResearchArticle({
  backHref,
  date,
  title,
  authors,
  image,
  imageAlt = "",
  lede,
  sections,
}: ResearchArticleProps) {
  return (
    <SiteShell>
      <article className="paper">
        <a className="paper__back" href={backHref}>
          ← Back
        </a>
        <p className="paper__date">{date}</p>
        <h1 className="paper__title">{title}</h1>
        <ul className="paper__authors">
          {authors.map((author) => (
            <li key={author.name}>
              <span className="paper__author-name">{author.name}</span>
              <span className="paper__author-role">{author.role}</span>
            </li>
          ))}
        </ul>
        <div className="paper__hero">
          <img src={image} alt={imageAlt} />
        </div>
        <p className="paper__lede">{lede}</p>
        {sections.map((section) => (
          <section className="paper__section" key={section.heading}>
            <h2 className="paper__heading">{section.heading}</h2>
            {section.paragraphs.map((paragraph) => (
              <p className="paper__text" key={paragraph.slice(0, 48)}>
                {paragraph}
              </p>
            ))}
          </section>
        ))}
      </article>
    </SiteShell>
  );
}
