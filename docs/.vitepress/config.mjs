import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    title: "yuanyq's docs",
    description: 'A VitePress Site',
    themeConfig: {
        // https://vitepress.dev/reference/default-theme-config
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Examples', link: '/examples/markdown-examples' },
        ],

        sidebar: [
            {
                text: 'Examples',
                items: [
                    { text: 'Markdown Examples', link: '/examples/markdown-examples' },
                    { text: 'Runtime API Examples', link: '/examples/api-examples' },
                    { text: 'Team Page Examples', link: '/team-page' },
                ],
            },
            {
                text: 'JavaScript',
                items: [{ text: 'Runtime API Examples', link: '/examples/api-examples' }],
            },
            {
                text: 'CSS',
                items: [{ text: 'Runtime API Examples', link: '/examples/api-examples' }],
            },
            {
                text: 'HTML',
                items: [{ text: 'Runtime API Examples', link: '/examples/api-examples' }],
            },
            {
                text: 'Node',
                items: [{ text: 'Runtime API Examples', link: '/examples/api-examples' }],
            },
        ],

        socialLinks: [{ icon: 'github', link: 'https://github.com/vuejs/vitepress' }],
    },
})
