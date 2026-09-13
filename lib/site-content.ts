export type FootprintItem = {
  title: string;
  date: string;
  stage: string;
  theme: string;
  description: string;
  imageAlt: string;
  images: string[];
  actions?: {
    href: string;
    label: string;
    external: boolean;
  }[];
};

export type ProjectItem = {
  title: string;
  description: string;
  href: string;
  highlights: string[];
};

export const profile = {
  name: "宋科儒",
  role: "AI 研发工程师",
  summary:
    "拥有 7 年开发经验，先后在顺丰工作 2 年、在阿里工作 5 年，专注东南亚电商系统建设（店铺 / 评价 / 商品发布），主导从零到一构建 LLM 驱动的「问大家」业务，实现智能问答场景落地。阿里云开发者公众号作者，擅长通过技术工具提升研发效能，现专注于大模型工程化落地与行业解决方案研发。",
  career: [
    "7 年研发经验，其中顺丰 2 年、阿里 5 年；在阿里聚焦国际电商核心链路，覆盖商品、评价、问答、店铺等关键业务，连续 4 年获评优秀绩效。",
    "受邀在 2025 云栖大会、AiDD 研发数字峰会 · 深圳站及阿里集团内部直播（同时在线 3000+）分享 AI Coding 实践，深度使用 Cursor、Codex、Qoder 等 AI 编程工具。",
    "聚焦 AI 应用研发与后端工程落地，具备从模型选型、Prompt Engineering、SFT 微调到推理优化、多模态接入、自动化评测的完整 AI 工程实践能力。",
    "深度参与企业级 Skill 的标准建设和搭建，从 0 到 1 打造商品发布的相关 Skill。"
  ]
};

export const footprints: FootprintItem[] = [
  {
    title: "2025 云栖大会分享嘉宾",
    date: "2025",
    stage: "线下大会",
    theme: "《穿越代码迷宫，交付快人一步》",
    description: "介绍复杂项目中如何使用 Qoder 进行开发。",
    imageAlt: "2025 云栖大会现场照片",
    images: [
      "/images/footprints/yunqi-2025-0.webp",
      "/images/footprints/yunqi-2025-1.webp",
      "/images/footprints/yunqi-2025-2.webp",
      "/images/footprints/yunqi-2025-3.webp",
      "/images/footprints/yunqi-2025-4.webp",
      "/images/footprints/yunqi-2025-5.webp",
      "/images/footprints/yunqi-2025-6.webp",
      "/images/footprints/yunqi-2025-7.webp"
    ],
    actions: []
  },
  {
    title: "AiDD 研发数字峰会 · 深圳站",
    date: "2025",
    stage: "线下分享",
    theme: "《穿越代码迷宫，交付快人一步》",
    description:
      "接手十年老项目像看恐怖片？文档失踪、逻辑爆炸、踩雷不断？这次分享重点介绍如何使用 Qoder 建立心智地图，在代码迷宫中穿梭自如，提升需求交付效率，实现“左手咖啡右手 AI”的优雅蜕变。",
    imageAlt: "AiDD 深圳站现场照片",
    images: [
      "/images/footprints/aidd-shenzhen-0.webp",
      "/images/footprints/aidd-shenzhen-1.webp",
      "/images/footprints/aidd-shenzhen-2.webp",
      "/images/footprints/aidd-shenzhen-3.webp",
      "/images/footprints/aidd-shenzhen-4.webp",
      "/images/footprints/aidd-shenzhen-5.webp",
      "/images/footprints/aidd-shenzhen-6.webp",
      "/images/footprints/aidd-shenzhen-7.webp"
    ],
    actions: [
      {
        href: "https://www.aidd.vip/DCZC-2025sz",
        label: "查看活动介绍",
        external: true
      },
      {
        href: "https://www.bilibili.com/video/BV1pQrnBYEaq",
        label: "查看现场视频",
        external: true
      }
    ]
  },
  {
    title: "阿里云开发者公众号文章",
    date: "2025.01",
    stage: "公开文章",
    theme: "《JDK11升级后竟让内存利用率飙升到90%以上》",
    description:
      "详细介绍了 JVM 内存回收机制，以及升级到 JDK11 后 G1GC 需要调整的 JVM 参数。",
    imageAlt: "阿里云开发者公众号文章截图",
    images: ["/images/footprints/aliyun-article.webp"],
    actions: [
      {
        href: "https://mp.weixin.qq.com/s/-GcKchuSEjn46BEDM8bnGA",
        label: "阅读原文",
        external: true
      }
    ]
  },
  {
    title: "阿里集团内部分享",
    date: "2025",
    stage: "直播分享",
    theme: "《让 AI 替你干体力活》",
    description: "介绍如何使用内部工具进行提效。",
    imageAlt: "阿里集团内部分享配图",
    images: ["/images/footprints/ali-internal-share.webp"],
    actions: [
      {
        href: "https://zhuanlan.zhihu.com/p/1987571817444034394",
        label: "查看分享内容",
        external: true
      }
    ]
  }
];

export const projects: ProjectItem[] = [
  {
    title: "Mac 原生 Todo APP",
    description:
      "SwiftUI 外壳 + AppKit 编辑器 + SwiftData 本地存储的原生 macOS 待办应用：支持 4 层任务嵌套、键盘优先操作、按日期自动分组、菜单栏与主窗口实时同步，以及撤销重做与拖拽排序。",
    href: "https://github.com/keru-s/todo-block",
    highlights: ["SwiftUI / AppKit", "SwiftData", "键盘优先"]
  },
  {
    title: "Humanize Tech Writing",
    description:
      "面向 Coding Agent 的中文技术写作 Skill：清除 AI 生造词、工程黑话、英文逐词直译和需要二次解码的隐喻，同时保证语义安全——保留事实、项目术语与 MUST/SHOULD/MAY 强弱语义，并按 README、API 注释、行内注释、changelog 等文档类型应用不同规则。",
    href: "https://github.com/keru-s/humanize-tech-writing",
    highlights: ["Agent Skill", "语义安全", "文档类型感知"]
  },
  {
    title: "TouchFish 扩展配置器",
    description:
      "面向 ELEKSMAKER 摸鱼二代 / TF05 的 Web Serial 按键配置扩展页面，补齐官方配置器未开放的 F13–F24、macOS 快捷键、自定义组合键与旋钮配置能力。",
    href: "https://github.com/keru-s/touchfish-extended-configurator",
    highlights: ["Web Serial", "硬件协议", "GitHub Pages"]
  },
  {
    title: "Adversarial Review for Agents",
    description:
      "跨 Agent 对抗性审查 Skill：让独立评审 Agent 对计划、代码与 diff 严格挑刺，宿主 Agent 修复并复审直至通过，支持 Codex、Kimi Code 等运行时。",
    href: "https://github.com/keru-s/adversarial-review-for-agents",
    highlights: ["Agent Skill", "对抗性审查", "多运行时"]
  },
  {
    title: "QQ Mediary Stack",
    description:
      "在 QQ 里发一个片名即全自动观影：搜索资源、转存夸克网盘、生成 STRM、极影视刮削在线播放，支持剧集自动追更与缺集补齐的 NAS 一体化编排。",
    href: "https://github.com/keru-s/qq-mediary-stack",
    highlights: ["NAS 编排", "QQ 机器人", "自动化追更"]
  }
];
