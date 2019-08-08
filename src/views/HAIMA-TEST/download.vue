/* eslint-disable */

<template>
  <div class="view">
    <img src="../../assets/images/Haima/dlLogo.png"/>
    <p>&nbsp;&nbsp;海马减压是一款帮助用户舒缓情绪，释放压力的产品。APP中有多样化场景音乐，带来沉浸式感官享受。同时，专业的人声引导，为你提供最佳的压力舒缓与释放方案。</p>
    <div>
      <img @click="iphoneDown" src="../../assets/images/Haima/btiphone.png">
      <img @click="androidDown" src="../../assets/images/Haima/btAndroid.png">
    </div>
    <img v-if="showImg" class="shareImg" src="../../assets/images/Haima/wxmoreshare.png">
  </div>
</template>

<script>
  export default {
    data () {
      return {
        showImg: false
      }
    },
    methods: {
      iphoneDown () {
        window.location = "https://apps.apple.com/cn/app/%E6%B5%B7%E9%A9%AC%E5%87%8F%E5%8E%8B/id1466452116"
      },
      is_weixin () {
        var ua = navigator.userAgent.toLowerCase();
        if(ua.match(/MicroMessenger/i)=="micromessenger") {
          return true;
        } else {
          return false;
        }
      },
      androidDown () {
        if (this.is_weixin()) {
          this.showImg = true
        } else {
          window.location = "https://hima.resource.himaemotion.com/public/release/1.0/hima_20190718_product_v1.0.1.apk"
        }
      },
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
    text-align: center;
    background-color: #E7F7FD;
/*    overflow-y: scroll;*/
    
    background-image: url(../../assets/images/Haima/img.png);
    background-size: 375px auto;
    background-repeat: no-repeat'';
      
    >img {
      width: 153px;
      display: inline-block;
/*      margin: 0 auto;*/
      margin-top: 44px;;
    }
    
    >p {
      width: 300px;
      margin: 0 auto;
      font-family: SourceHanSansCN-Medium;
      font-size: 14px;
      color: #FFFFFF;
      line-height: 26px;
      margin-top: 62px;
    }
    
    >div {
      width: 300px;
      margin: 0 auto;
      margin-top: 28px;
      
      img {
        width: 100%;
        margin-bottom: 12px
      }
    }
    
    .shareImg {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
    }
  }
</style>
