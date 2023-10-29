---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Yuanyq's docs"
  text: "Base on vuepress"
  tagline: My very first website
  actions:
    - theme: brand
      text: Web Front-end
      link: /front/web-front-end
    - theme: alt
      text: Markdown Examples
      link: /examples/markdown-examples
    - theme: alt
      text: API Examples
      link: /examples/api-examples

features:
  - title: Built for
    details: Record development learning and maybe a few other interesting things, both for sharing and review.
  - title: Includes
    details: Anything interesting, mainly computer related, may also include non-technical content such as philosophy, literature, history, etc
  - title: 鲁迅先生：
    details: '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。<br/>&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp此后如竟没有炬火：我便是唯一的光。倘若有了炬火，出了太阳，我们自然心悦诚服的消失，不但毫无不平，而且还要随喜赞美这炬火或太阳；因为他照了人类，连我都在内。'
---
<script setup>
import { VPTeamMembers } from 'vitepress/theme'
// import treeImg from '/img/tree.png'
import icons from '/img/icon/icons.vue'

const members = [
  {
    avatar: 'tree.png',
    name: 'Yuanyq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yuanyq-Cloud' },
      { icon: {svg:icons.qq2}, link: 'https://qm.qq.com/q/r2IU7NKZJC?personal_qrcode_source=3' },
      { icon: {svg:icons.mail}, link: 'mailto:yyq.cloud@qq.com?subject=&body=愿中国青年都摆脱冷气，只是向上走，不必听自暴自弃者流的话。能做事的做事，能发声的发声。有一分热，发一分光，就令萤火一般，也可以在黑暗里发一点光，不必等候炬火。' }
    ]
  }
]
</script>
<VPTeamMembers size="small" :members="members" />
<div style="text-align:center">If you'd like to swap links, please get in touch.</div>

<style>
.VPTeamMembers.small.count-1 .container {
    margin:50px auto;
}
.VPTeamMembers .profile .avatar .avatar-img {
    -webkit-user-drag: none;
    user-select: none;
}
</style>
