(window.webpackJsonp = window.webpackJsonp || []).push([['vds5'], {
  '183e': function (n, t, i) { n.exports = `${i.p}img/wxmoreshare.c26b3369.png`; },
  '1da7': function (n, t, i) { n.exports = `${i.p}img/btAndroid.7240a824.png`; },
  '3aeb': function (n, t, i) { n.exports = `${i.p}img/dlLogo.55906ca9.png`; },
  '496d': function (n, t, i) {
    i.r(t); const o = function () { const n = this; const t = n.$createElement; const o = n._self._c || t; return o('div', { staticClass: 'view' }, [o('img', { attrs: { src: i('3aeb') } }), o('p', [n._v('  海马减压是一款帮助用户舒缓情绪，释放压力的产品。APP中有多样化场景音乐，带来沉浸式感官享受。同时，专业的人声引导，为你提供最佳的压力舒缓与释放方案。')]), o('div', [o('img', { attrs: { src: i('bf31') }, on: { click: n.iphoneDown } }), o('img', { attrs: { src: i('1da7') }, on: { click: n.androidDown } })]), n.showImg ? o('img', { staticClass: 'shareImg', attrs: { src: i('183e') } }) : n._e()]); }; const e = []; const s = {
      data() { return { showImg: !1 }; },
      methods: {
        iphoneDown() { window.location = 'https://apps.apple.com/cn/app/%E6%B5%B7%E9%A9%AC%E5%87%8F%E5%8E%8B/id1466452116'; }, is_weixin() { const n = navigator.userAgent.toLowerCase(); return n.match(/MicroMessenger/i) == 'micromessenger'; }, androidDown() { this.is_weixin() ? this.showImg = !0 : window.location = 'https://hima.resource.himaemotion.com/public/release/1.0/hima_20190718_product_v1.0.1.apk'; }, goHome() { this.$router.push('TestPage'); },
      },
    }; const a = s; const r = (i('ca11'), i('2877')); const c = Object(r.a)(a, o, e, !1, null, '3a120e7a', null); t.default = c.exports;
  },
  6096(n, t, i) {},
  bf31(n, t, i) { n.exports = `${i.p}img/btiphone.594e6de0.png`; },
  ca11(n, t, i) {
    const o = i('6096'); const e = i.n(o); e.a;
  },
}]);