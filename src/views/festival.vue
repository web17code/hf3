<style scoped>
    /*节日套装*/
    .festival{
        /*height:100%;*/
        width:100%;
        border-left:1px solid #666666;
    }
    .jieri{
        display: flex;
        flex-direction: row;
        margin:100px 0 0 80px;
    }
    .first{
        width:150px;
        height: 150px;
        background: #f2f2f2;
        margin-top: 20px;
        cursor: pointer;
        margin-left: 20px;
        line-height: 175px;
        text-align: center;
    }
    .jieri ul{
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
    }
    .jieri ul li{
        width:150px;
        height: 150px;
        margin-left: 20px;
        margin-top: 20px;
        border:1px solid #555555;
        overflow: hidden;
    }
    .jieri ul li>.fe-top{
        margin: 4px 0 0 10px;
        display: flex;
        justify-content: space-around;
    }
    .jieri ul li>img{
        border:none;
    }
    .jieri ul li>div{
        height: 30px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    .jieri ul li>div>a{
        flex:1;
        text-align: center;
        cursor: pointer;
    }
    .jieri ul li>.fe-bottom>a:first-child{
        border-right:1px solid #ccc;
    }
    .jieri ul li>.fe-bottom>a.bianji{
        border-right:1px solid #ccc;
    }
    .ivu-row{
        margin-top: 20px;
    }
    .ivu-icon-plus-circled{
        font-size: 50px;
    }
    .text-number{
        width:80px;
        overflow:hidden;
        text-overflow:ellipsis;
        white-space:nowrap;
    }
</style>

<template id="festival">
    <div>
        <myHeader></myHeader>
        <div class="first-wrapper">
            <div class="main-left">
                <ul>
                    <li>
                        <router-link :to="nameDatacenter+'/home'" v-bind="{activeClass:'active'}">前端界面非节假日管理</router-link>
                    </li>
                    <li>
                        <router-link :to="nameDatacenter+'/festival'" v-bind="{activeClass:'active'}">节日套装管理</router-link>
                    </li>
                </ul>
            </div>
            <div class="festival">
                <div class="jieri">
                    <ul>
                        <a class="first">
                            <router-link :to="nameDatacenter+'/edit'">
                                <Icon type="plus-circled" style=""></Icon>
                            </router-link>
                        </a>
                        <li v-for="(festival,index) in festivals">
                            <div class="fe-top">
                                <p class="text-number" v-bind:title="festival.suitName">{{festival.suitName}}</p>
                                <p style="color: red;width: 48px;">{{festival.type}}</p>
                            </div>

                            <img v-bind:src="getHost+festival.backgroundImg" alt="" width="150" height="80">
                            <div class="fe-bottom">
                                <a @click="shezhi(index)">设置</a>
                                <a class="bianji">
                                        <router-link :to="{path:nameDatacenter+'/edit',query: {fesIndex:festival.id}}" >
                                        编辑
                                    </router-link>
                                </a>
                                <a @click="deleteFes(index,festival.id)">删除</a>
                            </div>
                            <Modal v-model="modal1" title="设置" @on-ok="onOk(index)">
                                <Row>
                                    <Col span="6" style="text-align: right;line-height: 32px;">
                                    选择时间
                                    </Col>
                                    <Col span="16" offset="2">
                                    <Date-picker type="datetimerange" confirm :value="value1" @on-ok="handleOk"  format="yyyy-MM-dd HH:mm:ss" style="width: 300px" @on-change="changeTime" placeholder="选择日期和时间">
                                    </Date-picker>
                                    </Col>
                                </Row>

                                <Row>
                                    <Col span="6" justify="end" style="text-align: right">是否取消使用</Col>
                                    <Col span="14" offset="2">
                                    <Radio-group v-model="disparkType" number>
                                        <Radio label="0">是</Radio>
                                        <Radio label="1">否</Radio>
                                    </Radio-group>
                                    </Col>
                                </Row>
                            </Modal>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
        <Modal cancel-text=""
                v-model="modal2"
                title="系统提示"
                @on-ok="refresh"
        >
            <p>{{text}}</p>
        </Modal>
        <Modal
                v-model="modal3"
                title="系统提示">
            <p>{{text3}}</p>
        </Modal>
        <Modal
                v-model="isDelete"
                title="系统提示"
                @on-ok="deleteFes_ok">
            <p>您要删除当前节日套装吗</p>
        </Modal>
    </div>


</template>
<script>
    import myHeader from './header.vue'
    import nameDatacenter from '../config.js'

    export default{
        components: {
          myHeader
        },
        data () {
            return {
                open:false,
                isDelete:false,//确认删除的模态框，false隐藏，true显示
                delete_index:"",//删除操作需要的参数
                delete_id:"",//删除操作需要的参数
                modal2: false,
                modal3: false,
                festivals:null,
                value1:null,
                value2:null,
                nameDatacenter:nameDatacenter.nameDatacenter,
                id: null,
                disparkType: null,
                text: null,
                modal1:false,
                text3: null
            }
        },
        mounted: function() {
            // 初始化节日套装数据
            //this.$nextTick(function () {
                //var that = this;
                this.$http({
                    method:'GET',
                        url: this.getHost+'/json/ThemeFestival_queryForList_selectThemeFestival.json?rand='+ Math.random()
                }).then(function(data){
                    this.festivals = data.data.data;
                },function(error){
                })
            //})
        },
        methods: {
//            handleClick () {
//                this.open = !this.open;
//                if((typeof this.value1) != string) {
//                    this.value1 = '';
//                }
//            },
//            时间改变
            changeTime (data) {
                this.value2 = data
            },
            handleOk () {
//                this.open = false;
            },
            onOk(index){
                //发送修改过的时间
                //this.$nextTick(function () {
                    if(null != this.value2){
                        this.value1 = this.value2
                    }
                    var that = this;
                    that.$http({
                        method:'GET',
                        url: this.getHost+'/json/ThemeFestival_activateThemeFestival_activateThemeFestival.json?id='+this.id+'&disparkType='+this.disparkType+'&timeArray='+this.value1
                    }).then(function(data){
                        this.modal1 = false
                        this.modal2 = true
                        if(data.data.code === '0000'){
                            this.text = '设置成功'
                        }else{
                            this.text = data.data.data
                        }
                    },function(error){
                    })
               // })
            },
            // 设置节日套装时间
            shezhi(index){
                var getData1 = []
                this.value1 = null
                this.modal1 = true
                this.id = this.festivals[index].id
                this.disparkType = this.festivals[index].disparkType
                if(this.festivals[index].startDate === null || this.festivals[index].startDate === undefined || this.festivals[index].startDate === '' || this.festivals[index].endDate === undefined || this.festivals[index].endDate === '' || this.festivals[index].endDate === null){
                    this.value1 = '';
                }else{
                    getData1.push(this.festivals[index].startDate)
                    getData1.push(this.festivals[index].endDate)
                    this.value1 = getData1;
                }
            },
            deleteFes(index,id) {
                this.isDelete = true;
                this.delete_index = index;
                this.delete_id = id;
            },
            refresh(){
                history.go(0)
            },
            deleteFes_ok:function(){
                var index = this.delete_index;
                var id = this.delete_id;
                this.$http({
                    method:'GET',
                    //后台给的地址
                    url:this.getHost+'/json/ThemeFestival_deleteThemeFestival_deleteThemeFestival.json?id='+id
                }).then(function(data){
                    this.modal3 = true;
                    if(data.data.code === "0000"){
                        this.text3 = "删除成功"
                        this.festivals.splice(index, 1);
                    }else{
                        this.text3 = "删除失败"
                    }

                })
            }
        },
        computed:{
            // 是否启用节日套装
//            isOn(){
//                for(let i=0;i<this.festivals.length;i++){
//                    let data = this.festivals[i].disparkType
//                    if(data=== 0){
//                        data = '';
//                    }else if(data === 1){
//                        data = '当前启用'
//                    }
//                }
//                return data;
//            },
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
