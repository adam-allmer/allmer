// https://vitepress.dev/guide/custom-theme
import { h } from 'vue'
import type { Theme } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
//import Layout from './Layout.vue'
import KaiserAge from './kaiser-age.vue'
//import BlogPostCard from './blog-post-card.vue'
import './style.css'

export default {
  extends: DefaultTheme,
  Layout: () => {
    return h(DefaultTheme.Layout, null, {
      // https://vitepress.dev/guide/extending-default-theme#layout-slots
    })
  },
  enhanceApp({ app, router, siteData }) {
    // ...
    app.component('KaiserAge', KaiserAge);
    //app.component('BlogPostCard', BlogPostCard);
  }
} satisfies Theme
