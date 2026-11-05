import BlogPost from "../BlogPost";
import { blogTheOnlyBottleneck } from "../../content/blog-the-only-bottleneck";
import { blogCharts } from "../../content/blogCharts";

type BlogBottleneckProps = {
  homeHref: string;
};

export default function BlogBottleneck({ homeHref }: BlogBottleneckProps) {
  const post = blogTheOnlyBottleneck;
  return (
    <BlogPost
      backHref={homeHref}
      date={post.date}
      title={post.title}
      subtitle={post.subtitle}
      authors={[...post.authors]}
      hero={post.hero}
      bodyHtml={post.bodyHtml}
      charts={blogCharts}
      related={[...post.related]}
    />
  );
}
