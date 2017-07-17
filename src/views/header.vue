<style scoped>
    header{
        width:100%;
        background: #E8F0F0;
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
        flex-direction: row;
        align-items: center;
    }
    .head-right a{
        font-size: 14px;
        background: transparent;
        margin-left: 8px;
        cursor: pointer;
        height: 20px;
        padding: 0 6px;
        border:none;
    }
</style>

<template>
    <header>
        <div class="wrap">
            <div class="head-left">
                <p>用户自定义界面素材管理</p>
            </div>
            <div class="head-right">
                <img src="" alt="">
                <p>{{name.XM}}</p>
                <a class="btn123" @click="zhuxiao">注销</a>
            </div>
        </div>
    </header>
</template>

<script>
    export default{
        data () {
            return{
                name:null
            }
        },
        mounted: function(){
            this.$http.get(
                    'http://192.168.1.217:8080/datacenter-teacherportal-web/json/Common_getContestPath.json'
            ).then(function(data){
                var host = data.data.data
                this.$http.get(
                        host + 'json/Common_getUser_data.json'
                ).then(function(data){
                    if(data.data.code === '0000') {
                        console.log(data.data.data)
                        this.name = data.data.data
                    }
                })
            })
        },
        methods: {
            zhuxiao () {
               // this.$http.get(this.getHost + 'logout.jsp').then(function (data) {
                window.location.href = this.getHost + 'logout.jsp?rand=' + Math.random()
               // })
            }
        },
        computed: {
            getHost () {//获取指定名称的cookie的值
                var arrstr = document.cookie.split("; ");
                for (var i = 0; i < arrstr.length; i++) {
                    var temp = arrstr[i].split("=");
                    if (temp[0] == "adminHost") return unescape(temp[1]);
                }
            }
        }
    }
</script>

