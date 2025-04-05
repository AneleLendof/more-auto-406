const CONFIG = {
  // profile setting (required)
  profile: {
    name: "PikPak18+",
    image: "/avatar.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "",
    bio: "全网精选18+资源，永久免费，更多收藏请访问pikpak18.top",
    email: "morethanmin.dev@gmail.com",
    linkedin: "morethanmin",
    github: "morethanmin",
    instagram: "",
  },
  projects: [
    {
      name: `PikPak18+收藏主页`,
      href: "https://pikpak18.top/about",
    },
  ],
  // blog setting (required)
  blog: {
    title: "PikPak18+资源站",
    description: "欢迎来到PikPak18+预览站，本站为资源预览，完整收藏请访问pikpak18.top",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://morethan-log.vercel.app",
  since: 2022, // If leave this empty, current year will be used.
  lang: "zh-CN", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID||'12c36ba33dc4809baa2bd82194c18ef4',
  },


  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  crisp: {
    enable: false,
    config: {
      CRISP_WEBSITE_ID: "6c078f6c-7060-473b-ab40-639c0817c1cb",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
