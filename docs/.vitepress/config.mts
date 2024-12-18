import { defineConfig } from 'vitepress'
const base_url = '/VitePress-Blog/'
// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: base_url,
  title: "sishui' blog",
  description: "A VitePress Blog",
  head: [
    // ['link', { rel: 'icon',type:"image/png",href: `/favicon.png` }],
    ['link', { rel: 'icon',type:"image/png",href: `${base_url}favicon.png` }],
  ],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    siteTitle:"sishui' blog",
    logo: `${base_url}favicon.png`, 
    // 放置在public文件夹下直接用 经过vitepress处理 直接使用/开头
    nav: [
      { text: '关于', link: '/about' },
      {
        text: '文章',
        // link 目录 默认index.md
        items: [
          { text: "教程", link: `${base_url}articles/tutorials/` }
        ]
      }
    ],
    docFooter: {
      prev: "上一篇",
      next: "下一篇",
    },
    sidebar: [
      {
        text: '文章',
        items: [
          { text: '教程', link: `${base_url}tutorials` },
        ]
      }
    ],
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/inspiringforever' }
    ]
  }
})
