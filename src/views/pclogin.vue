<style scoped>
    main{
        background: #fff;
    }
    .total{
        width:100%;
        height:100%;
        background-repeat: no-repeat;
        background-size: cover;
    }
    .wrapper1{
        width: 234px;
        /*height: 482px;*/
        border-radius: 0px;
        overflow: hidden;
        margin: 0 auto ;
        padding-top: 5%;
    }
    .yl-form{
        width:100%;
        text-align: center;
        /*height: 482px;*/
        background: #e1eae6;
    }
    .yl-form img{
        width:172px;
        margin: 18px auto;
    }
    .yl-form h5{
        height: 38px;
        line-height: 38px;
        font-size: 14px;
        background-color: #c39c65;
        color: #fff;
        text-align: center;
        display: block;
        margin-bottom: 24px;
    }
    .yl-login{
        width: 182px;
        line-height: 39px;
        color: #ccc;
        text-align: left;
        margin:30px auto;
    }
    .yl-login input{
        border: 1px solid #ACC9C5;
        background: #e1eae6;
        width: 164px;
        padding: 0 9px;
        height: 39px;
        font-size: 12px;
        color: #000;
    }
</style>

<template>
    <div class="total" :style="{width:width,height:height,backgroundImage:'url('+bg+')'}">
        <div class="wrapper1">
            <div class="yl-form">
                <img src="../images/pBg.png" alt="">
                <h5>用户中心</h5>
                <div class="yl-bottom">
                    <div class="yl-login">
                        <div style="margin-bottom: 0">
                            <input type="text" placeholder="用户/省份证号/学籍号">
                        </div>

                        <input type="text" placeholder="登录密码">
                    </div>
                    <p style="text-align: center;color: #C39C65;">账号查询</p>
                    <p style="text-align: center;border-top: 2px solid #79a9a7;line-height: 24px;padding-top: 10px;">登录</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                bg: null,
                width: null,
                height: null
            }
        },
        mounted: function(){
            this.bg = this.getHost + this.$route.query.webBg
            console.log(this.bg)
            let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            let h = document.body.clientHeight || window.innerHeight || document.documentElement.clientHeight;
            this.width = w + 'px';
            this.height = h + 'px';
        },
        computed: {
            getHost () {
                var arrstr = document.cookie.split("; ");
                for(var i = 0;i < arrstr.length;i ++){
                    var temp = arrstr[i].split("=");
                    if(temp[0] == "adminHost") return unescape(temp[1]);
                }
            }
        }
    }
</script>

