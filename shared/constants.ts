export const menuList = [
  {
    title: "Trang chủ",
    href: "/",
  },
  {
    title: "Bài viết",
    href: "/blog",
  },
  {
    title: "Dự án",
    href: "/project",
  },
  {
    title: "Về tôi",
    href: "/about",
  },
  {
    title: "Liên hệ",
    href: "/contact",
  },
]

export const socialLink = {
  github: "https://github.com/truongnat",
  youtube: "https://www.youtube.com/channel/UCC0bvnJr_OuQr7MIcZ-xjwQ",
  telegram: "https://t.me/truongnat",
}

export const siteMetadata = {
  title: "TruongDQ | Software Engineer",
  theme: "dark",
  email: "truongdq.dev@gmail.com",
  siteUrl: "http:localhost:3000",
  ogType: "website",
  socialBanner: "/apple-touch-icon.png",
} as const

export const metadata = {
  title: "Truong DQ | Software Engineer",
  description: "My website created by TruongDQ",
}

export const textTypes = ["text", "emphasis", "strong", "inlineCode"]

export const appLocale = {
  VI: 'vi-VN',
  EN: 'en-US'
}
