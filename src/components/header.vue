<style scoped>
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
  .time{
    font-size: 14px;
  }
  .head-right{
    display: flex;
    flex-direction:row;
    justify-content: space-around;
    align-items: center;
    line-height: 23px;
  }
  .head-right ul{
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
  .head-right ul li{
    display: flex;
    padding: 0 36px 0 0;
  }
  .head-right ul li>img{
    margin-right: 10px;
  }
  .head-right ul li a{
    font-size: 16px;
  }
  .head-right>span{
    font-size: 16px;
    margin-right: 10px;
  }
  header button{
    border: 1px solid #156765;
    font-size: 14px;
    color: #156765;
    background: transparent;
    margin-left: 8px;
    cursor: pointer;
    line-height: 23px;
  }
  .person{
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
    background: #cccccc;
  }
</style>

<template>
  <header>
    <div class="wrap">
      <div class="head-left">
        <img src="" alt="">
        <div class="time">2017-6-01 11:47:00 星期四</div>
      </div>
      <div class="head-right">
        <ul>
          <li v-for="(head,index) in heads" @click="changeSkin(index)">
            <!--<img :src="head.src" alt="">-->
            <img src="../assets/img/rtx1.png" alt="">
            <a>{{head.name}}</a>
          </li>
        </ul>
        <div class="person"></div>
        <span>杨洋</span>
        <button class="btn">注销</button>
      </div>
    </div>
  </header>
</template>

<script>
  export default {
    data () {
      return {
        heads: [
//          { 'src': '../assets/img/rtx1.png', 'name': 'RTX' },
//          { 'src': '../assets/img/message1.png', 'name': '消息' },
//          { 'src': '../assets/img/email1.png', 'name': '邮箱' },
//          { 'src': '../assets/img/skin1.png', 'name': '换肤' }
        ]
      }
    },
    methods: {
      changeSkin (index) {
        if (index === 3) {
          alert(213)
        }
      }
    }
  }
</script>


