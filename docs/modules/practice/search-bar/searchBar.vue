<template>
    <div class="search-bar">
        <div class="search-box">
            <div class="shadow"></div>
            <input type="text" placeholder="Search" />
            <div class="search-icon"></div>
            <!-- <object class="search" data="search.svg" type="image/svg+xml">Your browser does not support SVG.</object> -->
        </div>
    </div>
</template>

<script>
export default {
    name: '',
    components: {},
    data() {
        return {}
    },
    methods: {},
    mounted() {},
}
</script>

<style scoped>
* {
    margin: 0;
    padding: 0px;
    box-sizing: border-box;
}
body {
    display: flex;
    padding: 50px;
    background-color: #cfd1e1;
}
.search-bar {
    background-color: #cfd1e1;
}
.search-box {
    width: 75px;
    height: 50px;
    position: relative;
    transition: 0.5s;
}
.search-box:hover {
    width: 100%;
}
.search-box::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background-image: linear-gradient(#fff 60%, #e3e3e3);
    filter: blur(1px);
    z-index: 1;
}
.search-box::after {
    content: '';
    position: absolute;
    top: 0;
    right: -1px;
    width: 10px;
    height: 100%;
    background: #9d9d9d;
    filter: blur(1px);
    z-index: 1;
}
.search-box input {
    width: 100%;
    height: 100%;
    position: relative;
    border: none;
    padding: 10px 25px;
    outline: none;
    font-size: 1.1em;
    background-image: linear-gradient(#dbdae1, #a3aaba);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1), 15px 15px 15px rgba(0, 0, 0, 0.1), 20px 20px 15px rgba(0, 0, 0, 0.1), 30px 30px 15px rgba(0, 0, 0, 0.1), inset 1px 1px 2px #fff;
}
.search-box .search-icon {
    content: '';
    position: absolute;
    right: 20px;
    top: 15px;
    width: 20px;
    height: 20px;
    background-image: url(/modules/practice/search-bar/search.svg);
}
.search-box input::placeholder,
.search-box input {
    color: transparent;
}

.search-box:hover input::placeholder,
.search-box:hover input {
    color: #555;
    padding: 10px 50px 10px 25px;
}
.shadow {
    position: absolute;
    top: 0;
    left: -50px;
    width: calc(100% + 50px);
    height: 200px;
    background: linear-gradient(rgba(0, 0, 0, 0.1), transparent);
    transform-origin: top;
    transform: skew(45deg);
    pointer-events: none;
}
.shadow::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 50px;
    height: 50px;
    background-color: #cfd1e1;
    z-index: 1;
}
.search {
    width: 20px;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 20px;
}
</style>
