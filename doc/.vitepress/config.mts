import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/vitepress-test/",
  title: "站点标题，在config更改",
  description: "A VitePress Site",
  themeConfig: {
    logo: "/logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Examples", link: "/markdown-examples" },
      {
        text: "在config修改导航",
        items: [
          { text: "导航三-1", link: "/markdown-examples" },
          { text: "导航三-2", link: "/markdown-examples" },
        ],
      },
    ],

    sidebar: [
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
      {
        text: "Examples-2",
        items: [
          { text: "Markdown Examples-2", link: "/markdown-examples" },
          { text: "Runtime API Examples-2", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      { icon: "github", link: "https://github.com/vuejs/vitepress" },
      { icon: "twitter", link: "https://twitter.com/vuejs" },
    ],
    footer: {
      copyright: "Copyright © 2023-present LIU",
    },
  },
});
