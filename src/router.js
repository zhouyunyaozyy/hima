import Vue from 'vue';
import Router from 'vue-router';
import cookies from 'cookies-js';
import url from 'url';
import { TITLE } from './utils/constant';
import jockey from './utils/jockey';

Vue.use(Router); // UPT/KOFO抢购

const routes = [
  {
    path: '/',
    name: 'main',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "main" */ './views/Main.vue'),
    redirect: 'InHome',
    // children: [
    //   {
    //     path: '/uptida',
    //     name: 'upt-ida',
    //     component: () => import(/* webpackChunkName: "main" */ './views/UPT-IDA/index.vue'),
    //     meta: { title: 'UPT/IDA抢购' },
    //   },
    // ],
  },
  // {
  //   path: '/uptkofo',
  //   name: 'uptKofo',
  //   component: () => import(/* webpackChunkName: "uptkofo" */ './views/UPT-KOFO/Index.vue'),
  //   redirect: '/uptkofo/act1',
  //   meta: { title: 'UPT/KOFO抢购' },
  //   children: [
  //     {
  //       path: '/uptkofo/act1',
  //       name: 'uptKofoAct1',
  //       component: () => import(/* webpackChunkName: "uptKofoAct1" */ './views/UPT-KOFO/Activity2.vue'),
  //       meta: { title: 'UPT/KOFO抢购' },
  //     },
  //     {
  //       path: '/uptkofo/act2',
  //       name: 'uptKofoAct2',
  //       component: () => import(/* webpackChunkName: "uptKofoAct2" */ './views/UPT-KOFO/Activity1.vue'),
  //       meta: { title: 'UPT/KOFO抢购' },
  //     },
  //     {
  //       path: '/uptkofo/act3',
  //       name: 'uptKofoAct3',
  //       component: () => import(/* webpackChunkName: "uptKofoAct3" */ './views/UPT-KOFO/Activity3.vue'),
  //       meta: { title: 'UPT/KOFO抢购' },
  //     },
  //   ],
  // },
  // {
  //   path: '/uptkofobuy',
  //   name: 'uptKofoBuy',
  //   component: () => import(/* webpackChunkName: "uptKofoBuy" */ './views/UPT-KOFO/Buy.vue'),
  //   meta: { title: 'UPT/KOFO抢购', authorization: true },
  // },
  // {
  //   path: '/uptkofohistory',
  //   name: 'uptKofoHistory',
  //   component: () => import(/* webpackChunkName: "uptKofoHistory" */ './views/UPT-KOFO/History.vue'),
  //   meta: { title: '预约认购记录', authorization: true },
  // },


  {
    path: '/InHome',
    name: 'inHome',
    component: () => import(/* webpackChunkName: "vds" */ './views/HAIMA-TEST/InHome.vue'),
    //    meta: { title: 'inHome' },
  },
  {
    path: '/Explain',
    name: 'explain',
    component: () => import(/* webpackChunkName: "vds1" */ './views/HAIMA-TEST/Explain.vue'),
    //    meta: { title: 'inHome' },
  },
  {
    path: '/TestPage',
    name: 'testPage',
    component: () => import(/* webpackChunkName: "vds2" */ './views/HAIMA-TEST/TestPage.vue'),
    //    meta: { title: 'inHome' },
  },
  {
    path: '/TestResult',
    name: 'testResult',
    component: () => import(/* webpackChunkName: "vds3" */ './views/HAIMA-TEST/TestResult.vue'),
    //    meta: { title: 'inHome' },
  },
  {
    path: '/ResultLoading',
    name: 'resultLoading',
    component: () => import(/* webpackChunkName: "vds4" */ './views/HAIMA-TEST/ResultLoading.vue'),
    //    meta: { title: 'inHome' },
  },
  {
    path: '/download',
    name: 'download',
    component: () => import(/* webpackChunkName: "vds5" */ './views/HAIMA-TEST/download.vue'),
    //    meta: { title: 'inHome' },
  },


//  李庆杰
//  {
//    path: '/vds',
//    name: 'vds',
//    component: () => import(/* webpackChunkName: "vds" */ './views/VDS/Index.vue'),
//    meta: { title: 'vds' },
//  },
//  {
//    path: '/klt',
//    name: 'klt',
//    component: () => import(/* webpackChunkName: "KLT" */ './views/KLT/Index.vue'),
//    meta: { title: 'KLT' },
//  },
//  {
//    path: '/klt/buy',
//    name: 'buy',
//    component: () => import(/* webpackChunkName: "buy" */ './views/KLT/Buy.vue'),
//    meta: { title: 'KLT', authorization: true },
//  },
//  {
//    path: '/klt/logs',
//    name: 'logs',
//    component: () => import(/* webpackChunkName: "logs" */ './views/KLT/Logs.vue'),
//    meta: { title: '预约认购记录', authorization: true },
//  },
];

const router = new Router({
  mode: 'history',
  base: url.parse(process.env.BASE_URL).path, // 适用于OSS/CDN，process.env.BASE_URL仅适用于开发部署
  //  base: "/activity/hima/", // 适用于OSS/CDN，process.env.BASE_URL仅适用于开发部署
  routes,
});
router.beforeEach((to, from, next) => {
  /* eslint no-param-reassign: ["error", {
        "props": true,
        "ignorePropertyModificationsFor": ["to"]
      }] */

  console.log('process.env:', process.env, 'url.parse(process.env.BASE_URL).path:', url.parse(process.env.BASE_URL).path);
  to.meta.title = to.meta.title || TITLE;
  window.document.title = to.meta.title; // 动态修改窗口标题
  if (to.meta.authorization) {
    if (!cookies.get('activityToken')) {
      jockey.send('login');
      return next(false);
    }
  }
  return next();
});

export default router;
