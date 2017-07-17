<style scoped>
    /*新增节日套装*/
    .wrapper3{
        margin: 0 auto;
        width:1200px;
        padding:0 5%;
        background: #ffffff;
        height:100%;
    }
    .edit-back{
        border-bottom: 1px solid #666666;
        padding: 16px 0;
    }
    .w-10{
        width:10%;
        margin-right: 20px;
        text-align: right;
    }
    .w-15{
        width:15%;
    }
    .w-50{
        width:50%;
    }
    .w-80{
        width:80%;
    }
    .w-85{
        width:85%;
    }
    .edit-name{
        display: flex;
        justify-content: flex-start;
        align-items: center;
        margin-top: 20px;
    }
    .edit-name input{
        height: 30px;
        padding:0 6px;
    }
    .edit-bg{
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
        padding-bottom: 20px;
        border-bottom:1px solid #666666;
    }
    .edit-web{
        display: flex;
        justify-content: flex-start;
    }
    .edit-web img{

    }
    .edit-web2{
        display: flex;
        flex-direction: row;
    }
    .edit-web2>div{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
    }
    .edit-web2>div>div{
        display: flex;
        flex-direction: row;
        margin-left: 10px;
        /*justify-content: flex-end;*/
    }
    .edit-web2>div>div button{
        margin-left: 10px;
    }
    .btn1{
        padding:4px 30px;
        background: transparent;
        border: 1px solid #666666;
        border-radius: 4px;
    }
    .btn2{
        padding:4px 40px;
        background: #169BD5;
        border: 1px solid #169BD5;
        color: #ffffff;
        border-radius: 4px;
        height: 32px;
    }
    .edit-web2>div>p{
        margin:10px 0 0 20px;
    }
    .text-color{
        margin-top: 20px;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;
    }
    .text-color ul{
        display: flex;
        justify-content: flex-start;
    }
    .text-color ul li{
        width: 30px;
        height:30px;
        background: red;
        margin-left: 20px;
    }
    .text-color ul li:first-child{
        margin-left: 0;
    }
    .edit-logo{
        margin-top: 20px;
        display: flex;
        justify-content: flex-start;
    }
    .edit-tu{
        display: flex;
        justify-content: flex-start;
        margin-top: 20px;
    }
    .edit-tu ul{
        display: flex;
        flex-direction: column;
    }
    .edit-tu ul li{
        display: flex;
        flex-direction: row;
        margin-top: 10px;
    }
    /*.edit-tu ul li>p{*/
        /*width:30px;*/
    /*}*/
    .edit-tu ul li:first-child{
        margin-top: 0;
    }
    .edit-tu ul li img{
        margin-left: 20px;
    }
    .edit-tu ul li button{
        margin-left: 20px;
        padding: 0 10px;
        /*background: transparent;*/
        /*border: 1px solid #666666;*/
    }
    .textp{
        margin-left: 10px;
    }
    .yulan{
        width:50%;
        margin: 20px auto;
    }
    .yulan button{
        padding:4px 40px;
        background: #169BD5;
        border: 1px solid #169BD5;
        color: #ffffff;
        border-radius: 4px;
        margin-left: 20px;
    }
    .ivu-upload-list{
        margin-top: 0!important;
    }
    .back>button{
        color: #ffffff;
        background-color: #2d8cf0;
        border-color: #2d8cf0;
        padding: 6px 15px;
        font-size: 12px;
        border-radius: 4px;
        border: 1px solid transparent;
        white-space: nowrap;
    }
    .back>button:hover{
        background-color: #57a3f3;
        border-color: #2D8cF0;
    }
    .back1{
        padding-top: 10px;
        margin:0;
        margin-left: -60px;
    }
    .wrapper3 img{
        background: #f2f2f2;
    }
</style>

<template>
    <div>
        <my-header></my-header>
        <div class="wrapper3">
            <p class="back back1">
                <button @click="goback">返回</button>
            </p>
            <div class="edit-name">
                <p class="w-10">名称</p>
                <input type="text" class="w-50" placeholder="请输入套装名称" v-model="suit.suitName" maxlength="12">
            </div>
            <div class="edit-bg">
                <p class="w-10">自定义登录背景</p>
                <div class="edit-right w-80">
                    <div class="edit-web">
                        <p class="w-15">1,web背景</p>
                        <div class="w-85 edit-web2">
                            <img :src="getUrl1" alt="" width="178" height="100">
                            <div>
                                <div>
                                    <Upload :action="host1" :on-success="success1" name="fileload">
                                        <Button type="ghost">选择图片</Button>
                                    </Upload>
                                    <router-link :to="{path:nameDatacenter+'/pclogin',query: {webBg:suit.webLoginBackground}}" target="_blank">
                                        <button class="btn2">预览</button>
                                    </router-link>
                                </div>
                                <p>图片建议尺寸:1920像素X1080像素,图片大小不能超过2M</p>
                            </div>
                        </div>
                    </div>
                    <div class="edit-web" style="margin-top: 20px;">
                        <p class="w-15">2,移动端网页背景</p>
                        <div class="w-85 edit-web2">
                            <img :src="getUrl2" alt="" width="100" height="178">
                            <div>
                                <div>
                                    <Upload :action="host1" :on-success="success2" name="fileload" >
                                        <Button type="ghost">选择图片</Button>
                                    </Upload>
                                    <router-link :to="{path:nameDatacenter+'/moblogin',query:{mobbg:suit.appLoginBackground}}" target="_blank">
                                        <button class="btn2">预览</button>
                                    </router-link>
                                </div>
                                <p>图片建议尺寸:750像素X1334像素,图片大小不能超过2M</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
            <div class="text-color">
                <p class="w-10">文字颜色</p>
                <div>
                    <div>
                        <color-picker v-model="suit.wordColor" v-on:change="headleChangeColor"></color-picker>
                    </div>
                </div>

            </div>
            <div class="edit-logo">
                <p class="w-10">自定义Logo</p>
                <div class="w-85 edit-web2">
                    <img :src="getUrl3" alt="" width="308" height="100">
                    <div>
                        <div>
                            <Upload :action="host1" :on-success="success3" name="fileload" >
                                <Button type="ghost">选择图片</Button>
                            </Upload>
                        </div>
                        <p>图片建议尺寸为156像素X80像素</p>
                    </div>

                </div>
            </div>
            <div class="edit-logo">
                <p class="w-10">自定义背景</p>
                <div class="w-85 edit-web2">
                    <img :src="getUrl4" alt="" width="308" height="100">
                    <div>
                        <div>
                            <Upload :action="host1" :on-success="success4" name="fileload" >
                                <Button type="ghost">选择图片</Button>
                            </Upload>
                        </div>
                        <p>图片建议尺寸:1920像素X1080像素,图片大小不能超过2M</p>
                    </div>

                </div>
            </div>
            <div class="edit-tu">
                <p class="w-10">自定义图标</p>
                <ul>
                    <li>
                        <p>RTX</p>
                        <img :src="getUrl5" alt="" width="20" height="20">
                        <Upload :action="host1" :on-success="success5" name="fileload" >
                            <Button type="info">更改图标</Button>
                        </Upload>
                        <p class="textp">建议24像素X24像素,最大不能超过36像素X像素</p>
                    </li>
                    <li>
                        <p>消息</p>
                        <img :src="getUrl6" alt="" width="20" height="20">
                        <Upload :action="host1" :on-success="success6" name="fileload" >
                            <Button type="info">更改图标</Button>
                        </Upload>
                        <p class="textp">建议24像素X24像素,最大不能超过36像素X像素</p>
                    </li>
                    <li>
                        <p>邮箱</p>
                        <img :src="getUrl7" alt="" width="20" height="20">
                        <Upload :action="host1" :on-success="success7" name="fileload" >
                            <Button type="info">更改图标</Button>
                        </Upload>
                        <p class="textp">建议24像素X24像素,最大不能超过36像素X像素</p>
                    </li>
                    <li>
                        <p>换肤</p>
                        <img :src="getUrl8" alt="" width="20" height="20">
                        <Upload :action="host1" :on-success="success8" name="fileload" >
                            <Button type="info">更改图标</Button>
                        </Upload>
                        <p class="textp">建议24像素X24像素,最大不能超过36像素X像素</p>
                    </li>
                </ul>
            </div>
            <div class="yulan">
                <router-link :to="{path:nameDatacenter+'/yl',query:{homebg:[suit.wordColor,suit.customLogo,suit.backgroundImg,suit.rtxIcon,suit.newsIcon,suit.emailIcon,suit.skinIcon]}}" target="_blank">
                    <button>预览</button>
                </router-link>
                <button @click="finish">完成编辑</button>
            </div>
            <Modal
                    v-model="modal1"
                    title="系统提示">
                <p>{{text}}</p>
            </Modal>
        </div>
    </div>
</template>
<script>
    import myHeader from './header.vue'
    import colorPicker from '../plugin/vue-color-picker/colorPicker.vue'
    import nameDatacenter from '../config.js'
    export default{
        components:{
          myHeader,
          colorPicker
        },
        props:{
            host: null
        },
        data(){
            return{
                suit:{
                    // 套装名称
                    suitName:null,
                    // 登录背景
                    webLoginBackground:null,
                    // 移动端登录背景
                    appLoginBackground:null,
                    // 文字颜色
                    wordColor:null,
                    // logo
                    customLogo:null,
                    // 背景图片
                    backgroundImg:null,
                    // rtx图标
                    rtxIcon:null,
                    // 消息图标
                    newsIcon:null,
                    // email图标
                    emailIcon:null,
                    // 换肤图标
                    skinIcon:null,
                    getid: null
                },
                modal1:false,
                text:null,
                color:'#e43937',
                nameDatacenter:nameDatacenter.nameDatacenter
            }
        },
        mounted: function(){
            var edtiFes = this.$route.query.fesIndex
            this.$http.post(
                    this.getHost+'/json/ThemeFestival_getThemeFestivalById_selectThemeFestivalIsId.json?id='+edtiFes
            ).then(function(response){
                if(response.data.code === '0000'){
                    var fes = response.data.data
                    console.log(fes)
                    console.log(edtiFes)
                        this.suit.suitName = fes.suitName
                        this.suit.webLoginBackground =fes.webLoginBackground
                        this.suit.appLoginBackground =fes.appLoginBackground
                        this.suit.wordColor =fes.wordColor
                        this.suit.customLogo =fes.customLogo
                        this.suit.backgroundImg =fes.backgroundImg
                        this.suit.rtxIcon =fes.rtxIcon
                        this.suit.newsIcon =fes.newsIcon
                        this.suit.emailIcon =fes.emailIcon
                        this.suit.skinIcon =fes.themeIcon
                        this.getid = fes.id
                }
            })


        },
        methods:{
            // 返回
            goback:function(){
                history.go(-1)
            },
            // 文字颜色
            headleChangeColor(color){
                this.suit.wordColor = color;
            },
            // 登录背景上传
            success1(response,file){
                this.suit.webLoginBackground = response.data.upFileUrl
            },
            // 移动端背景上传
            success2(response,file){
                this.suit.appLoginBackground = response.data.upFileUrl
                console.log(response.data)
            },
            // logo上传
            success3(response,file){
                this.suit.customLogo = response.data.upFileUrl
            },
            // 背景上传
            success4(response,file){
                this.suit.backgroundImg = response.data.upFileUrl
            },
            // rtx图标上传
            success5(response,file){
                this.suit.rtxIcon = response.data.upFileUrl
            },
            // 消息图标上传
            success6(response,file){
                this.suit.newsIcon = response.data.upFileUrl
            },
            // email图标上传
            success7(response,file){
                this.suit.emailIcon = response.data.upFileUrl
            },
            // 换肤图标
            success8(response,file){
                this.suit.skinIcon = response.data.upFileUrl
            },
            finish(){
                // 判断用户上传是否为空
                this.modal1 = true;
                switch (null)
                {
                    case this.suit.suitName:
                        this.text = '请输入套装名称';
                        return;
                    break;
                    case this.suit.webLoginBackground:
                        this.text = '请选择登录背景';
                        return;
                    break;
                    case this.suit.appLoginBackground:
                        this.text = '请选择移动端网页背景';
                        return;
                    break;
                    case this.suit.wordColor:
                        this.text = '请选择文字颜色';
                        return;
                    break;
                    case this.suit.customLogo:
                        this.text = '请选择logo图片';
                        return;
                    break;
                    case this.suit.backgroundImg:
                        this.text = '请选择背景图片';
                        return;
                    break;
                    case this.suit.rtxIcon:
                        this.text = '请选择RTX图标';
                        return;
                    break;
                    case this.suit.emailIcon:
                        this.text = '请选择邮箱图标';
                        return;
                    break;
                    case this.suit.newsIcon:
                        this.text = '请选择消息图标';
                        return;
                    break;
                    case this.suit.skinIcon:
                        this.text = '请选择换肤图标';
                        return;
                        break;
                    default:
                    break;
                }
                // 完成编辑
                this.$http.post(
                        this.getHost+'/json/ThemeFestival_addThemeFestival_addThemeFestival.json',
                        {wordColor:this.suit.wordColor,backgroundImg:this.suit.backgroundImg, suitName:this.suit.suitName, webLoginBackground:this.suit.webLoginBackground, appLoginBackground:this.suit.appLoginBackground, customLogo:this.suit.customLogo, rtxIcon:this.suit.rtxIcon, newsIcon:this.suit.newsIcon, emailIcon:this.suit.emailIcon, themeIcon:this.suit.skinIcon,id:this.getid},{emulateJSON:true}
                ).then(function(response){
                    console.log(response);
                    if(response.data.code === "0000"){
                        this.text = '添加主题成功';
                        history.go(0)
                    }else{
                        this.text = '添加主题失败';
                    }

                })
            }
        },
        computed:{
            // 上传div预览
            getUrl1() {
                if(this.suit.webLoginBackground === null){
                    return
                }else{
                    return this.getHost + this.suit.webLoginBackground
                }
            },
            getUrl2() {
                if(this.suit.appLoginBackground === null){
                    return
                }else{
                    return this.getHost + this.suit.appLoginBackground
                }
            },
            getUrl3() {
                if(this.suit.customLogo === null){
                    return
                }else{
                    return this.getHost + this.suit.customLogo
                }
            },
            getUrl4() {
                if(this.suit.backgroundImg === null){
                    return
                }else{
                    return this.getHost + this.suit.backgroundImg
                }
            },
            getUrl5() {
                if(this.suit.rtxIcon === null){
                    return
                }else{
                    return this.getHost + this.suit.rtxIcon
                }
            },
            getUrl6() {
                if(this.suit.newsIcon === null){
                    return
                }else{
                    return this.getHost + this.suit.newsIcon
                }
            },
            getUrl7() {
                if(this.suit.emailIcon === null){
                    return
                }else{
                    return this.getHost + this.suit.emailIcon
                }
            },
            getUrl8() {
                if(this.suit.skinIcon === null){
                    return
                }else{
                    return this.getHost + this.suit.skinIcon
                }
            },
            getHost () {//获取指定名称的cookie的值
                var arrstr = document.cookie.split("; ");
                for(var i = 0;i < arrstr.length;i ++){
                    var temp = arrstr[i].split("=");
                    if(temp[0] == "adminHost") return unescape(temp[1]);
                }
            },
            host1 () {
                return this.getHost + 'json/Upload_image_data.json?judge=3'
            }
        }

    }
</script>