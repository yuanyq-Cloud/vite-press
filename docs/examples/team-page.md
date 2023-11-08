<script setup>
import { VPTeamMembers } from 'vitepress/theme'
import icons from '/img/icon/icons.vue'

/**`./`会取到localhost/examples/tree.png*/
const members = [
  {
    avatar: '../tree.png',
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
