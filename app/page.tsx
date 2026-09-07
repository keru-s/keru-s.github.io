import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, BookOpen, Mic2, UserRound } from "lucide-react";
import { FootprintCarousel } from "@/components/footprint-carousel";
import { GitHubIcon } from "@/components/github-icon";
import { HeroBackground } from "@/components/hero-background";
import { EnterLine, FadeIn, Reveal } from "@/components/reveal";
import { Badge } from "@/components/ui/badge";
import { buttonVariants } from "@/components/ui/button";
import { formatArticleDate, getFeaturedArticles } from "@/lib/articles";
import { footprints, profile, projects } from "@/lib/site-content";
import { cn } from "@/lib/utils";

const sectionClass = "panel rounded-3xl px-6 py-8 sm:px-10 sm:py-10";
const eyebrowClass =
  "flex items-center gap-2 text-xs font-medium tracking-[0.25em] text-accent";
const accentLineClass =
  "mt-4 h-px w-14 bg-gradient-to-r from-accent/60 to-transparent";
const cardClass =
  "block rounded-2xl border border-white/[0.07] bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:border-white/[0.14] hover:bg-white/[0.04]";

export default async function HomePage() {
  const articles = await getFeaturedArticles();

  return (
    <main className="relative">
      <div className="mx-auto flex max-w-5xl flex-col gap-6 px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28 lg:px-8">
        <Reveal>
          <section className={cn(sectionClass, "overflow-hidden py-10 sm:py-14")}>
            <HeroBackground />
            <div className="relative">
              <FadeIn>
                <div className="flex items-center gap-4">
                  <div className="relative h-14 w-14 shrink-0 overflow-hidden rounded-full ring-1 ring-white/10 sm:h-16 sm:w-16">
                    <Image
                      src="/images/profile-songkeru.webp"
                      alt="宋科儒个人头像"
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 56px, 64px"
                      priority
                    />
                  </div>
                  <p className={eyebrowClass}>个人主页</p>
                </div>
              </FadeIn>
              <FadeIn delay={0.08}>
                <h1 className="mt-6 text-4xl font-semibold tracking-tight text-white sm:text-6xl">
                  {profile.name}
                </h1>
              </FadeIn>
              <FadeIn delay={0.16}>
                <p className="mt-4 text-lg text-muted-foreground sm:text-xl">
                  让 AI 在真实业务里跑起来
                </p>
              </FadeIn>
              <FadeIn delay={0.24}>
                <div className="mt-6 flex flex-wrap items-center gap-2.5">
                  <Badge variant="secondary">AI 研发工程师</Badge>
                  <Badge variant="outline">阿里国际 Java 工程师</Badge>
                  <Badge variant="outline">7 年开发经验</Badge>
                </div>
              </FadeIn>

              <FadeIn delay={0.32}>
                <div className="mt-12 border-t border-white/[0.06] pt-8">
                  <div className={eyebrowClass}>
                    <UserRound className="h-3.5 w-3.5" />
                    个人介绍
                  </div>
                  <p className="mt-4 max-w-3xl text-base leading-8 text-muted-foreground">
                    {profile.summary}
                  </p>
                </div>
              </FadeIn>

              <FadeIn delay={0.4}>
                <div className="mt-10 border-t border-white/[0.06] pt-8">
                  <p className={eyebrowClass}>履历</p>
                  <ol className="mt-5 divide-y divide-white/[0.06]">
                    {profile.career.map((item, index) => (
                      <li key={item} className="flex gap-5 py-4 first:pt-0 last:pb-0">
                        <span className="mt-1.5 shrink-0 font-mono text-xs text-muted">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <p className="text-sm leading-7 text-muted-foreground sm:text-base">
                          {item}
                        </p>
                      </li>
                    ))}
                  </ol>
                </div>
              </FadeIn>
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="projects" className={sectionClass}>
            <div className={eyebrowClass}>
              <GitHubIcon className="h-3.5 w-3.5" />
              coding 仓库
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              代表项目
            </h2>
            <EnterLine className={accentLineClass} delay={0.1} />
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              相关仓库
            </p>

            <div className="mt-8 space-y-4">
              {projects.map((project, index) => (
                <Reveal key={project.title} delay={Math.min(index * 0.06, 0.3)} y={10}>
                  <Link
                    href={project.href}
                    target="_blank"
                    rel="noreferrer"
                    className={cn(cardClass, "group p-5 sm:p-6")}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                          {project.description}
                        </p>
                      </div>
                      <ArrowUpRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition group-hover:text-white" />
                    </div>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.highlights.map((highlight) => (
                        <Badge key={highlight} variant="secondary">
                          {highlight}
                        </Badge>
                      ))}
                    </div>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="footprints" className={sectionClass}>
            <div className={eyebrowClass}>
              <Mic2 className="h-3.5 w-3.5" />
              技术足迹
            </div>
            <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
              公开输出与现场分享
            </h2>
            <EnterLine className={accentLineClass} delay={0.1} />
            <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
              大会分享、行业活动、公众号文章
            </p>
            <div className="mt-8 space-y-5">
              {footprints.map((item, index) => (
                <Reveal key={item.title} delay={Math.min(index * 0.08, 0.32)} y={10}>
                  <article className="overflow-hidden rounded-2xl border border-white/[0.07] bg-white/[0.02]">
                    <FootprintCarousel images={item.images} imageAlt={item.imageAlt} />
                    <div className="space-y-4 p-5 sm:p-6">
                      <div className="flex flex-wrap items-center gap-3">
                        <Badge variant="secondary">{item.stage}</Badge>
                        <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
                          {item.date}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold tracking-tight text-white sm:text-2xl">
                          {item.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-white/85 sm:text-base">
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
                              className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-white/[0.03] px-4 py-2 text-sm text-white/85 transition hover:border-white/[0.16] hover:bg-white/[0.06] hover:text-white"
                            >
                              {action.label}
                              <ArrowUpRight className="h-3.5 w-3.5" />
                            </Link>
                          ))}
                        </div>
                      ) : null}
                    </div>
                  </article>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>

        <Reveal>
          <section id="thinking" className={sectionClass}>
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className={eyebrowClass}>
                  <BookOpen className="h-3.5 w-3.5" />
                  技术思考
                </div>
                <h2 className="mt-4 text-2xl font-semibold tracking-tight text-white sm:text-3xl">
                  个人日常工作思考
                </h2>
                <EnterLine className={accentLineClass} delay={0.1} />
                <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
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

            <div className="mt-8 space-y-4">
              {articles.map((article, index) => (
                <Reveal key={article.slug} delay={Math.min(index * 0.06, 0.3)} y={10}>
                  <Link
                    href={`/articles/${article.slug}`}
                    className={cn(cardClass, "group p-5 sm:p-6")}
                  >
                    <div className="flex flex-wrap items-center gap-2">
                      {article.tags.map((tag) => (
                        <Badge key={tag} variant="outline">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    <div className="mt-4 flex items-start justify-between gap-4">
                      <h3 className="text-lg font-semibold tracking-tight text-white sm:text-xl">
                        {article.title}
                      </h3>
                      <ArrowUpRight className="mt-1.5 h-4 w-4 shrink-0 text-muted transition group-hover:text-white" />
                    </div>
                    <p className="mt-2 font-mono text-xs text-muted">
                      {formatArticleDate(article.publishedAt)}
                    </p>
                    <p className="mt-3 text-sm leading-7 text-muted-foreground sm:text-base">
                      {article.summary}
                    </p>
                  </Link>
                </Reveal>
              ))}
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
