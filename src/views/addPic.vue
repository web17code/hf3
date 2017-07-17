<style scoped>
    /*添加图片*/
    .wrapper2{
        width: 1200px;
        margin: 0 auto;
        background: #fff;
        display: flex;
        flex-direction: column;
        align-items: center;
        min-height: 600px;
    }
    .back{
        margin: 10px 0 0 20px;
        width:100%;
        cursor: pointer;
        text-align: left;
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
    .add-pic{
        width:100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-top: 40px;
    }
    .add-top{
        width:50%;
        margin-left: 25%;
        display: flex;
        flex-direction: row;
    }
    .add-top>img{
        background: #f2f2f2;
    }
    .add-top>div{
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        align-items: flex-start;
        margin-left: 10px;
    }
    .add-top>div>button{
        padding:6px 16px;
        background: transparent;
        border:1px solid #666;
        border-radius: 4px;
    }
    .add-bottom{
        width:50%;
        display: flex;
        justify-content: flex-start;
        margin-top: 10px;
        align-items: center;
    }
    .add-bottom span{
        width:25%;
        text-align: center;
    }
    .add-bottom input{
        width:50%;
        height: 30px;
        padding:0 4px;
    }
    .btn{
        width:50%;
        margin-left: 25%;
        margin-top:10px;
    }

</style>
<template>
    <div>
        <myHeader></myHeader>
        <div class="wrapper2">
            <p class="back">
                <button @click="goback">返回</button>
            </p>
            <div class="add-pic">
                <div class="add-top">
                    <img :src="getUrl" width="200" height="112">
                    <div>
                        <Upload :action=getHost2 :data="defaultList" name="fileload" :on-success="success">
                            <Button icon="ios-cloud-upload-outline" data="">上传图片</Button>
                        </Upload>
                        <p>图片建议尺寸XX像素XX像素</p>
                    </div>
                </div>
                <div class="btn">
                    <Button type="primary" @click="confirm">确定</Button>
                </div>

            </div>
        </div>
    </div>
</template>
<script>
    import myHeader from './header.vue'
    export default{
        components:{
            myHeader
        },
        data() {
            return {
                "defaultList":
                    {"name":''},
                src:'',
                modal1: false,
            }
        },
        methods:{
            // 返回
            goback:function(){
                history.go(-1)
            },
            success(response, file){
                this.src = response.data.upFileUrl
            },
            // 确认上传
            confirm(){
                this.$http.post(this.getHost+'/json/Theme_saveImage_insertScTheme.json',{isStyle:3,pageStyle:this.src},{emulateJSON:true}
            ).then(function(response){
                    console.log(response);
                    history.go(0)
                })
            }
        },
        computed: {
            getUrl() {
                if(this.src === '' || this.getHost === ''){
                    return null
                }else{
                    return this.getHost + this.src;
                }
            },
            getHost () {//获取指定名称的cookie的值
                var arrstr = document.cookie.split("; ");
                for(var i = 0;i < arrstr.length;i ++){
                    var temp = arrstr[i].split("=");
                    if(temp[0] == "adminHost") return unescape(temp[1]);
                }
            },
            getHost2 () {
                return this.getHost + '/json/Upload_image_data.json?judge=1'
            }
        }
    }
</script>
