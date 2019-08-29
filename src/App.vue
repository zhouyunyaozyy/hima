<template>
  <div id="app">
    <!--<Header/>-->
<!--
    <Alert/>
    <Confirm/>
    <Toast/>
-->
    <transition name="fade" mode="out-in" appear>
      <router-view/>
    </transition>
  </div>
</template>

<script>
// @ is an alias to /src
// import Header from './components/Header.vue';
// import Alert from './components/Alert.vue';
// import Confirm from './components/Confirm.vue';
// import Toast from './components/Toast.vue';
// import { mapState, mapGetters, mapActions } from './utils/common';

export default {
  name: 'app',
  mounted() {
    // 创建cnzz统计js
    const script = document.createElement('script');
    script.src = 'https://v1.cnzz.com/z_stat.php?id=1277918255&web_id=1277918255';
    script.language = 'JavaScript';
    document.body.appendChild(script);
  },
  components: {
    // Header,
    //    Alert,
    //    Confirm,
    //    Toast,
  },
  computed: {},
  watch: {
    $route: {
      handler(to, from) {
        setTimeout(() => { // 避免首次获取不到window._czc
          if (window._czc) {
            const { location } = window;
            const contentUrl = location.pathname + location.hash;
            const refererUrl = '/';
            // 用于发送某个URL的PV统计请求，
            window._czc.push(['_trackPageview', contentUrl, refererUrl]);
            console.log(1, window._czc);
          }
        }, 300);
      },
      immediate: true, // 首次进入页面即执行
    },
  },
  created() {},
  methods: {},
};
</script>

<style lang="scss">
  #app {
    height: 100%;
    max-width: 750px;
  }
</style>
