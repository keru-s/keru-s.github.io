import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { formatArticleDate, getAllArticles, getArticleBySlug } from "@/lib/articles";
import { cn } from "@/lib/utils";

export const dynamicParams = false;

export async function generateStaticParams() {
  const articles = await getAllArticles();
  return articles.map((article) => ({
    slug: article.slug
  }));
}

export async function generateMetadata({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return {
    title: `${article.title} | 宋科儒`,
    description: article.summary
  };
}

export default async function ArticleDetailPage({
  params
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = await getArticleBySlug(slug);

  return (
    <main className="mx-auto min-h-screen max-w-4xl px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-8">
      <article className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
        <Link
          href="/articles"
          className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "w-fit")}
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          返回文章列表
        </Link>

        <header className="mt-8 border-b border-white/[0.07] pb-8">
          <div className="flex flex-wrap gap-2">
            {article.tags.map((tag) => (
              <Badge key={tag} variant="secondary">
                {tag}
              </Badge>
            ))}
          </div>
          <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-sm leading-7 text-muted-foreground">
            {article.summary}
          </p>
          <p className="mt-4 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            {formatArticleDate(article.publishedAt)}
          </p>
        </header>

        <div className="article-content mt-10">{article.content}</div>
      </article>
    </main>
  );
}
