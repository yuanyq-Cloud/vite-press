import { defineConfig } from 'vitepress'
import MarkdownItKatex from 'markdown-it-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mr.Yuan的个人网站',
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/examples/markdown-examples' },
            { text: 'Web Front-end', link: '/front/web-front-end' },
            { text: 'Algorithm', link: '/algorithm/n-np' },
        ],
        sidebar: {
            '/examples/': {
                items: [
                    { text: 'Markdown Examples', link: '/examples/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/examples/api-examples' },
                    { text: 'Team Page Examples', link: '/examples/team-page' },
                ],
            },
            '/front/': {
                items: [{ text: 'JavaScript', items: [{ text: 'Vue' }, { text: 'Node' }] }, { text: 'CSS' }, { text: 'HTML' }],
            },
            '/algorithm/': {
                items: [
                    {
                        text: 'P vs. NP',
                        link: '/algorithm/n-np',
                    },
                ],
            },
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
    extendsMarkdown: (md) => {
        md.use(MarkdownItKatex)
    },
})
