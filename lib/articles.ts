import { promises as fs } from "fs";
import path from "path";
import type { ReactNode } from "react";
import matter from "gray-matter";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { notFound } from "next/navigation";

export type ArticleMeta = {
  slug: string;
  title: string;
  summary: string;
  publishedAt: string;
  tags: string[];
};

type ArticleFrontmatter = Omit<ArticleMeta, "slug">;
export type ArticleDetail = ArticleMeta & {
  content: ReactNode;
};

const articlesDirectory = path.join(process.cwd(), "content/articles");

async function getArticleFiles() {
  const files = await fs.readdir(articlesDirectory);
  return files.filter((file) => file.endsWith(".mdx"));
}

export async function getAllArticles(): Promise<ArticleMeta[]> {
  const files = await getArticleFiles();

  const articles = await Promise.all(
    files.map(async (file) => {
      const raw = await fs.readFile(path.join(articlesDirectory, file), "utf8");
      const { data } = matter(raw);

      return {
        slug: file.replace(/\.mdx$/, ""),
        title: data.title,
        summary: data.summary,
        publishedAt: data.publishedAt,
        tags: data.tags ?? []
      } as ArticleMeta;
    })
  );

  return articles.sort(
    (a, b) =>
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export async function getArticleBySlug(slug: string): Promise<ArticleDetail> {
  const filePath = path.join(articlesDirectory, `${slug}.mdx`);

  try {
    const raw = await fs.readFile(filePath, "utf8");
    const { content, data } = matter(raw);
    const { content: compiledContent } = await compileMDX<ArticleFrontmatter>({
      source: content,
      options: {
        parseFrontmatter: false,
        mdxOptions: {
          remarkPlugins: [remarkGfm]
        }
      }
    });

    return {
      slug,
      title: data.title,
      summary: data.summary,
      publishedAt: data.publishedAt,
      tags: data.tags ?? [],
      content: compiledContent
    };
  } catch {
    notFound();
  }
}

export function formatArticleDate(date: string) {
  return new Intl.DateTimeFormat("zh-CN", {
    year: "numeric",
    month: "long",
    day: "numeric"
  }).format(new Date(date));
}
