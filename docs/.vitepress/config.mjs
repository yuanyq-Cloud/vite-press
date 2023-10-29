import { defineConfig } from 'vitepress'
// import MarkdownItKatex from 'markdown-it-katex'

// import { fileURLToPath, URL } from 'url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mr_Yuan的技术文档',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            // { text: 'Examples', link: '/examples/markdown-examples' },
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
                            { text: 'Search bar', link: '/front/practice/search-bar' },
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
    // it doesn't work
    // extendsMarkdown: (md) => {
    //     md.use(MarkdownItKatex)
    // },
    // it doesn't work
    // resolve: {
    //     alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
    // }
})
