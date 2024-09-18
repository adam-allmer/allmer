import footnote from 'markdown-it-footnote'
import { defineConfig } from 'vitepress'
//import { genFeed } from './genFeed.ts'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Allmer.io",
  description: "Adam Allmer's personal website",
  head: [["link", { rel: "icon", href: "/favicon.ico" }]],
  sitemap: {
    hostname: 'https://allmer.io',
    lastmodDateOnly: true
  },
  markdown: {
    config: (md) => {
      md.use(footnote)
    }
  },
  lastUpdated: true,
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'About', link: '/about/' },
      { text: 'Kaiser', link: '/kaiser/' },
      { text: 'Blog', link: '/blog/' },
      { text: 'Contact', link: '/contact/' }
    ],

    sidebar: {
      '/examples/': [{
        text: 'Examples',
        items: [
          { text: 'Markdown Examples', link: '/markdown-examples' },
          { text: 'Runtime API Examples', link: '/api-examples' }
        ]
      }],
      '/about/': [{
        text: 'About',
        items: [
          { text: 'About Me', link: '/about/' },
          { text: 'Resume', link: '/about/resume' }
        ]
      }],
      '/kaiser/': [{
        text: 'Kaiser',
        items: [
          { text: 'Kaiser', link: '/kaiser/' },
          { text: 'Kaiser\'s Pics', link: '/kaiser/kaisers-pics' }
        ]
      }],
      '/blog/': [{
        text: 'Blog',
        items: [
          { text: 'Blog', link: '/blog/' },
          { text: 'Web Development', link: '/blog/web-dev' },
          //{ text: 'Music', link: '/blog/music' }
        ]
      }]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/adam-allmer' },
      { icon: 'instagram', link: 'https://www.instagram.com/ajallmer/' },
      { icon: 'linkedin', link: 'https://www.linkedin.com/in/adamallmer' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Spotify</title><path d="M12 1a11 11 0 1 0 0 22 11 11 0 0 0 0-22zm5.045 15.866a.686.686 0 0 1-.943.228c-2.583-1.579-5.834-1.935-9.663-1.06a.686.686 0 0 1-.306-1.337c4.19-.958 7.785-.546 10.684 1.226a.686.686 0 0 1 .228.943zm1.346-2.995a.858.858 0 0 1-1.18.282c-2.956-1.817-7.464-2.344-10.961-1.282a.856.856 0 0 1-1.11-.904.858.858 0 0 1 .611-.737c3.996-1.212 8.962-.625 12.357 1.462a.857.857 0 0 1 .283 1.179zm.116-3.119c-3.546-2.106-9.395-2.3-12.78-1.272a1.029 1.029 0 0 1-.597-1.969c3.886-1.18 10.345-.952 14.427 1.471a1.029 1.029 0 0 1-1.05 1.77z"/></svg>'
        },
        link: 'https://open.spotify.com/user/cobaltcrusader56'
      },
      { icon: 'discord', link: 'https://discordapp.com/users/216393923025698816' },
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 39 40" xmlns="http://www.w3.org/2000/svg"><title>Ultimate Guitar</title><path d="M38.438 18.97c.053.568.038 1.394.038 1.975.025 10.502-8.57 19.032-19.195 19.055C8.657 40.023.023 31.53 0 21.03A18.894 18.894 0 0 1 5.707 7.475L3.76 5.63V0l5.146 4.958a19.462 19.462 0 0 1 20.79.079L34.998 0v5.631L32.875 7.58a18.9 18.9 0 0 1 4.716 7.674h-4.306C30.102 7.612 21.254 3.97 13.522 7.115 5.789 10.263 2.103 19.007 5.288 26.65c3.183 7.64 12.032 11.284 19.764 8.136 4.915-2 8.409-6.4 9.204-11.596H21.604l-4.015-4.22h20.849z"/></svg>'
        },
        link: 'https://www.ultimate-guitar.com/u/A7XHvyMetal'
      }//,
      //{
      //icon: {
      //svg: '<svg role="img" viewbox="0 0 32 32" xmlns="http://www.w3.org/2000/svg"><title>Atlassian</title><path d="M31.099 15.104l-15.099-15.104-15.104 15.104c-0.495 0.5-0.495 1.302 0 1.797l15.104 15.099 15.099-15.099c0.5-0.49 0.5-1.302 0-1.797zM16 20.734l-4.734-4.734 4.734-4.729 4.729 4.729z"/></svg>'
      //},
      //link: 'https://allmer.atlassian.net/jira/software/c/projects/OKO'
      //}
    ],

    search: {
      provider: 'local'
    },

    footer: {
      message: 'Released under the <a href="https://github.com/adam-allmer/allmer/blob/main/LICENSE.md">CC-BY-SA-4.0</a>.',
      copyright: 'Copyright © 2024-present <a href="https://github.com/adam-allmer">Adam Allmer</a>'
    }
  }//,
  //buildEnd: genFeed
})
