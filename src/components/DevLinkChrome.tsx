import SiteShell from "./SiteShell";
import { withBase } from "../lib/paths";
import { formatBlogMonthYear, type SanityBlogCard } from "../lib/blog";

const papers = [
  {
    slug: "are-ai-agents-getting-better",
    date: "October 2026",
    title: "Can a company tell whether its AI agent is getting better?",
    image:
      "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6acf94df813272270f788d25_thumbnail%20(6).jpg",
  },
  {
    slug: "pii-transformation-for-enterprise-datasets",
    date: "September 2026",
    title: "PII Transformation for Enterprise Datasets",
    image:
      "https://cdn.prod.website-files.com/6a04bd23eb9d40f76dac1242/6ab54b8f411538e83b82764d_Post%20(3)%20(1).jpg",
  },
] as const;

type DevLinkChromeProps = {
  blogs?: SanityBlogCard[];
};

export default function DevLinkChrome({ blogs = [] }: DevLinkChromeProps) {
  return (
    <SiteShell>
      <main className="research">
        <h2 className="research__title">Research papers</h2>
        <ul className="research__list">
          {papers.map((paper) => (
            <li key={paper.slug}>
              <a className="research__card" href={withBase(`/${paper.slug}`)}>
                <div className="research__media">
                  <img src={paper.image} alt="" loading="lazy" />
                </div>
                <div className="research__body">
                  <p className="research__date">{paper.date}</p>
                  <h3 className="research__name">{paper.title}</h3>
                </div>
              </a>
            </li>
          ))}
        </ul>

        {blogs.length > 0 && (
          <section className="research__section" aria-labelledby="blogs-heading">
            <h2 id="blogs-heading" className="research__title">
              Blogs
            </h2>
            <ul className="research__list">
              {blogs.map((blog) => (
                <li key={blog._id}>
                  <a
                    className="research__card"
                    href={withBase(`/blog/${blog.slug}`)}
                  >
                    <div className="research__media">
                      {blog.imageUrl ? (
                        <img
                          src={blog.imageUrl}
                          alt={blog.imageAlt || ""}
                          loading="lazy"
                        />
                      ) : null}
                    </div>
                    <div className="research__body">
                      <p className="research__date">
                        {formatBlogMonthYear(blog.date)}
                      </p>
                      <h3 className="research__name">{blog.title.trim()}</h3>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
    </SiteShell>
  );
}
