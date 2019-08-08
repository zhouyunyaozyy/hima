/* eslint-disable */
<template>
  <div class="view">
    <div>
      <p>测评结果计算中，请耐心等待</p>
      <div class="imgDiv">
        <img src="../../assets/images/Haima/plant2.png">
      </div>
      <div class="progressDiv">
        <div class="progress">
          <span class="red" v-bind:style="{ width: num + '%' }"><span>loading…</span></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        num: 0
      }
    },
    mounted () {
      let inte = setInterval (() => {
        this.num++
        if (this.num >= 99) {
          clearInterval(inte)
          this.inHome()
        }
      }, 15)
    },
    methods: {
      inHome() {
        this.$router.push({path: 'TestResult', query: this.$route.query})
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
    
    >div {
      margin-top: 217px;
      p {
        font-family: SourceHanSansCN-Medium;
        font-size: 18px;
        color: #226166;
        padding-left: 84px;
        padding-top: 10px;
      }
      
      .imgDiv {
        position: absolute;
        top: 217px;
        left: 40px;
        
        img {
          width: 30px;
        }
      }
      
      .progressDiv {
        width: 300px;
        overflow: hidden;
        margin: 0 auto;
        margin-top: 30px;
        
        .progress {
          height:20px;
          background:rgba(255,255,255,0.60);
          border-left:1px solid transparent;
          border-right:1px solid transparent;
          border-radius:10px;
        }
        .progress > span {
          position:relative;
          float:left;
          margin:0 -1px;
          min-width:30px;
          height:18px;
          line-height:16px;
          text-align:right;
          background:#cccccc;
          border:1px solid;
          border-color:#bfbfbf #b3b3b3 #9e9e9e;
          border-radius:10px;
          background-image:-webkit-linear-gradient(top,#f0f0f0 0%,#dbdbdb 70%,#cccccc 100%);
          background-image:-moz-linear-gradient(top,#f0f0f0 0%,#dbdbdb 70%,#cccccc 100%);
          background-image:-o-linear-gradient(top,#f0f0f0 0%,#dbdbdb 70%,#cccccc 100%);
          background-image:linear-gradient(to bottom,#f0f0f0 0%,#dbdbdb 70%,#cccccc 100%);
          -webkit-box-shadow:inset 0 1px rgba(255,255,255,0.3),0 1px 2px rgba(0,0,0,0.2);
          box-shadow:inset 0 1px rgba(255,255,255,0.3),0 1px 2px rgba(0,0,0,0.2);
        }
        .progress > span > span {
          display: inline-block;
          width: 300px;
          text-align: center;
/*          padding:0 8px;*/
          font-family: AdobeGothicStd-Bold;
          font-size: 12px;
          color: #FFFFFF;
          text-shadow:0 1px rgba(255,255,255,0.4);
        }
        .progress > span:before {
          content:'';
          position:absolute;
          top:0;
          bottom:0;
          left:0;
          right:0;
          z-index:1;
          height:18px;
/*          background:url("../img/progress.png") 0 0 repeat-x;*/
          border-radius:10px;
        }
        .progress .red {
          background:#48BFD0;
          border-color:#48BFD0 #48BFD0 #48BFD0;
          background-image:-webkit-linear-gradient(top,#48BFD0 0%,#48BFD0 70%,#48BFD0 100%);
          background-image:-moz-linear-gradient(top,#48BFD0 0%,#48BFD0 70%,#48BFD0 100%);
          background-image:-o-linear-gradient(top,#48BFD0 0%,#48BFD0 70%,#48BFD0 100%);
          background-image:linear-gradient(to bottom,#48BFD0 0%,#48BFD0 70%,#48BFD0 100%);
        }
      }
    }
  }
</style>
