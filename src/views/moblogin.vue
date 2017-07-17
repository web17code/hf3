<style scoped>
    body{
        background: #000;
    }
    .mobile{
        width:375px;
        height:667px;
        margin: 0 auto;
        background: #f2f2f2;
        padding-top: 5%;
    }
    .wrapper1{
        width: 234px;
        border-radius: 0px;
        overflow: hidden;
        background: #e1eae6;
        margin: 0 auto 0;
    }
    .yl-form img{
        width: 172px;
        margin-top: 18px;
        margin-left: 31px;
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
    <div class="mobile" :style="{background:'url('+bg+')'}">
        <div class="wrapper1">
            <div class="yl-form">
                <img src="../../src/images/pBg.png" alt="">
                <h5>用户中心</h5>
                <div class="yl-bottom">
                    <div class="yl-login">
                        <div style="margin-bottom: 0">
                            <input type="text" placeholder="用户/省份证号/学籍号">
                        </div>

                        <input type="text" placeholder="登录密码">
                    </div>
                    <p style="text-align: center;color: #C39C65;">账号查询</p>
                    <p style="text-align: center;border-top: 2px solid #79a9a7;line-height: 24px;padding-top: 6px;">登录</p>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        data () {
            return {
                bg: '#f2f2f2'
            }
        },
        mounted: function () {
            this.bg = this.getHost + this.$route.query.mobbg
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
 