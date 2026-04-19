import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4 py-8 sm:px-6 lg:px-8">
      <div className="glass-panel w-full rounded-[32px] p-8 text-center sm:p-10">
        <p className="text-sm uppercase tracking-[0.3em] text-muted">404</p>
        <h1 className="mt-4 text-3xl font-semibold text-white">这篇内容还没准备好</h1>
        <p className="mt-4 text-sm leading-7 text-muted-foreground">
          你访问的页面暂时不存在，先回到首页或文章列表继续浏览。
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className={buttonVariants({ variant: "secondary", size: "lg" })}>
            回到首页
          </Link>
          <Link href="/articles" className={buttonVariants({ variant: "ghost", size: "lg" })}>
            查看文章
          </Link>
        </div>
      </div>
    </main>
  );
}
