import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { getAllArticles, formatArticleDate } from "@/lib/articles";
import { cn } from "@/lib/utils";

export const metadata = {
  title: "技术思考 | 宋科儒",
  description: "宋科儒 的 Prompt、SFT、Agent、Skill 与 CLI 工程思考。"
};

export default async function ArticlesPage() {
  const articles = await getAllArticles();

  return (
    <main className="mx-auto min-h-screen max-w-5xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
      <div className="glass-panel rounded-[32px] p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-sm text-[#DCE7FF]">
              <BookOpen className="h-4 w-4" />
              技术思考
            </div>
            <h1 className="mt-4 text-4xl font-semibold text-white">技术思考</h1>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground">
              这里集中放置 Prompt、SFT、Agent、Skill 与 CLI 相关的工程经验。
            </p>
          </div>
          <Link
            href="/"
            className={cn(buttonVariants({ variant: "ghost", size: "sm" }), "w-fit")}
          >
            <ArrowLeft className="mr-2 h-4 w-4" />
            返回首页
          </Link>
        </div>

        <div className="mt-8 grid gap-4">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/articles/${article.slug}`}
              className="rounded-[26px] border border-white/10 bg-white/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.07]"
            >
              <div className="flex flex-wrap items-center gap-2">
                {article.tags.map((tag) => (
                  <Badge key={tag} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="mt-4 flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-xl font-medium text-white">{article.title}</h2>
                  <p className="mt-2 text-sm text-muted">{formatArticleDate(article.publishedAt)}</p>
                  <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
                    {article.summary}
                  </p>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#DCE7FF]" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </main>
  );
}
