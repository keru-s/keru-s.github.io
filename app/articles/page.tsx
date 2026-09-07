import Link from "next/link";
import { ArrowLeft, ArrowUpRight, BookOpen } from "lucide-react";
import { EnterLine, Reveal } from "@/components/reveal";
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
    <main className="mx-auto min-h-screen max-w-5xl px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-8">
      <div className="panel rounded-3xl p-6 sm:p-8 lg:p-10">
        <div className="flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-accent">
              <BookOpen className="h-3.5 w-3.5" />
              技术思考
            </div>
            <h1 className="mt-4 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
              技术思考
            </h1>
            <EnterLine className="mt-4 h-px w-14 bg-gradient-to-r from-accent/60 to-transparent" />
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
          {articles.map((article, index) => (
            <Reveal key={article.slug} delay={Math.min(index * 0.06, 0.3)} y={10}>
              <Link
                href={`/articles/${article.slug}`}
                className="group block rounded-2xl border border-white/[0.07] bg-white/[0.02] p-5 transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.04] sm:p-6"
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
                    <h2 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                      {article.title}
                    </h2>
                    <p className="mt-2 font-mono text-xs text-muted">
                      {formatArticleDate(article.publishedAt)}
                    </p>
                    <p className="mt-3 max-w-3xl text-sm leading-7 text-muted-foreground">
                      {article.summary}
                    </p>
                  </div>
                  <ArrowUpRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition group-hover:text-white" />
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}
