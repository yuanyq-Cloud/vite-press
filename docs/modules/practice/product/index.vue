<template>
    <div class="">
        <span @click="num++">{{ num }}</span>
        <span>{{ getText2 }}</span>
        <div class="comp" v-for="(item, i) in comps" :key="i" :style="createStyleObj(item)">
            {{ getText(item) }}
        </div>
    </div>
</template>

<script>
// 如何防止在num发生改变时，下方for循环不必要的刷新。
export default {
    name: '',
    components: {},
    data() {
        return {
            num: 0,
            comps: [
                {
                    name: 'a',
                    value: 1,
                },
                {
                    name: 'a',
                    value: 2,
                },
                {
                    name: 'a',
                    value: 3,
                },
            ],
            text: '123',
        }
    },
    methods: {},
    computed: {
        getText() {
            return (item) => {
                console.log('getText')
                let res = ''
                if (item.value === 1) {
                    res = '第一个'
                } else {
                    res = item.name
                }
            }
        },
        createStyleObj() {
            return (item) => {
                console.log('createStyleObj')
                let res = {}
                if (item.value === 1) {
                    res.backgroundColor = 'red'
                } else {
                    res.backgroundColor = 'orange'
                }
                return res
            }
        },
        getText2() {
            console.log('getText2')
            return this.text + '!'
        },
    },
}
</script>

<style scoped>
.comp {
    height: 100px;
    width: 100px;
}
</style>
