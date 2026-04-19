import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Github, Mic2, UserRound } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { formatArticleDate, getAllArticles } from "@/lib/articles";
import { footprints, profile, projects } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const sectionClass = "glass-panel rounded-[32px] px-5 py-6 sm:px-7 sm:py-8";

export default async function HomePage() {
  const articles = await getAllArticles();

  return (
    <main className="relative">
      <div className="mx-auto flex max-w-5xl flex-col gap-5 px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
        <Reveal>
          <section className={cn(sectionClass, "bg-hero-glow")}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center">
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-full border border-white/10 bg-gradient-to-br from-[#DCE7FF] via-[#9CB8FF] to-[#2D3E66] text-3xl font-semibold text-[#09111F] shadow-panel">
                  宋
                </div>
                <div className="space-y-3">
                  <div className="flex flex-wrap items-center gap-3">
                    <Badge variant="secondary">AI/LLM 工程师</Badge>
                    <Badge variant="outline">阿里国际 Java 工程师</Badge>
                    <Badge variant="outline">6 年开发经验</Badge>
                  </div>
                  <div>
                    <p className="text-sm uppercase tracking-[0.35em] text-muted">个人主页</p>
                    <h1 className="mt-2 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
                      {profile.name}
                    </h1>
                  </div>
                </div>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <div className="flex items-center gap-2 text-sm text-[#DCE7FF]">
                  <UserRound className="h-4 w-4" />
                  个人介绍
                </div>
                <p className="mt-4 text-base leading-8 text-muted-foreground sm:text-lg">
                  {profile.summary}
                </p>
              </div>

              <div className="rounded-[28px] border border-white/10 bg-white/5 p-5">
                <p className="text-sm uppercase tracking-[0.3em] text-muted">履历</p>
                <div className="mt-4 space-y-3">
                  {profile.career.map((item) => (
                    <div
                      key={item}
                      className="rounded-[22px] border border-white/10 bg-black/10 px-4 py-4 text-sm leading-7 text-muted-foreground sm:text-base"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="footprints" className={sectionClass}>
            <div className="flex items-center gap-2 text-sm text-[#DCE7FF]">
              <Mic2 className="h-4 w-4" />
              技术足迹
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">公开输出与现场分享</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              大会分享、行业活动、公众号文章
            </p>
            <div className="mt-6 space-y-4">
              {footprints.map((item) => (
                <article
                  key={item.title}
                  className="overflow-hidden rounded-[28px] border border-white/10 bg-white/5"
                >
                  <div className="relative aspect-[16/9] w-full overflow-hidden border-b border-white/10 bg-surface-secondary">
                    <Image
                      src={item.images[0]}
                      alt={item.imageAlt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 960px"
                    />
                  </div>
                  <div className="space-y-4 p-5 sm:p-6">
                    <div className="flex flex-wrap items-center gap-3">
                      <Badge variant="secondary">{item.stage}</Badge>
                      <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                        {item.date}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{item.title}</h3>
                      <p className="mt-3 text-base leading-8 text-white/90">
                        主题：{item.theme}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                        {item.description}
                      </p>
                    </div>
                    {item.actions?.length ? (
                      <div className="flex flex-wrap gap-3">
                        {item.actions.map((action) => (
                          <Link
                            key={`${item.title}-${action.label}`}
                            href={action.href}
                            target={action.external ? "_blank" : undefined}
                            rel={action.external ? "noreferrer" : undefined}
                            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:border-white/20 hover:bg-white/10"
                          >
                            {action.label}
                            <ArrowUpRight className="h-4 w-4" />
                          </Link>
                        ))}
                      </div>
                    ) : null}
                  </div>
                </article>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="thinking" className={sectionClass}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="flex items-center gap-2 text-sm text-[#DCE7FF]">
                  <BookOpen className="h-4 w-4" />
                  技术思考
                </div>
                <h2 className="mt-4 text-3xl font-semibold text-white">个人日常工作思考</h2>
                <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                  在 AI 时代的编程思考
                </p>
              </div>
              <Link
                href="/articles"
                className={buttonVariants({ variant: "ghost", size: "sm" })}
              >
                查看全部文章
              </Link>
            </div>

            <div className="mt-6 space-y-4">
              {articles.map((article) => (
                <Link
                  key={article.slug}
                  href={`/articles/${article.slug}`}
                  className="block rounded-[26px] border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="flex flex-wrap items-center gap-2">
                    {article.tags.map((tag) => (
                      <Badge key={tag} variant="outline">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <h3 className="mt-4 text-2xl font-semibold text-white">{article.title}</h3>
                  <p className="mt-2 text-sm text-muted">
                    {formatArticleDate(article.publishedAt)}
                  </p>
                  <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                    {article.summary}
                  </p>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="repos" className={sectionClass}>
            <div className="flex items-center gap-2 text-sm text-[#DCE7FF]">
              <Github className="h-4 w-4" />
              coding 仓库
            </div>
            <h2 className="mt-4 text-3xl font-semibold text-white">代表项目</h2>
            <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
              相关仓库
            </p>

            <div className="mt-6 space-y-4">
              {projects.map((project) => (
                <Link
                  key={project.title}
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="block rounded-[26px] border border-white/10 bg-white/5 p-5 transition duration-300 hover:border-white/20 hover:bg-white/[0.07]"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                      <p className="mt-4 text-sm leading-7 text-muted-foreground sm:text-base">
                        {project.description}
                      </p>
                    </div>
                    <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-[#DCE7FF]" />
                  </div>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.highlights.map((highlight) => (
                      <Badge key={highlight} variant="secondary">
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </Link>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
