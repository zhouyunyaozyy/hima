import '@babel/polyfill';
import Vue from 'vue';
import cookies from 'cookies-js';
import axios from 'axios';
import App from './App.vue';
import router from './router';
// import store from './store';
import mixins from './plugins/mixins';
import eject from './plugins/eject';
import filter from './plugins/filters';
import jockey from './utils/jockey';
import './assets/styleSheet/global.css';
import './assets/styleSheet/transition.css';
import './assets/styleSheet/custom.css';
import 'lib-flexible';
import i18n, { setI18nLanguage } from './plugins/i18n';
// import successAlert from './views/KLT/components/alert';

import './assets/styles/index.scss';

// Vue.use(successAlert);
Vue.config.productionTip = false;
Vue.mixin(mixins);
Vue.use(filter);
Vue.use(eject);

jockey.on('sendUserToken', (payload) => {
  cookies.set('activityToken', payload.token || ''); // 设置cookie
  store.dispatch('updateLogin', true);
});
// app 原生跳转 h5 指定页面
jockey.on('navigation', ({ method = 'push', path }, complete) => { // 应用内打开地址
  router[method](path);
  if (complete) process.nextTick(complete); // 执行完毕回调APP
});
jockey.on('logout', (payload, complete) => { // 退出登录
  cookies.expire('activityToken');
  store.dispatch('updateLogin', false);
  if (complete) process.nextTick(complete); // 执行完毕回调APP
});
jockey.on('setCurrentLanguage', (payload, complete) => { // 设置语言
  setI18nLanguage(payload.language);
  if (complete) process.nextTick(complete); // 执行完毕回调APP
});

Vue.prototype.$axios = function (params) {
  if (params.type === 'post') {
    axios.post(
      'https://test.himaemotion.com/support/parameter/share',
      params.data,
      {
        withCredentials: false,
        headers: { 'Content-Type': 'application/json;charset=utf-8' },
      },
    )
      .then((response) => {
      //        Cookies.set('token', response.data.token)
      //                Cookies.set('token', 'will')
      //        if (response.data.code == 416) {
      //          Message({
      //            showClose: true,
      //            message: response.data.info,
      //            type: 'error'
      //          })
      //          params.fuc(response.data)
      //        } else if (response.data.code == 1010) {
      //          Cookies.remove('Admin-Token')
      //          Cookies.remove('token')
      //          location.reload()
      //        } else if (response.data.code != 200) {
      //          Message({
      //            showClose: true,
      //            message: response.data.info,
      //            type: 'error'
      //          })
      //        } else {
        params.fuc(response.data);
        //        }
      })
      .catch((error) => {
        let mes = '加载超时 请检查网络！';
        if (error.response && error.response.status) {
          mes = error.response.data;
        }
        console.log(error.request);
        alert(mes);
      });
  }
};

/* eslint-disable no-new */
// event.emit('updateToken');
// new window.VConsole();
new Vue({
  el: '#root',
  router,
  i18n,
  //  store,
  // components: { App },
  // template: '<App/>', // https://cli.vuejs.org/config/#runtimecompiler
  render: h => h(App),
  /*  beforeCreate() {
    console.log(`%c vue-version %c ${Vue.version} %c`,
      'background:#35495e ; padding: 1px; border-radius: 3px 0 0 3px;  color: #fff',
      'background:#41b883 ; padding: 1px; border-radius: 0 3px 3px 0;  color: #fff',
      'background:transparent');
  }, */
  errorHandler(err, vm, info) {
    /* eslint-disable no-console */
    console.error(err, vm, info);
  },
});
