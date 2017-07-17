<style scoped>
  .skin{
    position: fixed;
    bottom: 0;
    width:100%;
    height:400px;
  }
  .wripper{
    width:1200px;
    margin: 0 auto;
  }
  .skin-top{
    height:60px;
    background: rgba(0,0,0,0.6);
    filter: alpha(opacity=40);
  }
  .skin-left{
    height:100%;
    float: left;
  }
  .skin-left ul{
    height:100%;
  }
  .skin-left ul li{
    float: left;
    width: 120px;
    height:100%;
    cursor: pointer;
    line-height: 60px;
    text-align: center;
  }
  .skin-left ul li.active{
    background: #000000;
    opacity: 1;
  }
  .skin-left ul li p{
    color: #ffffff;
    width: 120px;
    font-size: 14px;
  }
  .skin-right{
    float: right;
    line-height: 60px;
  }
  .skin-right button{
    width:80px;
    height: 32px;
    color: #ffffff;
    border-radius: 4px;
    cursor: pointer;
    border:none;
    line-height: 32px;
  }
  .btn1{
    background: #046a69;
    margin-right: 30px;
  }
  .btn2{
    background: #261d3b;
    margin-right: 4px;
  }
  .skin-bottom{
    background: #000000;
    height: 340px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 100px;
  }
  .skin-bottom ul{
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .skin-bottom ul li{
    width:50px;
    height: 50px;
    margin: 10px 5px 0 5px;
    border-radius: 4px;
  }

</style>

<template>
  <div class="skin">
    <div class="wripper">
      <div class="skin-top">
        <div class="skin-left">
          <ul>
            <li v-for="(color,index) in colors" @click="changeColor(index)" :class="{active:color.active}">
              <p>{{color.name}}</p>
            </li>
          </ul>
        </div>
        <div class="skin-right">
          <button class="btn1">确认</button>
          <button class="btn2">取消</button>
        </div>
      </div>
      <div class="skin-bottom">
        <ul>
          <li v-bind:style="{background:bg.bg}" v-for="bg in bgs"></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        colors: [
          {'name': '文字颜色', 'active': true},
          {'name': '背景颜色', 'active': false}
        ],
        bgs: [
          {'bg': '#046a69'}
        ]
      }
    },
    methods: {
      changeColor (index) {
        for (var i = 0; i < this.colors.length; i++) {
          this.colors[i].active = false
        }
        this.colors[index].active = true
      }
    }
  }
</script>

