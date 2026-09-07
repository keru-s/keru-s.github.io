"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const navLinks = [
  { href: "/#projects", label: "代表项目" },
  { href: "/#footprints", label: "技术足迹" },
  { href: "/#thinking", label: "技术思考" }
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b transition-colors duration-300",
          scrolled || open
            ? "border-white/[0.07] bg-[#0b0c0f]/85 backdrop-blur-md"
            : "border-transparent bg-transparent"
        )}
      >
        <nav className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="text-sm font-semibold tracking-[0.2em] text-white"
            onClick={() => setOpen(false)}
          >
            宋科儒
          </Link>

          <div className="hidden items-center gap-1 sm:flex">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-full px-3.5 py-1.5 text-sm text-muted-foreground transition hover:bg-white/[0.05] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/[0.09] bg-white/[0.03] text-white/90 transition hover:border-white/[0.16] hover:bg-white/[0.06] sm:hidden"
            onClick={() => setOpen((value) => !value)}
            aria-label={open ? "关闭菜单" : "打开菜单"}
            aria-expanded={open}
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </nav>
      </header>

      {open ? (
        <div className="fixed inset-0 top-16 z-40 bg-[#0b0c0f] px-6 py-8 sm:hidden">
          <nav className="flex flex-col">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center justify-between border-b border-white/[0.06] py-5 text-lg text-white/90 transition hover:text-white",
                  index === 0 && "border-t"
                )}
              >
                {link.label}
                <span className="font-mono text-xs text-muted">
                  0{index + 1}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      ) : null}
    </>
  );
}
