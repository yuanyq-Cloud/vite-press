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

<SlideLogin></SlideLogin>

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
