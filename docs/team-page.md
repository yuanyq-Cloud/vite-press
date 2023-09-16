<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import treeImg from '/img/tree.png'

const members = [
  {
    avatar: treeImg,
    name: 'Cloud Yuan',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yyx990803' },
      { icon: 'twitter', link: 'https://twitter.com/youyuxi' }
    ]
  }
]
</script>
<VPTeamMembers size="small" :members="members" />