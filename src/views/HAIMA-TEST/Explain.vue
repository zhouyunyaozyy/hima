/* eslint-disable */

<template>
  <div class="view">
    <header>
<!--      logo-->
<!--      缺logo-->
      <img src="../../assets/images/Haima/logo.png">
    </header>
    
    <div>
      <p class="p5">为学业苦读  为家庭奔波  为事业打拼
你忙碌于生活，却忽略自己真切感受</p>
      <p class="p3"> 你有多久没有直面自己的内心？</p>
      <p class="p1"> 欢迎来到海马の屋 ，在这里发现隐藏的压力</p>
      <div class="bodyImg">
<!--        缺图片-->
        <img src="../../assets/images/Haima/plant.png">
      </div>
      <button @click="goHome">立即开启</button>
      <span>在我们的小屋中，我们有为你准备40道题目</span>
      <span class="span5">耗时5分钟</span>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        
      }
    },
    methods: {
      goHome() {
        this.$router.push('TestPage')
      }
    }
  }
</script>

<style scoped="true" lang="scss">
  .view {
    width: 100%;
    height: 100%;
    background-color: #E7F7FD;
    overflow-y: scroll;
    
    header {
      margin: 57px auto 23px;
      width: 100px;
      height: 100px;
      background-color: white;
      border-radius: 30px;
      
      img {
        width: 100%;
      }
    }
    
    div {
      .p5 {
        font-family: SourceHanSansCN-Normal;
        margin: 0 auto;
        font-size: 12px;
        color: #27939B;
        text-align: center;
        line-height: 20px;
        margin-bottom: 20px;
        width: 192px;
      }
      
      .p3 {
        font-family: SourceHanSansCN-Bold;
        font-size: 16px;
        color: #F5A623;
        letter-spacing: 1px;
        text-align: center;
        margin-bottom: 16px;
      }
      
      .p1 {
        font-family: SourceHanSansCN-Medium;
        font-size: 16px;
        color: #226166;
        letter-spacing: 0;
        text-align: center;
        margin-bottom: 7px;
      }
      
      div {
/*        background: #90DDE8;*/
        width: 245px;
        height: 208px;
        margin: 0 auto;
        
        img {
          width: 100%;
        }
      }
      
      button {
        background: #48BFD0;
        display: block;
        border: none;
        border-radius: 4px;
        width: 300px;
        height: 70px;
        margin: 0 auto;
        font-family: SourceHanSansCN-Bold;
        font-size: 24px;
        color: #FFFFFF;
        box-shadow: 8px 8px #226166;
        position: relative;
        top: -2px;
      }
      
      span {
        font-family: SourceHanSansCN-Normal;
        font-size: 12px;
        color: #226166;
        text-align: center;
        line-height: 10px;
/*        margin: 0 auto;*/
        margin-top: 21px;
        display: block;
      }
      
      .span5 {
        margin-top: 10px;
      }
    }
  }
</style>
