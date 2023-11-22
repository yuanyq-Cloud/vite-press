import { defineConfig } from 'vitepress'
// import { vuePlugin } from 'vitepress-demo-editor'
// import 'vitepress-demo-editor/dist/style.css'
// import markdownPlugin from 'vitepress-demo-editor/markdownPlugin'

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
            { text: 'Web Front-end', link: '/front/development/weird-debugging' },
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
            // '/front/development': {
            //     items: [
            //         {
            //             text: 'development',
            //             items: [{ text: 'Weird Debugging Tricks', link: '/front/development/weird-debugging' }],
            //         },
            //     ],
            // },
            '/front/html': {
                items: [
                    {
                        text: 'development',
                        items: [{ text: 'Weird Debugging Tricks', link: '/front/development/weird-debugging' }],
                    },
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
                        text: 'development',
                        items: [{ text: 'Weird Debugging Tricks', link: '/front/development/weird-debugging' }],
                    },
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
                        text: 'development',
                        items: [{ text: 'Weird Debugging Tricks', link: '/front/development/weird-debugging' }],
                    },
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
        // enhanceApp({ app }) {
        //     app.use(vuePlugin, {
        //         defaultDirection: 'row', // 默认显示方向
        //         ms: 30, // 编辑器防抖时间
        //         handleError(errs) {}, // 错误信息
        //         onMonacoCreated(monaco) {}, // monaco 创建成功时触发
        //     })
        // },
        // lastUpdatedText: 'last updated',
    },
    markdown: {
        math: true,
        // config: (md) => {
        //     md.use(markdownPlugin)
        // },
    },
})
