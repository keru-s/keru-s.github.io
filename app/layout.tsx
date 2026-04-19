import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "宋科儒 | AI/LLM 工程师",
  description:
    "宋科儒 的个人主页，聚焦大模型工程化落地、AI 应用研发与公开技术输出。"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="dark" suppressHydrationWarning>
      <body>{children}</body>
    </html>
  );
}
