import { defineConfig } from 'vitepress'
// import MarkdownItKatex from 'markdown-it-katex'

// import { fileURLToPath, URL } from 'url'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: 'Mr_Yuan的技术文档',
    head: [['link', { rel: 'icon', href: '/favicon.ico' }]],
    description: 'A VitePress Site',
    lastUpdated: true, // 获取每个文件最后一次 git 提交的 UNIX 时间戳(ms)，同时它将以合适的日期格式显示在每一页的底部
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Web Front-end', link: '/front/html/html-attr' },
            { text: 'Front-end Framework', link: '/front/front-framework/Vue-intro' },
            { text: 'Algorithm', link: '/algorithm/n-np' },
            { text: 'Others', link: '/others/block-chain-overview' },
        ],
        sidebar: {
            '/examples/': {
                items: [
                    { text: 'Markdown Examples', link: '/examples/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/examples/api-examples' },
                    { text: 'Team Page Examples', link: '/examples/team-page' },
                ],
            },
            '/front/html': {
                items: [
                    {
                        text: 'HTML',
                        items: [{ text: 'HTML attribute', link: '/front/html/html-attr' }],
                    },
                    { text: 'JavaScript', items: [] },
                    { text: 'CSS', items: [] },
                    {
                        text: 'Practice',
                        items: [
                            { text: 'Slide login', link: '/front/practice/slide-login' },
                            { text: 'Search bar', link: '/front/practice/search-bar' },
                        ],
                    },
                ],
            },
            '/front/javascript': {
                items: [
                    {
                        text: 'HTML',
                        items: [{ text: 'HTML attribute', link: '/front/html/html-attr' }],
                    },
                    { text: 'JavaScript', items: [] },
                    { text: 'CSS', items: [] },
                    {
                        text: 'Practice',
                        items: [
                            { text: 'Slide login', link: '/front/practice/slide-login' },
                            { text: 'Search bar', link: '/front/practice/search-bar' },
                        ],
                    },
                ],
            },
            '/front/css': {
                items: [
                    {
                        text: 'HTML',
                        items: [{ text: 'HTML attribute', link: '/front/html/html-attr' }],
                    },
                    { text: 'JavaScript', items: [] },
                    { text: 'CSS', items: [] },
                    {
                        text: 'Practice',
                        items: [
                            { text: 'Slide login', link: '/front/practice/slide-login' },
                            { text: 'Search bar', link: '/front/practice/search-bar' },
                        ],
                    },
                ],
            },
            '/front/front-framework': {
                items: [
                    { text: 'Vue intro', link: '/front/front-framework/Vue-intro' },
                    { text: 'RESTful', link: '/front/front-framework/RESTful' },
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
            '/others/': {
                items: [
                    {
                        text: 'Block-chain overview',
                        link: '/others/block-chain-overview',
                    },
                    {
                        text: 'docker for windows',
                        link: '/others/docker-for-windows',
                    },
                ],
            },
        },
        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
        footer: {
            message: '粤ICP备2023109458号',
            copyright: 'Copyright © 2023-present Yuanyq',
        },
        // lastUpdatedText: 'last updated',
    },
    plugins: [
        '@vuepress/back-to-top', // 返回顶部插件
        '@vuepress/medium-zoom', // 图片预览插件
        '@vuepress/nprogress', //页面顶部进度条
    ],
    // it doesn't work
    // extendsMarkdown: (md) => {
    //     md.use(MarkdownItKatex)
    // },
    // it doesn't work
    // resolve: {
    //     alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) }
    // }
})
