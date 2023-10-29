<template>
    <div class="shell">
        <div class="container a-container" id="a-container">
            <form action="" class="form" id="b-form">
                <div class="form_title title">Login</div>
                <div class="form_icons">
                    <i class="white_button fa-brands fa-github"></i>
                    <i class="white_button fa-brands fa-qq"></i>
                    <i class="white_button fa-brands fa-weixin"></i>
                </div>
                <span class="form_span">Log in using your social account</span>
                <!-- <input type="text" class="form_input" placeholder="Name" /> -->
                <input type="email" class="form_input" placeholder="Email" />
                <input type="password" class="form_input" placeholder="Password" />
                <span href="" class="form_link">Forgot Password?</span>
                <button type="button" class="white_button button submit">SING IN</button>
            </form>
        </div>
        <div class="container b-container" id="b-container">
            <form action="" class="form" id="a-form">
                <div class="form_title title">Sign Up</div>
                <div class="form_icons">
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-qq"></i>
                    <i class="fa-brands fa-weixin"></i>
                </div>
                <span class="form_span">选择注册方式激活电子邮箱注册</span>
                <input type="text" class="form_input" placeholder="Name" />
                <input type="email" class="form_input" placeholder="Email" />
                <input type="password" class="form_input" placeholder="Password" />
                <button type="button" class="white_button button submit">SING UP</button>
            </form>
        </div>
        <div class="switch" id="switch-cnt">
            <div class="circle switch_circle"></div>
            <div class="circle switch_circle2"></div>
            <div class="switch_container" id="switch-c1">
                <div class="switch_title title white" style="letter-spacing: 0">Hellow Friend!</div>
                <p class="switch_description description">去注册一个账号，成为尊贵的粉丝会员，让我们踏入奇妙的旅途</p>
                <button class="switch_button button switch-btn">SIGN UP</button>
            </div>
            <div class="switch_container is-hidden" id="switch-c2">
                <div class="switch_title title white" style="letter-spacing: 0">Welcome Back!</div>
                <p class="switch_description description">已经有账号了嘛，去登入账号来进入奇妙世界</p>
                <button class="switch_button button switch-btn">SIGN IN</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'slideLogin',
    components: {},
    data() {
        return {}
    },
    methods: {},
    mounted() {
        let switchCtn = document.querySelector('#switch-cnt')
        let switchC1 = document.querySelector('#switch-c1')
        let switchC2 = document.querySelector('#switch-c2')
        // let switchCircle = document.querySelectorAll('.switch_circle')
        let switchBtn = document.querySelectorAll('.switch-btn')
        let aContainer = document.querySelector('#a-container')
        let bContainer = document.querySelector('#b-container')
        let allSubmits = document.querySelectorAll('.submit')

        let getButtons = (e) => e.preventDefault()
        let changeForm = (e) => {
            // 修改类名
            switchCtn.classList.add('is-gx')
            // setTimeout(function () {
            //     switchCtn.classList.remove('is-gx')
            // }, 1500)

            switchCtn.classList.toggle('is-txr')
            // switchCircle[0].classList.toggle('is-txr')
            // switchCircle[1].classList.toggle('is-txr')

            switchC1.classList.toggle('is-hidden')
            switchC2.classList.toggle('is-hidden')
            aContainer.classList.toggle('is-txl')
            bContainer.classList.toggle('is-txl')
            bContainer.classList.toggle('is-z')
        }
        // 动画防抖
        const debounce = function (func, delay) {
            let timeoutId

            return function (...args) {
                const context = this
                clearTimeout(timeoutId)
                timeoutId = setTimeout(() => {
                    func.apply(context, args)
                }, delay)
            }
        }
        const debounceRemoveFrames = debounce(() => {
            switchCtn.classList.remove('is-gx')
            console.log('dbc')
        }, 1500)
        for (var i = 0; i < allSubmits.length; i++) {
            allSubmits[i].addEventListener('click', getButtons)
        }
        for (var i = 0; i < switchBtn.length; i++) {
            switchBtn[i].addEventListener('click', changeForm)
            switchBtn[i].addEventListener('click', debounceRemoveFrames)
        }
        // let shell = (e) => {
        //     for (var i = 0; i < allSubmits.length; i++) {
        //         allSubmits[i].addEventListener('click', getButtons)
        //     }
        //     for (var i = 0; i < switchBtn.length; i++) {
        //         switchBtn[i].addEventListener('click', changeForm)
        //         switchBtn[i].addEventListener('click', debounceRemoveFrames)
        //     }
        // }
        // window.addEventListener('load', shell)
        // let where = new URLSearchParams(window.location.search).get('where')
        // if (where == 'yuanyq') {
        //     const element = document.querySelector('.shell')
        //     element.style.transform = 'scale(0.65)'
        //     document.body.style.backgroundColor = '#fff'
        //     document.documentElement.style.overflow = 'hidden'
        // }
    },
}
</script>

<style scoped>
/*
@import 的寻址是在本文件目录，资源不在本目录下要用相对或者绝对路径。
vitepress默认base是/docs/，绝对路径为@import url(/public/practice/slide-login/style.css);见https://process1024.github.io/vitepress/guide/asset-handling#base-url
疑问? `你应该使用根绝对路径引用放在 public 中的文件 - 例如，public/icon.png 在源代码中应始终引用为 /icon.png。`
 */
@import url(style.css);
@import url(../assets/font-awesome/css/fontawesome.css);
@import url(../assets/font-awesome/css/brands.css);
</style>
