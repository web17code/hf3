<style scoped>
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
  nav ul li.active b{
    width:140%;
    height: 4px;
    background: #156765;
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
</style>

<template>
  <nav>
    <ul>
      <li class="active">
        <p>导航</p>
        <b></b>
      </li>
      <li>
        <p>视频</p>
        <b></b>
      </li>
      <li>
        <p>图片</p>
        <b></b>
      </li>
      <li v-for="(nav,index) in navs" v-bind:class="{active:nav.active}" @click="clickNav(index)">
        <a>{{nav.name}}</a>
        <b></b>
      </li>
    </ul>
    <button class="btn">添加应用</button>
  </nav>
</template>

<script>
  export default {
    data () {
      return {
      }
    },

    methods: {
      clickNav (index) {
        for (var i = 0; i < this.navs.length; i++) {
          this.navs[i].active = false
        }
        this.navs[index].active = true
      }
    }
  }
</script>

