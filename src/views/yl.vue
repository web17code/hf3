<style scoped>
    #app{
        background-repeat: no-repeat!important;
        background-size: cover!important;
    }
    main{
        width:100%;
        min-height:900px;
        padding-top: 10px;
        background-size: auto;
        background: transparent!important;
    }
    .wrapper{
        width: 1200px;
        margin:0 auto;
        background: #ffffff;
        opacity: 0.9;
    }
    header{
        width:100%;
        background: #ffffff;
        opacity: 0.9;
    }
    header>div{
        width: 1200px;
        height: 80px;
        margin:0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        color: #156765;
    }
    .head-left{
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .head-right{
        display: flex;
        flex-direction:row;
        justify-content: space-around;
        align-items: center;
        line-height: 23px;
    }
    .head-right span{
        cursor: pointer;
    }
    .head-right>ul{
        display: flex;
        justify-content: flex-start;
        align-items: center;
    }
    .head-right>ul>li{
        display: flex;
        align-items: center;
        padding: 0 36px 0 0;
    }
    .head-right ul li>img{
        margin-right: 10px;
        max-height: 36px;
        max-width: 36px;
    }
    .head-right ul li a{
        font-size: 16px;
        color: #156765;
    }
    .head-right>span{
        font-size: 16px;
        margin-right: 10px;
    }

    nav{
        display: flex;
        justify-content: space-between;
        height: 60px;
        align-items: center;
        border-bottom: 1px solid #84afaf;
    }
    nav ul{
        display: flex;
        justify-content: flex-start;
        margin-left: 20px;
    }
    nav ul li{
        display: flex;
        padding: 6px 0 0 60px;
        color: #666;
        font-size: 16px;
        flex-direction: column;
        align-items: center;
    }
    nav ul li:first-child b{
        width:140%;
        height: 4px;
        margin-top: 2px;
        border-radius: 2px;
    }
    nav ul li.active a{
        color: #156765;
    }
    nav .btn{
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 12px;
        color: #156765;
        border:1px solid #156765;
        background: transparent;
        margin-right: 26px;
        border-radius: 4px;
        cursor: pointer;
        width: 60px;
        height: 32px;
    }
    nav .btn span{
        font-size: 24px;
        font-weight:300;
        margin-right: 4px;
    }

    .section{
        display: flex;
        justify-content: flex-start;
        flex-direction: row;
    }
    .section-left{
        width: 156px;
        display: flex;
        justify-content: center;

    }
    .section-left ul li{
        display: flex;
        justify-content: center;
        margin-top:40px;
        color: #909e9e;
        font-size: 16px;
    }
    .section-left ul li a{
        color: #909e9e;
    }
    .section-left ul li i{
        line-height: 28px;
    }
    .section-left ul li:first-child i{
        line-height: 24px;
    }

    .section-left ul li.active{
        color: #156765;
    }
    .section-left ul li.active a{
        color: #156765;
    }
    .section-left ul li i{
        margin-right: 4px;
    }
    .section-left ul li:first-child{
        margin-top: 20px;
    }
    .section-right{
        border-left:1px solid #84afaf;
        padding: 0 30px 30px 30px;
    }
    .right-content>li{
        margin-top: 30px;
    }
    .right-content>li>ul{
        display: flex;
        flex-wrap: wrap;
        flex-direction: row;
        justify-content: flex-start;
        width: 980px;
    }
    .right-content>li>ul>li{

        display: flex;
        justify-content: center;
        align-items: center;
        width: 140px;
        height: 50px;
        background: #ffffff;
        margin-right: 20px;
        margin-top: 10px;
        border-radius: 4px;
    }
    .right-content>li>ul>li>div{
        width: 30px;
        height: 30px;
        border-radius: 4px;
    }
    .right-content>li>ul>li>p{
        margin-left: 6px;
        width:66px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
    .message{
        color: #417a76;
    }
    .message>ul>li>div{
        background: #156765;
    }
    .course{
        color:#e2762d;
    }
    .course>ul>li>div{
        background: #e2762d;
    }
    .edu{
        color: #67891b;
    }
    .edu>ul>li>div{
        background: #67891b;
    }
    .work{
        color: #3e517c;
    }
    .work>ul>li>div{
        background: #3e517c;
    }
    .message>ul{
        padding:0 0 0 10px;
    }

</style>


<template>
    <div id="app" :style="{background:'url('+getHost+bg[2]+')'}">
        <header>
            <div class="wrap">
                <div class="head-left">
                    <img :src="getHost+bg[1]" alt="">
                </div>
                <div class="head-right">
                    <ul>
                        <li>
                            <img :src="getHost+bg[3]" alt="">
                            <a :style="{color:bg[0]}">RTX</a>
                        </li>
                        <li>
                            <img :src="getHost+bg[4]" alt="">
                            <a :style="{color:bg[0]}">消息</a>
                        </li>
                        <li>
                            <img :src="getHost+bg[5]" alt="">
                            <a :style="{color:bg[0]}">邮箱</a>
                        </li>
                        <li>
                            <img :src="getHost+bg[6]" alt="">
                            <a :style="{color:bg[0]}">换肤</a>
                        </li>
                    </ul>
                    <img src="" alt="">
                    <p :style="{color:bg[0]}">李老师</p>
                </div>
            </div>
        </header>
        <main>
            <div class="wrapper">
                <nav :style="{borderColor:bg[0]}">
                    <ul>
                        <li class="active">
                            <p :style="{color:bg[0]}">导航</p>
                            <b :style="{background:bg[0]}"></b>
                        </li>
                        <li>
                            <p>视频</p>
                            <b></b>
                        </li>
                        <li>
                            <p>图片</p>
                            <b></b>
                        </li>
                    </ul>
                    <button class="btn" :style="{color:bg[0],borderColor:bg[0]}">添加应用</button>
                </nav>
                <div class="section">
                    <div class="section-left">
                        <ul>
                            <li>
                                <i class="iconfont icon-wode" :style="{color:bg[0]}"></i>
                                <a :style="{color:bg[0]}">我的应用</a>
                            </li>
                            <li>
                                <i class="iconfont icon-wujiaoxing2"></i>
                                <a>推荐应用</a>
                            </li>
                            <li>
                                <i class="iconfont icon-e"></i>
                                <a>学校网站</a>
                            </li>
                        </ul>
                    </div>
                    <div class="section-right" :style="{borderLeftColor:bg[0]}">
                        <ul class="right-content">
                            <li class="message">
                                <p>
                                    <i class="iconfont icon-ijian-copy"></i>
                                    信息服务
                                </p>
                                <ul>
                                    <li v-for="message in messages">
                                        <div>
                                            <img src="" alt="">
                                        </div>
                                        <p>{{message.name}}</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="course">
                                <p>
                                    <i class="iconfont icon-book"></i>
                                    课程支持
                                </p>
                                <ul>
                                    <li v-for="course in courses">
                                        <div>
                                            <img src="" alt="">
                                        </div>
                                        <p>{{course.name}}</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="edu">
                                <p>
                                    <i class="iconfont icon-book1"></i>
                                    教育服务
                                </p>
                                <ul>
                                    <li v-for="edu in edus">
                                        <div>
                                            <img src="" alt="">
                                        </div>
                                        <p>{{edu.name}}</p>
                                    </li>
                                </ul>
                            </li>
                            <li class="work">
                                <p>
                                    <i class="iconfont icon-bijiben-copy"></i>
                                    业务管理
                                </p>
                                <ul>
                                    <li v-for="work in works">
                                        <div>
                                            <img src="" alt="">
                                        </div>
                                        <p>{{work.name}}</p>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </main>
    </div>
</template>

<script>
//    import headerTop from '../components/header.vue'
    import myNav from '../components/nav.vue'
    import '../assets/font/iconfont.css'

    export default {
        components: {
            myNav
        },
        name: 'app',
        data () {
            return {
                messages: [
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'}
                ],
                courses: [
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'}
                ],
                edus: [
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'}
                ],
                works: [
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'},
                    {'name': '青浦教育'}
                ],
                bg: null
            }
        },
        mounted: function () {
            this.bg = this.$route.query.homebg
            console.log(this.bg)
        },
        methods: {
            daohang (index) {
                for (var i = 0; i < this.items.length; i++) {
                    this.items[i].active = false
                }
                this.items[index].active = true
            }
        },
        computed: {
            getHost () {//获取指定名称的cookie的值
                var arrstr = document.cookie.split("; ");
                for(var i = 0;i < arrstr.length;i ++){
                    var temp = arrstr[i].split("=");
                    if(temp[0] == "adminHost") return unescape(temp[1]);
                }
            }
        }
    }
</script>

