<template>
    <GridLayout :layout.sync="layout" :col-num="12" :row-height="30" :is-draggable="draggable" :is-resizable="resizable" :vertical-compact="true" :use-css-transforms="true">
        <GridItem v-for="item in layout" :static="item.static" :x="item.x" :y="item.y" :w="item.w" :h="item.h" :i="item.i">
            <span class="text">{{ itemTitle(item) }}</span>
        </GridItem>
    </GridLayout>
</template>

<script>
import { GridItem, GridLayout } from 'vue-grid-layout-v3'
export default {
    components: {
        GridItem,
        GridLayout,
    },
    data() {
        return {
            layout: [
                { x: 0, y: 0, w: 2, h: 2, i: '0', static: false },
                { x: 2, y: 0, w: 2, h: 4, i: '1', static: true },
                { x: 4, y: 0, w: 2, h: 5, i: '2', static: false },
                { x: 6, y: 0, w: 2, h: 3, i: '3', static: false },
                { x: 8, y: 0, w: 2, h: 3, i: '4', static: false },
            ],
            draggable: true,
            resizable: true,
        }
    },
    computed: {
        itemTitle() {
            return (item) => {
                let res = item.i
                if (item.static) {
                    res += ' - static'
                }
                return res
            }
        },
    },
}
</script>

<style></style>
