/* eslint-disable */

<template>
  <div class="view">
    <div class="head">
      <p class="fisrtP">您的分数为：</p>
      <p><span>{{score}}</span>&nbsp;&nbsp;分</p>
    </div>
    
    <div class="imgDiv">
      <img src="../../assets/images/Haima/plant3.png">
    </div>
    <div class="resultBody" @click="showBool = 1">
      <div class="content">
        <p class="w5">{{infor.blue}}</p>
        <p :class="w3">{{infor.yellow}}</p>
      </div>
    </div>
    <div class="btnDiv" v-if="showBool == 1">
      <button class="btn1" @click="testAgain">再测一次</button>
      <button class="btn2" @click="downApp">下载APP</button>
      <button class="btn3" @click="share">一键分享</button>
    </div>
    <div class="shareBtn" v-else-if="showBool == 2">
      <div @click="call('qZone')">
        <img src="../../assets/images/Haima/qqkj.png">
        <p>QQ空间</p>
      </div>
      <div @click="call('qqFriend')">
        <img src="../../assets/images/Haima/qq.png">
        <p>QQ好友</p>
      </div>
      <div @click="call('weibo')">
        <img src="../../assets/images/Haima/weibo.png">
        <p>微博+</p>
      </div>
      <div @click="call('wechatTimeline')">
        <img src="../../assets/images/Haima/wxpyq.png">
        <p>朋友圈</p>
      </div>
      <div @click="call('wechatFriend')">
        <img src="../../assets/images/Haima/weixin.png">
        <p>微信</p>
      </div>
    </div>
    
    <div class="qrcode" v-show="showBool == 3">
      <p>请打开微信扫描下方二维码</p>
      <div id="qrcode"></div>
    </div>
    
    <img @click="showImg = false" v-if="showImg" class="shareImg" src="../../assets/images/Haima/wxmoreshare.png">
  </div>
</template>

<script>
import NativeShare from '../../api/NativeShare.js'
export default {
  data() {
    return {
      showImg: false,
      nativeShare: null,
      showBool: 1,
      score: 0,
      w3: "w3",
      infor: {
        blue: '',
        yellow: ''
      },
      information: [
        {
          blue: `哇哦！你真是个幸福的人呀！
几乎没有压力，即使刺激或有趣的事情发生了，你也很少作反应。
你最好更主动些，在工作、社交、娱乐等活动上多增加些刺激，以增加你的压力激活反应。`,
          yellow: '不妨来海马减压和大家分享下排解压力轻松生活的妙招呀~'
        },
        {
          blue: `压力很难影响到你，处于正常压力状态，在健康心理压力范围内，生活社交能力不受影响。
请积极保持这样的良好心态同时，遇到压力的时候需要用正确的方式进行排解，更好的减压方式能让你更加平和，也能找到更多生活趣味。`,
          yellow: '如果遇到压力的话，不妨来海马减压听听音乐放松一下，让健康优良的心态一直保持下去~'
        },
        {
          blue: `你能感受到轻微的压力，但是你能够控制你自己的压力反应，看起来你是一个相当放松的人。
不过为了更好的让自己处于健康心理状态，请适当给自己压力缓解的时间和空间，遇到压力的时候需要学会新的疏导和释放方式，当承受巨大压力的时候可以通过外部帮助来进行缓解。`,
          yellow: '有轻微压力也别忽视呀，来海马减压放松一下，彻底排解掉吧！'
        },
        {
          blue: `已经能明显感受到自己的压力，对自己的生活状态有轻微影响，但你也许有能力去享受压力。
请及时进行压力舒缓和释放，缓解现状的压力状态，寻求新的减压方式，面对巨大压力的时候一定要用科学的方式来排解，请勿习惯性的忍耐或以非健康的方式（如抽烟、酗酒、超体力活动等）进行发泄，以免突然情绪爆发。`,
          yellow: '有轻微压力也别忽视呀，来海马减压放松一下，彻底排解掉吧！'
        },
        {
          blue: `压力已经达到警戒线，能感觉到较明显的身体症状（如身体不适、乏力、压力型失眠等），社交能力因为压力有所下降（可能出现轻微的强迫、人际关系敏感、孤僻等）。请尽快进行正确的压力释放，如果是长期累积压力请寻求根源尽早解决，如果是短期压力请尽量暂时隔离压力来源，避免压力升级和情绪失控。可以通过新的减压方式来进行压力舒缓与释放。`,
          yellow: '别把压力放在心里呀，来海马减压，新的减压方式，带给你不一样的轻松愉悦'
        },
        {
          blue: `压力已经超过正常耐受范围，你能非常明显的感觉到压力的存在，并对你的身体带来很明显的影响，如长期失眠、肌肉酸痛、头晕、缺乏活力、突然兴奋、震颤等等，在对社交的干扰比较明显，如社交能力快速下降、不可控的暴躁不安、敏感消极、猜疑敌对、甚至社交恐惧等。请立即进行科学的压力舒缓与释放，阻断压力来源，减轻压力源躯体不适，改变生活方式、社交方式，寻求与以往不同的压力认知和解决方案，找到适合自己的正确高效的减压途径。`,
          yellow: ''
        },
      ]
    };
  },
  mounted () {
    if (this.$route.query.score) {
      this.score = this.$route.query.score
    } else {
      this.score = window.sessionStorage.getItem('HAIMASCORE') ? window.sessionStorage.getItem('HAIMASCORE') : 0
    }
    
    
    let num = 0
    if (this.score <= 27) {
      num = 0
    } else if (this.score <= 39) {
      num = 1
    } else if (this.score <= 56) {
      num = 2
    } else if (this.score <= 70) {
      num = 3
    } else if (this.score <= 82) {
      num = 4
      this.w3 = "w4"
    } else {
      num = 5
    }
    if (this.score <= 82) {
      this.w3 = "w4"
    } else {
      this.w3 = "w3"
    }
    this.infor.blue = this.information[num].blue
    this.infor.yellow = this.information[num].yellow
    
    this.nativeShare = new NativeShare()
    var shareData = {
        title: '测测你的心理压力有多大？史上超专业测试',
        desc: '',
        // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
        link: location.href,
        icon: 'https://web.himaemotion.com/activity/hima/img/logo.5b93807e.png',
        // 不要过于依赖以下两个回调，很多浏览器是不支持的
        success: function() {
            alert('success')
        },
        fail: function() {
            alert('fail')
        }
    }
    this.nativeShare.setShareData(shareData)
  },
  methods: {
    is_weixin () {
      var ua = navigator.userAgent.toLowerCase();
      if(ua.match(/MicroMessenger/i)=="micromessenger") {
        return true;
      } else {
        return false;
      }
    },
    testAgain() {
      this.$router.push('TestPage');
    },
    downApp () {
//      this.$router.push('download');
      window.location = "https://sj.qq.com/myapp/detail.htm?apkName=com.himaemotation.app"
    },
    share (title, url, picurl) {
      
      this.showBool = 2
//      新浪微博
//      var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + "海马心理测试" + '&url=' + "https://www.baidu.com" + '&content=utf-8';
//      window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');

//      qq好友
//      var p = {
//        url:'http://wwww.baidu.com', /*获取URL，可加上来自分享到QQ标识，方便统计*/
//        desc:'d', 
//        title:'t', /*分享标题(可选)*/
//        summary:'', /*分享摘要(可选)*/
//        pics:'', /*分享图片(可选)*/
//        flash: '', /*视频地址(可选)*/
//        site:'http://wwww.baidu.com', /*分享来源(可选) 如：QQ分享*/
//        style:'203',
//        width:16,
//        height:16
//      };
//      var s = [];
//      for(var i in p){
//          s.push(i + '=' + encodeURIComponent(p[i]||''));
//      }
//      var paramStr = s.join('&')
//      var qhref = "http://connect.qq.com/widget/shareqq/index.html?"+paramStr;
//      window.open(qhref)
      
//      空间
//      var shareqqzonestring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + 1 + '&url=' + "https://www.baidu.com" + '&pics=' + picurl;
//      window.open(shareqqzonestring, 'newwindow', 'height=400,width=400,top=100,left=100');
      
//      微信好友
      
//      $("#qrcode").qrcode({
//        text: "https://www.baidu.com", //设置二维码内容 
//        render: "table", //设置渲染方式 
//        width: 256, //设置宽度,默认生成的二维码大小是 256×256
//        height: 256, //设置高度 
//        typeNumber: -1, //计算模式 
//        background: "#ffffff", //背景颜色 
//        foreground: "#000000" //前景颜色 
//        
//      });
      
//        var nativeShare = new NativeShare()
//        var shareData = {
//            title: 'NativeShare',
//            desc: 'NativeShare是一个整合了各大移动端浏览器调用原生分享的插件',
//            // 如果是微信该link的域名必须要在微信后台配置的安全域名之内的。
//            link: 'https://www.baidu.com',
//            icon: 'https://pic3.zhimg.com/v2-080267af84aa0e97c66d5f12e311c3d6_xl.jpg',
//            // 不要过于依赖以下两个回调，很多浏览器是不支持的
//            success: function() {
//                alert('success')
//            },
//            fail: function() {
//                alert('fail')
//            }
//        }
//        nativeShare.setShareData(shareData)
//        function call(command) {
//            try {
//                nativeShare.call(command)
//            } catch (err) {
//                // 如果不支持，你可以在这里做降级处理
//                alert(err.message)
//            }
//        }
//        function setTitle(title) {
//            nativeShare.setShareData({
//                title: title,
//            })
//        }
//        call("wechatFriend")
    },
    call (name) {
      //      目前不支持微博，单独列出来
      if (name == "weibo") {
        console.log(1234)
        var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + "测测你的心理压力有多大？史上超专业测试" + '&url=' + location.href + '&content=utf-8';
        window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
        console.log(1)
      } else {
        if (this.is_weixin()) {
          this.showImg = true
          console.log(2)
          return
        } else {
          
          console.log(3)
          try {
            this.nativeShare.call(name)
          console.log(4)
          } catch (err) {
              // 如果不支持，你可以在这里做降级处理
              alert("当前浏览器不支持自定义分享，请手动点击浏览器分享按钮")
          }
        }
      }
      
//      
//      let obj = {
//        url: 'https://web.himaemotion.com/activity/hima/TestResult?score=' + this.score,
//        
//      }
//      if (name === "qZone") {
//          
//  //      空间
//        var shareqqzonestring = 'http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?summary=' + '你的压力有多大？测一测便知道' + '&url=' + obj.url;
//        window.open(shareqqzonestring, 'newwindow', 'height=400,width=400,top=100,left=100');
//      } else if (name === "qqFriend") {
//        //      qq好友
//        var p = {
//          url:obj.url, /*获取URL，可加上来自分享到QQ标识，方便统计*/
//          desc:'', 
//          title:'你的压力有多大？测一测便知道', /*分享标题(可选)*/
//          summary:'', /*分享摘要(可选)*/
//          pics:'', /*分享图片(可选)*/
//          flash: '', /*视频地址(可选)*/
//          site:'', /*分享来源(可选) 如：QQ分享*/
//          style:'203',
//          width:16,
//          height:16
//        };
//        var s = [];
//        for(var i in p){
//            s.push(i + '=' + encodeURIComponent(p[i]||''));
//        }
//        var paramStr = s.join('&')
//        var qhref = "http://connect.qq.com/widget/shareqq/index.html?"+paramStr;
//        window.open(qhref)
//        
//      } else if (name === "weibo") {
//        //      新浪微博
//        var sharesinastring = 'http://v.t.sina.com.cn/share/share.php?title=' + "你的压力有多大？测一测便知道" + '&url=' + obj.url + '&content=utf-8';
//        window.open(sharesinastring, 'newwindow', 'height=400,width=400,top=100,left=100');
//      } else {
//        this.showBool = 3
////        console.log($("#qrcode").html())
//        $("#qrcode").html("")
//        //      微信好友
//        $("#qrcode").qrcode({
//          text: obj.url, //设置二维码内容 
//          render: "canvas", //设置渲染方式 
//          width: 128, //设置宽度,默认生成的二维码大小是 256×256
//          height: 128, //设置高度 
//          typeNumber: -1, //计算模式 
//          background: "#ffffff", //背景颜色 
//          margin: "auto",
//          foreground: "#000000" //前景颜色 
//
//        });
//      }



    
      

    }
  },
};
</script>

<style scoped="true" lang="scss">
  .view {
    width: 100%;
    height: 100%;
/*    min-height: 600px;*/
    background-color: #E7F7FD;
    overflow-y: scroll;

    .head {
      .fisrtP {
        margin-top: 63px;
      }
      p {
        font-family: SourceHanSansCN-Medium;
        font-size: 22px;
        color: #226166;
        text-align: center;
        line-height: 31px;
        margin: 24px 0;
        
        span {
          font-family: SourceHanSansCN-Bold;
          font-size: 40px;
          color: #F5A623;
          text-align: center;
          line-height: 31px;
        }
      }
    }
    
    .imgDiv {
/*      width: 100%;*/
      height: 78px;
/*      background-color: lightblue;*/
/*      float: left;*/
      position: absolute;
      top: 112px;
      left: 26px;
      
      img{
        height: 78px;
      }
    }
    .resultBody {
      width: 303px;
      height: 320px;
      background-color: #f5fbfe;
      margin: 0 auto;
/*      margin-top: 36px;*/
/*      padding-top: 46px;*/
      position: relative;
      .content {
        width: 100%;
        height: 100%;
        overflow: hidden;
        padding: 20px;
        box-sizing: border-box;
        position: relative;
        
        .w5 {
          font-family: SourceHanSansCN-Normal;
          font-size: 14px;
          color: #226166;
          line-height: 24px;
/*          white-space: pre;*/
          white-space: pre-wrap;
          word-wrap: break-word;
        }
        
        .w3 {
          font-family: SourceHanSansCN-Medium;
          font-size: 14px;
          color: #F5A623;
          line-height: 24px;
          position: absolute;
          bottom: 0px;
          width: 100%;
          padding: 0 40px 0 0;
          box-sizing: border-box;
        }
        
        .w4 {
          font-family: SourceHanSansCN-Medium;
          font-size: 14px;
          color: #F5A623;
          line-height: 24px;
          position: absolute;
          bottom: 20px;
          width: 100%;
          padding: 0 40px 0 0;
          box-sizing: border-box;
        }
      }
    }
    .btnDiv {
      
      button {
        background: #48BFD0;
        display: inline-block;
        border: none;
        border-radius: 4px;
        width: 88px;
        height: 39px;
        margin: 0 auto;
        font-family: PingFangSC-Semibold;
        font-size: 12px;
        color: #FFFFFF;
        box-shadow: 8px 8px #226166;
        margin-top: 60px;
      }
      
      .btn1 {
        margin-left: 32px;
      }
      .btn2 {
        margin-left: 22px;
        margin-right: 22px;
      }
    }
    
    .shareBtn {
      width: 100%;
      padding: 0 34px 10px;
      box-sizing: border-box;
      background: rgba(255,255,255);
      position: absolute;
      bottom: 0;
      z-index: 999;
      
      >div {
        display: inline-block;
        width: 33%;
        text-align: center;
        margin-top: 21px;
        
        >img {
          width: 20px;
          height: 20px;
          margin-bottom: 4px;
        }
        
        p {
          font-family: SourceHanSansCN-Normal;
          font-size: 12px;
          color: #4AB5BD;
        }
      }
    }
    
    .qrcode {
      padding-top: 20px;
      width: 100%;
      text-align: center;
      position: absolute;
      bottom: 10px;
      
      #qrcode {
        width: 128px;
        height: 128px;
        
        margin: 0 auto;
        
        table {
          margin: 0 auto;
        }
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
