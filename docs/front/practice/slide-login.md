---
layout: doc
---

<script setup>
import SlideLogin from '../../modules/practice/slide-login/slideLogin.vue'
</script>

# Slide login

::: tip
This is a code exercise without real functionality.
:::

<DemoContainer title="基本使用">
<ClientOnly>
<SlideLogin></SlideLogin>
</ClientOnly>
<!-- 这个源码引用方式是 vuepress 提供的 https://www.bookstack.cn/read/vuepress2-zh/e4e8d14a07207066.md-->
</DemoContainer>


<style>
    /* VPContent响应设计：
    min-width: 1440px，padding
    min-width: 960px，padding
·   padding = 0
    */
    .VPContent .VPDoc .vp-doc._front_practice_slide-login{
        /* background-color:#ecf0f3; */
    }
    @media (max-width:1050px) {
            width: 650px;
    }
    @media (min-width:1440px){
        .VPContent .VPDoc .vp-doc._front_practice_slide-login{
            width:1000px;
        }
    }
</style>
