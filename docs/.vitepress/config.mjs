import { defineConfig } from 'vitepress'
import MarkdownItKatex from 'markdown-it-katex'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mr.Yuan的技术文档',
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/examples/markdown-examples' },
            { text: 'Web Front-end', link: '/front/web-front-end' },
            { text: 'Algorithm', link: '/algorithm/n-np' },
            { text: 'Others', link: '/block-chain/block-chain-overview' },
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
                items: [
                    { text: 'JavaScript', items: [{ text: 'Vue' }, { text: 'Node' }] },
                    { text: 'CSS', items: [] },
                    {
                        text: 'HTML',
                        items: [
                            { text: 'HTML attribute', link: '/front/html-attr' },
                            { text: 'Slide login', link: '/front/practice/slide-login' },
                        ],
                    },
                ],
            },
            '/algorithm/': {
                items: [
                    {
                        text: 'P vs. NP',
                        link: '/algorithm/n-np',
                    },
                ],
            },
            '/block-chain/': {
                items: [
                    {
                        text: 'Block-chain overview',
                        link: '/block-chain/block-chain-overview',
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
