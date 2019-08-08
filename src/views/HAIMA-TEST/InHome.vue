/* eslint-disable */
<template>
  <div class="view">
    <header>
      <img src="../../assets/images/Haima/logo.png">
    </header>
    
    <div>
      <p class="p5">在海马の屋</p>
      <p class="p3">发现内心隐藏压力</p>
      <div class="bodyImg">
<!--        缺图片-->
        <img src="../../assets/images/Haima/plant.png">
      </div>
      <button @click='inHome'>进入小屋</button>
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
      inHome() {
        this.$router.push('Explain')
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
      margin: 57px auto 36px;
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
        font-family: "SourceHanSansCN";
        font-size: 20px;
        color: #226166;
        text-align: center;
        margin-bottom: 20px;
      }
      
      .p3 {
        font-family: "SourceHanSansCN";
        font-size: 28px;
        color: #226166;
        letter-spacing: 2px;
        text-align: center;
        margin-bottom: 26px;
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
        font-family: "SourceHanSansCN-Bold";
        font-size: 24px;
        color: #FFFFFF;
        box-shadow: 8px 8px #226166;
        position: relative;
        top: -2px;
      }
    }
  }
</style>
