<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import treeImg from '/img/tree.png'
import icons from '/img/icon/icons.vue'

const members = [
  {
    avatar: treeImg,
    name: 'Yuanyq',
    title: 'Creator',
    links: [
      { icon: 'github', link: 'https://github.com/yuanyq-Cloud' },
      { icon: {svg:icons.qq2}, link: 'https://qm.qq.com/q/r2IU7NKZJC?personal_qrcode_source=3' }
    ]
  }
]
</script>
<VPTeamMembers size="small" :members="members" />
