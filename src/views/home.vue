<style scoped>

    .main-right{
        display: flex;
        flex-direction: column;
        width:100%;
        border-left:1px solid #666;
    }
    .text{
        margin: 20px 30px;
    }
    .top{
        border-bottom: 1px solid #666666;
        display: flex;
    }
    .top>div{
        margin-left: 10px;
        display: flex;
        justify-content: center;
        position: relative;
        padding: 0 10px;
        border-bottom: 3px solid #156765;
    }
    .top p{
        color: #156765;
        padding-bottom: 8px;
    }
    .bottom{
        margin-top: 40px;
    }
    .bottom ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .bottom ul li{
        width: 40px;
        height: 40px;
        margin-left: 40px;
    }
    .ivu-icon-plus-circled{
        font-size: 50px;
    }
    .pic-bottom ul li{
        margin-top: 10px;
    }
    .add{
        margin-left: 20px;
    }

</style>

<template id="index">
    <div>
        <my-header></my-header>
        <div class="first-wrapper">
            <div class="main-left">
                <ul>
                    <li>
                        <router-link :to="nameDatacenter+'/home'" v-bind="{activeClass:'active'}" class="active">前端界面非节假日管理</router-link>
                    </li>
                    <li>
                        <router-link :to="nameDatacenter+'/festival'" v-bind="{activeClass:'active'}" :host="host">节日套装管理</router-link>
                    </li>
                </ul>
            </div>
            <div class="main-right">
                <div class="text">
                    <div class="top">
                        <div>
                            <p>文字颜色</p>
                            <b></b>
                        </div>
                    </div>
                    <div class="bottom">
                        <ul>
                            <li v-for="color in colors" v-bind:style="{background:color.color}"></li>
                        </ul>
                    </div>
                </div>
                <div class="text">
                    <div class="top">
                        <div>
                            <p>纯色背景管理</p>
                            <b></b>
                        </div>

                    </div>
                    <div class="bottom">
                        <ul>
                            <li v-for="color in colors" v-bind:style="{background:color.color}"></li>
                        </ul>
                    </div>
                </div>
                <div class="text">
                    <div class="pic">
                        <div class="top">
                            <div>
                                <p>图片背景管理</p>
                                <b></b>
                            </div>

                        </div>
                        <p @click="deletePic">{{edit}}</p>
                    </div>

                    <div class="pic-bottom">

                        <ul>
                            <div class="add">
                                <router-link :to="nameDatacenter+'/addPic'">
                                    <Icon type="plus-circled"></Icon>
                                </router-link>
                            </div>
                            <li v-for="(pic,index) in pics">
                                <img :src= "host + pic.color" alt="" width="200" height="130">
                                <p>图片</p>
                                <Button type="error" v-bind:style="{display:isShow}" @click="deleteThis(index)">删除</Button>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </div>
    </div>

</template>
<script>
    import myHeader from'./header.vue'
    import nameDatacenter from '../config.js'

    export default{
        components: {
            myHeader
        },
        data () {
            return {
                colors:[],
                pics:[],
                isShow:"none",
                edit:"编辑",
                host: null,
                nameDatacenter:nameDatacenter.nameDatacenter
            }
        },
        mounted: function() {
            // 初始化颜色数据
            this.$http.get(
                        'http://192.168.1.217:8080/datacenter-teacherportal-web/json/Common_getContestPath.json'
            ).then(function (data) {
                var host = data.data.data
                this.host = host
                var session = window.localStorage
                document.cookie = "adminHost=" + this.host
                this.$nextTick(function () {
                    var that = this;
                    that.$http({
                        method:'GET',
                        url: host+'/json/Theme_queryForList_selectThemeIsStyle.json?isStyle=1'
                    }).then(function(data){
                        var getData = data.data.data
                        this.colors = getData;
                    },function(error){
                    })
                })
                // 初始化图片数据
                this.$nextTick(function () {
                    var that = this;
                    that.$http({
                        method:'GET',
                        url: host+'/json/Theme_queryForList_selectThemeIsStyle.json?isStyle=3'
                    }).then(function(data){
                        var getData = data.data.data
                        this.pics = getData;
                    },function(error){
                    })
                })
            })
        },
        computed:{

        },
        methods:{
            // 删除图片
            deletePic(){
                if(this.edit === "编辑"){
                    this.isShow = "inline-block";
                    this.edit = "完成";
                }else if(this.edit === "完成"){
                    this.edit = "编辑";
                    this.isShow = "none";
                }
            },
            // 确认删除
            deleteThis(index){
                console.log(index)
                let basePK = this.pics[index].themePk;
                this.pics.splice(index,1);
                this.$http({
                    method:'GET',
                    //后台给的地址
                    url:this.host+'/json/Theme_delete_deleteScTheme.json?basePk='+basePK
                }).then(function(data){
                    console.log(data)
                })
            }
        }
    }
</script>
