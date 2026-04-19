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
  role: "AI/LLM 工程师",
  summary:
    "阿里国际 Java 工程师，拥有 6 年的开发经验，专注东南亚电商系统建设（店铺 / 评价 / 商品发布），主导从零到一构建 LLM 驱动的「问大家」业务，实现智能问答场景落地。阿里云开发者公众号作者，擅长通过技术工具提升研发效能，现专注于大模型工程化落地与行业解决方案研发。",
  career: [
    "5 年阿里国际电商核心链路研发经验，覆盖商品、评价、问答、店铺等关键业务，连续 4 年获评优秀绩效。",
    "受邀在 2025 云栖大会、Qoder 深圳站及阿里集团内部直播（同时在线 3000+）分享 AI Coding 实践，深度使用 Cursor、Codex、Qoder 等 AI 编程工具。",
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
      "/images/footprints/yunqi-2025-0.jpeg",
      "/images/footprints/yunqi-2025-1.jpeg",
      "/images/footprints/yunqi-2025-2.jpeg",
      "/images/footprints/yunqi-2025-3.jpeg",
      "/images/footprints/yunqi-2025-4.jpeg",
      "/images/footprints/yunqi-2025-5.jpeg",
      "/images/footprints/yunqi-2025-6.jpeg",
      "/images/footprints/yunqi-2025-7.jpeg"
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
      "/images/footprints/aidd-shenzhen-0.jpeg",
      "/images/footprints/aidd-shenzhen-1.jpeg",
      "/images/footprints/aidd-shenzhen-2.jpeg",
      "/images/footprints/aidd-shenzhen-3.jpeg",
      "/images/footprints/aidd-shenzhen-4.jpeg",
      "/images/footprints/aidd-shenzhen-5.jpeg",
      "/images/footprints/aidd-shenzhen-6.jpeg",
      "/images/footprints/aidd-shenzhen-7.jpeg"
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
    date: "权威发布",
    stage: "公开文章",
    theme: "《JDK11升级后竟让内存利用率飙升到90%以上》",
    description:
      "详细介绍了 JVM 内存回收机制，以及升级到 JDK11 后 G1GC 需要调整的 JVM 参数。",
    imageAlt: "阿里云开发者公众号文章截图",
    images: ["/images/footprints/aliyun-article.png"],
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
    date: "集团内部",
    stage: "直播分享",
    theme: "《让 AI 替你干体力活》",
    description: "介绍如何使用内部工具进行提效。",
    imageAlt: "阿里集团内部分享配图",
    images: ["/images/footprints/ali-internal-share.png"],
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
      "一款面向桌面场景的原生待办应用，适合展示从交互到交付的完整产品思路。",
    href: "https://github.com/keru-s/todo-block",
    highlights: ["Mac 原生应用", "任务管理", "桌面体验"]
  },
  {
    title: "Python 打造的机票预订系统",
    description:
      "用 Python 构建机票预订流程，覆盖业务流程设计、系统组织和完整功能串联。",
    href: "https://github.com/keru-s/AirTicket-Booking-System",
    highlights: ["Python", "业务系统", "预订流程"]
  }
];
