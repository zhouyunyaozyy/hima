(window.webpackJsonp = window.webpackJsonp || []).push([['vds3'], {
  '0073': function (e, t, n) {
    (function (e) {
      let n; let r; let o; function i(e) { return i = typeof Symbol === 'function' && typeof Symbol.iterator === 'symbol' ? function (e) { return typeof e; } : function (e) { return e && typeof Symbol === 'function' && e.constructor === Symbol && e !== Symbol.prototype ? 'symbol' : typeof e; }, i(e); }!(function (a, c) { i(t) == 'object' && i(e) == 'object' ? e.exports = c() : (r = [], n = c, o = typeof n === 'function' ? n.apply(t, r) : n, void 0 === o || (e.exports = o)); }(0, () => (function (e) { function t(r) { if (n[r]) return n[r].exports; const o = n[r] = { i: r, l: !1, exports: {} }; return e[r].call(o.exports, o, o.exports, t), o.l = !0, o.exports; } var n = {}; return t.m = e, t.c = n, t.d = function (e, n, r) { t.o(e, n) || Object.defineProperty(e, n, { configurable: !1, enumerable: !0, get: r }); }, t.n = function (e) { const n = e && e.__esModule ? function () { return e.default; } : function () { return e; }; return t.d(n, 'a', n), n; }, t.o = function (e, t) { return Object.prototype.hasOwnProperty.call(e, t); }, t.p = '', t(t.s = 0); }([function (e, t, n) {
        function r() {} function o(e) { const t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : r; const n = document.getElementsByTagName('script')[0]; const o = document.createElement('script'); o.src = e, o.async = !0, n.parentNode.insertBefore(o, n), o.onload = t; } function a(e, t) { if (e == null) throw new TypeError('Cannot convert undefined or null to object'); for (var n = Object(e), r = 1; r < arguments.length; r++) { const o = arguments[r]; if (o != null) for (const i in o)Object.prototype.hasOwnProperty.call(o, i) && (n[i] = o[i]); } return n; } function c(e) { if (pe)location.href = e; else { const t = document.createElement('iframe'); t.style.display = 'none', t.src = e, document.body.appendChild(t), setTimeout(() => { t && t.parentNode && t.parentNode.removeChild(t); }, 2e3); } } function u(e) { const t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1]; const n = []; for (const r in e)t ? n.push(`${r}=${encodeURIComponent(e[r])}`) : n.push(`${r}=${e[r]}`); return n.join('&'); } function s(e) { const t = document.createElement('a'); return t.href = e, t.hostname; } function l(e) { ke ? ke.content = e : document.head.insertAdjacentHTML('beforeend', `<meta name="description" content="${e}">`); } function f(e) { Se ? Se.href = e : document.head.insertAdjacentHTML('beforeend', `<link rel="shortcut icon" href="${e}">`); } function p(e) { document.title = e; } function h(e) {
          return u({
            share_id: 924053302, url: je.encode(e.link), title: je.encode(e.title), description: je.encode(e.desc), previewimageUrl: je.encode(e.icon), image_url: je.encode(e.icon),
          });
        } function b() { c(`${pe ? 'mqqapi://share/to_fri?src_type=web&version=1&file_type=news' : 'mqqapi://share/to_fri?src_type=isqqBrowser&version=1&file_type=news'}&${h(qe)}`); } function y() { c(`${pe ? 'mqqapi://share/to_fri?file_type=news&src_type=web&version=1&generalpastboard=1&shareType=1&cflag=1&objectlocation=pasteboard&callback_type=scheme&callback_name=QQ41AF4B2A' : 'mqqapi://share/to_qzone?src_type=isqqBrowser&version=1&file_type=news&req_type=1'}&${h(qe)}`); } function d() {
          const e = {
            url: qe.link, title: qe.title, pic: qe.icon, desc: qe.desc,
          }; location.href = `http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?${u(e, !0)}`;
        } function w() { const e = { url: qe.link, title: qe.title, pic: qe.icon }; location.href = `http://service.weibo.com/share/share.php?${u(e, !0)}`; } function m(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function v(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n, enumerable: !0, configurable: !0, writable: !0,
          }) : e[t] = n, e;
        } function g(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function O(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function j(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function k(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n, enumerable: !0, configurable: !0, writable: !0,
          }) : e[t] = n, e;
        } function S(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function q(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function A(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function D(e, t, n) {
          return t in e ? Object.defineProperty(e, t, {
            value: n, enumerable: !0, configurable: !0, writable: !0,
          }) : e[t] = n, e;
        } function P(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function x(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function T(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function E(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function C(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function I(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function M(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function W(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function R(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function U(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function H(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function Z(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function N(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function Q(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function G(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function Y(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function X(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function F(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function V(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function K(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function z(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function B(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function J(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function L(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function _(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function $(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function ee(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function te(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function ne(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function re(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        } function oe(e, t) { if (!(e instanceof t)) throw new TypeError('Cannot call a class as a function'); } function ie(e, t) { if (!e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return !t || i(t) != 'object' && typeof t !== 'function' ? e : t; } function ae(e, t) {
          if (typeof t !== 'function' && t !== null) throw new TypeError(`Super expression must either be null or a function, not ${i(t)}`); e.prototype = Object.create(t && t.prototype, {
            constructor: {
              value: e, enumerable: !1, writable: !0, configurable: !0,
            },
          }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t);
        }Object.defineProperty(t, '__esModule', { value: !0 }); let ce; const ue = navigator.userAgent; const se = /(iPad).*OS\s([\d_]+)/.test(ue); const le = /(iPod)(.*OS\s([\d_]+))?/.test(ue); const fe = !se && /(iPhone\sOS)\s([\d_]+)/.test(ue); var pe = se || le || fe; const he = /(Android);?[\s\/]+([\d.]+)?/.test(ue); const be = /micromessenger/i.test(ue); const ye = /QQ\/([\d\.]+)/.test(ue); const de = /Qzone\//.test(ue); const we = /MQQBrowser/i.test(ue) && !be && !ye; const me = /UCBrowser/i.test(ue); const ve = /mobile.*baidubrowser/i.test(ue); const ge = /SogouMobileBrowser/i.test(ue); const Oe = /baiduboxapp/i.test(ue); var je = { _keyStr: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=', encode(e) { let t; let n; let r; let o; let i; let a; let c; let u = ''; let s = 0; for (e = je._utf8_encode(e); s < e.length;)t = e.charCodeAt(s++), n = e.charCodeAt(s++), r = e.charCodeAt(s++), o = t >> 2, i = (3 & t) << 4 | n >> 4, a = (15 & n) << 2 | r >> 6, c = 63 & r, isNaN(n) ? a = c = 64 : isNaN(r) && (c = 64), u = u + this._keyStr.charAt(o) + this._keyStr.charAt(i) + this._keyStr.charAt(a) + this._keyStr.charAt(c); return u; }, _utf8_encode(e) { e = e.replace(/\r\n/g, '\n'); for (var t = '', n = 0; n < e.length; n++) { const r = e.charCodeAt(n); r < 128 ? t += String.fromCharCode(r) : r > 127 && r < 2048 ? (t += String.fromCharCode(r >> 6 | 192), t += String.fromCharCode(63 & r | 128)) : (t += String.fromCharCode(r >> 12 | 224), t += String.fromCharCode(r >> 6 & 63 | 128), t += String.fromCharCode(63 & r | 128)); } return t; } }; var ke = document.querySelector('meta[name=description]'); var Se = document.querySelector('link[rel*=icon]'); var qe = {
          link: location.href, title: (function () { return document.title; }()), desc: (function () { return Object(ke).content || ''; }()), icon: (function () { return Object(Se).href || `${location.protocol}//${location.hostname}/favicon.ico`; }()), from: '', success: r, fail: r, trigger: r,
        }; const Ae = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const De = (function () { function e(t) { m(this, e), this._shareData = qe, this._config = { syncDescToTag: !1, syncIconToTag: !1, syncTitleToTag: !1 }, this.setConfig(t); } return Ae(e, [{ key: 'getShareData', value() { return a({}, this._shareData); } }, { key: 'setShareData', value() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; a(this._shareData, e), this._config.syncDescToTag && l(this._shareData.desc), this._config.syncIconToTag && f(this._shareData.icon), this._config.syncTitleToTag && p(this._shareData.title); } }, { key: 'setConfig', value() { const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}; a(this._config, e); } }, { key: 'getConfig', value() { return a({}, this._config); } }]), e; }()); const Pe = De; const xe = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const Te = (function (e) {
          function t(e) { g(this, t); const n = O(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return o('https://jsapi.qq.com/get?api=app.share'), n; } return j(t, e), xe(t, [{
            key: 'call',
            value() {
              const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default'; const
                t = arguments[1]; this.setShareData(t); const n = this.getShareData(); const r = this.constructor.commamdMap[String(e).toLowerCase()]; browser.app.share({
                title: n.title, description: n.desc, url: n.link, img_url: n.icon, from: n.from, to_app: r,
              });
            },
          }]), t;
        }(Pe)); Te.commamdMap = (ce = {}, v(ce, 'wechattimeline', 8), v(ce, 'wechatfriend', 1), v(ce, 'qqfriend', 4), v(ce, 'qzone', 3), v(ce, 'weibo', 11), v(ce, 'copyurl', 10), v(ce, 'more', 5), v(ce, 'generateqrcode', 7), v(ce, 'default', void 0), ce); let Ee; const Ce = Te; const Ie = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const Me = (function (e) {
          function t(e) { return S(this, t), q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return A(t, e), Ie(t, [{
            key: 'call',
            value() {
              const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default'; const
                t = arguments[1]; this.setShareData(t); const n = this.getShareData(); const r = this.constructor.commamdMap[String(e).toLowerCase()]; ucbrowser.web_shareEX ? ucbrowser.web_shareEX(JSON.stringify({
                title: n.title, content: n.desc, sourceUrl: n.link, imageUrl: n.icon, source: n.from, target: r,
              })) : ucbrowser.web_share(title, desc, link, r, '', from, '');
            },
          }]), t;
        }(Pe)); Me.commamdMap = (Ee = {}, k(Ee, 'wechattimeline', 'kWeixinFriend'), k(Ee, 'wechatfriend', 'kWeixin'), k(Ee, 'qqfriend', 'kQQ'), k(Ee, 'qzone', 'kQZone'), k(Ee, 'weibo', 'kSinaWeibo'), k(Ee, 'default', void 0), Ee); let We; const Re = Me; const Ue = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const He = (function (e) {
          function t(e) { return P(this, t), x(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return T(t, e), Ue(t, [{
            key: 'call',
            value() {
              const e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default'; const
                t = arguments[1]; this.setShareData(t); const n = this.getShareData(); const r = this.constructor.commamdMap[String(e).toLowerCase()]; ucweb.startRequest('shell.page_share', [n.title, n.desc, n.link, r, '', n.from, n.icon]);
            },
          }]), t;
        }(Pe)); He.commamdMap = (We = {}, D(We, 'wechattimeline', 'WechatTimeline'), D(We, 'wechatfriend', 'WechatFriends'), D(We, 'qqfriend', 'QQ'), D(We, 'qzone', 'Qzone'), D(We, 'weibo', 'SinaWeibo'), D(We, 'default', ''), We); const Ze = He; const Ne = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const Qe = (function (e) {
          function t(e) { return E(this, t), C(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return I(t, e), Ne(t, [{
            key: 'call',
            value(e, t) {
              this.setShareData(t); const n = this.getShareData(); _flyflowNative.exec('bd_utils', 'shareWebPage', JSON.stringify({
                title: n.title, content: n.desc, landurl: n.link, imageurl: n.icon, shareSource: n.from,
              }), '');
            },
          }]), t;
        }(Pe)); const Ge = Qe; const Ye = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const Xe = (function (e) {
          function t(e) { return M(this, t), W(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return R(t, e), Ye(t, [{
            key: 'call',
            value(e, t) {
              this.setShareData(t); const n = this.getShareData(); location.href = `baidubrowserapp://bd_utils?action=shareWebPage&params=${encodeURIComponent(JSON.stringify({
                title: n.title, content: n.desc, imageurl: n.icon, landurl: n.link, mediaType: 0, share_type: 'webpage',
              }))}`;
            },
          }]), t;
        }(Pe)); const Fe = Xe; const Ve = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const Ke = (function (e) {
          function t(e) { return U(this, t), H(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return Z(t, e), Ve(t, [{
            key: 'call',
            value(e, t) {
              this.setShareData(t); const n = this.getShareData(); SogouMse.Utility.shareWithInfo({
                shareTitle: n.title, shareContent: n.desc, shareImageUrl: n.icon, shareUrl: n.link,
              });
            },
          }]), t;
        }(Pe)); const ze = Ke; const Be = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const Je = function e(t, n, r) { t === null && (t = Function.prototype); const o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { const i = Object.getPrototypeOf(t); return i === null ? void 0 : e(i, n, r); } if ('value' in o) return o.value; const a = o.get; return void 0 !== a ? a.call(r) : void 0; }; const Le = (function (e) {
          function t(e) { N(this, t); const n = Q(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.setConfig(e), n; } return G(t, e), Be(t, [{ key: 'call', value(e, t) { this.setShareData(t); } }, { key: 'setConfig', value(e) { Je(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'setConfig', this).call(this, e), this.init(this.getConfig().wechatConfig); } }, {
            key: 'init',
            value(e) {
              const t = this; e && o('https://res.wx.qq.com/open/js/jweixin-1.2.0.js', () => {
                wx.config(a({ debug: !1, jsApiList: ['onMenuShareTimeline', 'onMenuShareAppMessage', 'onMenuShareQQ', 'onMenuShareWeibo', 'onMenuShareQZone'] }, e)); const n = t._shareData; const r = {}; Object.defineProperty(r, 'trigger', {
                  get() {
                    return function () {
                      a(r, {
                        title: n.title, desc: n.desc, link: n.link, imgUrl: n.icon, type: n.type, dataUrl: n.dataUrl, success: n.success, fail: n.fail, cancel: n.fail,
                      }), n.trigger.apply(n, arguments);
                    };
                  },
                  set(e) { n.trigger = e; },
                  enumerable: !0,
                }), wx.ready(() => { wx.onMenuShareAppMessage(r), wx.onMenuShareQQ(r), wx.onMenuShareQZone(r), wx.onMenuShareWeibo(r), wx.onMenuShareTimeline(r); });
              });
            },
          }]), t;
        }(Pe)); const _e = Le; const $e = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const et = (function (e) {
          function t(e) { return Y(this, t), X(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return F(t, e), $e(t, [{
            key: 'call',
            value() {
              let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 'default'; const
                t = arguments[1]; if (this.setShareData(t), (e = String(e).toLowerCase()) !== 'weibo') throw e === 'qqfriend' ? b() : e === 'qzone' && y(), new Error(`the browser may not support command ${e}!`); w();
            },
          }]), t;
        }(Pe)); const tt = et; const nt = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const rt = (function (e) {
          function t(e) { V(this, t); const n = K(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.init(), n; } return z(t, e), nt(t, [{ key: 'call', value() { const e = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]); this.setShareData(e), mqq.ui.showShareMenu(); } }, {
            key: 'init',
            value() {
              const e = this; o('https://open.mobile.qq.com/sdk/qqapi.js', () => {
                const t = e._shareData; mqq.ui.setOnShareHandler((e) => {
                  mqq.ui.shareMessage({
                    back: !0, share_type: e, title: t.title, desc: t.desc, share_url: t.link, image_url: t.icon, sourceName: t.from,
                  }, (e) => { e.retCode === 0 ? t.success(e) : t.fail(e); });
                });
              });
            },
          }]), t;
        }(Pe)); const ot = rt; const it = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const at = function e(t, n, r) { t === null && (t = Function.prototype); const o = Object.getOwnPropertyDescriptor(t, n); if (void 0 === o) { const i = Object.getPrototypeOf(t); return i === null ? void 0 : e(i, n, r); } if ('value' in o) return o.value; const a = o.get; return void 0 !== a ? a.call(r) : void 0; }; const ct = (function (e) {
          function t(e) { B(this, t); const n = J(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.init(), n; } return L(t, e), it(t, [{
            key: 'setShareData',
            value(e) {
              at(t.prototype.__proto__ || Object.getPrototypeOf(t.prototype), 'setShareData', this).call(this, e); const n = this.getShareData(); s(n.link) !== location.hostname && (n.link = location.href, console.warn('安卓的QQ自带浏览器分享url必须跟页面url同一个域名，已自动为你设置为当前页面的url')); try {
                mqq.data.setShareInfo({
                  share_url: n.link, title: n.title, desc: n.desc, image_url: n.icon,
                }, (e) => { !0 !== e && console.warn(e); });
              } catch (e) {}
            },
          }, { key: 'call', value() { const e = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]); this.setShareData(e), mqq.ui.showShareMenu(); } }, { key: 'init', value() { const e = this; o('https://open.mobile.qq.com/sdk/qqapi.js', () => { e.setShareData(); }); } }]), t;
        }(Pe)); const ut = ct; const st = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const lt = (function (e) {
          function t(e) { _(this, t); const n = $(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); return n.init(), n; } return ee(t, e), st(t, [{
            key: 'call',
            value() {
              const e = this; const t = (arguments.length > 0 && void 0 !== arguments[0] && arguments[0], arguments[1]); this.setShareData(t); for (var n = this.getShareData(), r = [], o = [], i = [], a = [], c = 0; c < 5; c++)r.push(n.icon), a.push(n.link), o.push(n.title), i.push(n.desc); QZAppExternal.setShare((t) => { t.code != 0 && (e.hasSomethingWrong = !0); }, {
                type: 'share', image: r, title: o, summary: i, shareURL: a,
              });
            },
          }, { key: 'setShareData', value(e) { try { this.call('default', e); } catch (e) {} } }, { key: 'init', value() { const e = this; o('https://qzonestyle.gtimg.cn/qzone/phone/m/v4/widget/mobile/jsbridge.js', () => { e.call('default'); }); } }]), t;
        }(Pe)); const ft = lt; const pt = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const ht = (function (e) {
          function t(e) { return te(this, t), ne(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return re(t, e), pt(t, [{
            key: 'call',
            value(e, t) {
              this.setShareData(t); const n = this.getShareData(); window.NativeShareFailCallback = n.fail, window.NativeShareSuccessCallback = n.success, location.href = `baiduboxapp://callShare?${[`options=${encodeURIComponent(JSON.stringify({
                title: n.title, imageUrl: '', mediaType: 'all', content: n.desc, linkUrl: n.link, iconUrl: n.icon,
              }))}`, 'errorcallback=window.NativeShareFailCallback', 'successcallback=window.NativeShareSuccessCallback'].join('&')}`;
            },
          }]), t;
        }(Pe)); const bt = ht; const yt = (function () { function e(e, t) { for (let n = 0; n < t.length; n++) { const r = t[n]; r.enumerable = r.enumerable || !1, r.configurable = !0, 'value' in r && (r.writable = !0), Object.defineProperty(e, r.key, r); } } return function (t, n, r) { return n && e(t.prototype, n), r && e(t, r), t; }; }()); const dt = (function (e) { function t(e) { return oe(this, t), ie(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e)); } return ae(t, e), yt(t, [{ key: 'call', value(e, t) { this.setShareData(t); const n = this.getShareData(); window.NativeShareFailCallback = n.fail, window.NativeShareSuccessCallback = n.success, prompt(`BdboxApp:${JSON.stringify({ obj: 'Bdbox_android_utils', func: 'callShare', args: [`{\n                            imageUrl: "",\n                            mediaType: "all",\n                            title: "${n.title}",\n                            content: "${n.desc}",\n                            linkUrl: "${n.link}",\n                            iconUrl: "${n.icon}"\n                        }`, 'window.NativeShareSuccessCallback', 'window.NativeShareFailCallback'] })}`); } }]), t; }(Pe)); const wt = dt; n.d(t, 'Share', () => Pe), n.d(t, 'QQMobileBrowser', () => Ce), n.d(t, 'UCIosBrowser', () => Re), n.d(t, 'UCAndroidBrowser', () => Ze), n.d(t, 'BaiduAndroidBrowser', () => Ge), n.d(t, 'BaiduIosBrowser', () => Fe), n.d(t, 'SogouIosBrowser', () => ze), n.d(t, 'BaiduIos', () => bt), n.d(t, 'BaiduAndroid', () => wt), n.d(t, 'Wechat', () => _e), n.d(t, 'Others', () => tt), n.d(t, 'QQIos', () => ot), n.d(t, 'QQAndroid', () => ut), n.d(t, 'QZone', () => ft), n.d(t, 'shareToQQ', () => b), n.d(t, 'shareToQZone', () => y), n.d(t, 'shareToWeibo4Web', () => w), n.d(t, 'shareToQZone4Web', () => d); let mt = void 0; mt = be ? _e : ye && pe ? ot : ye && he ? ut : de ? ft : we ? Ce : me && pe ? Re : me && he ? Ze : ve && he ? Ge : ve && pe ? Fe : ge && pe ? ze : Oe && pe ? bt : Oe && he ? wt : tt, window.NativeShare = mt, t.default = mt;
      }]))));
    }).call(this, n('62e4')(e));
  },
  '0472': function (e, t, n) { e.exports = `${n.p}img/wxpyq.9d0bd2ee.png`; },
  '090d': function (e, t, n) { e.exports = `${n.p}img/weibo.9c391345.png`; },
  '183e': function (e, t, n) { e.exports = `${n.p}img/wxmoreshare.c26b3369.png`; },
  '1e82': function (e, t, n) { e.exports = `${n.p}img/plant3.1a21c416.png`; },
  6856(e, t, n) {},
  '8ce5': function (e, t) { e.exports = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADwAAAA8CAYAAAFN++nkAAAAAXNSR0IArs4c6QAADDdJREFUaAXNWwtwXUUZ3j3npoG0gNJKxxkGBgqOPBzRFgQK+Mhtkpvc22gHU0dqoTBQZAQpDgqITkZA3oziIFZGQFpmBBmYNunNWwqlFRAQRlrQ8pK31LRQmrRp7jm/33+aPe7Ze/bcc5MUuDPp7v7P/c/u/vvvv1shtF9DZ8+xzZ39j2ogIVWjec0Aqboqiy31MiBQSAYwUrV9Qec7LFZxqHJkhGZw3RHyd05GuL/lhuLm+sCC7CCX/IuIVESNq7uPcd2a58sIAhbtH2ZwuM0V8v3zNFxEZQhv7hx4J7eyuL8CRPQrIJcsUSpbFYBLBQv06giuq1+IVAAuh4cG9+MyRM7u6KhjAP/qpk7/kEtrhwSJD0NbmVL9SoOlacV8/f4BpwJyqXqqw8I6iafBNEe1Q+ZEJkWtlcF34rbJSCRu6srXX6rRitya/ielkMfrMIlp+a6QcqYOZKl6W9VNJc4H3tCRCsmljTEO56xvbf1QED2rBJjSFZxLHcdfPNI9Hakz6XUStL2rJXsAwyLMOlGus/86fItLyBcLuwv1D+k4VY8wN6/uzwtXdiikWZrfI2TOrRkYRSNjMphtLPMfdrdkb2V4wIwV9AJqnzcJbW0aGjmoq615yx5NJiOJdzENP6uYzV7JqbXvsWKJmbMDM2eqIuTStI1h5kh4pdEjHZORCdP8XDezMVysioHI/5Wq6yU86Hq9jU5PKWPuys9bFiEaa3S11J9iwiPMPtFZJkGkTfRw2CZ6xcF061IAR8q7zQ+jcAFcyq+rdjGfPcLBPG1WAC49QTnVblrTf5GqE9EDqj5WUjBJmjr6T3IcucFAWptqKAObuwvZvwrfP8NKrSEUI4MCzRqubDIoHFzTRrimyM5VxqyI9TLX0b9QSnkHVAWeXMeZdR6AnUNb29a2te0wcXrbqjjXOfA8tuBjdOLx1H3fP7W7MO8xk7dMsbn4TIbxtsmnRV2F7L2KP5zYjZ19LTz/0JOKfgjL7px/Dw3W8oBvGxqsEz5doQTaSunIldhdSgofWNy4pq/NFc59Cmgr9ZkVRzN7+fKamQcfsTsOp8NYTmBxGqXbaeeBOnNc/emlS0f1BRlHwzC4zAfYb14P9/djGxHDMVO3YsVPT6LRcTZXotM4ksTFOsCsQ2lnNUqZPxgSordMWXrbweJeqAMidUQ9UFqIwFI24BgPho8PJ5PJFkwu26dBp66ExdsE+f/sLjQMmMy2Njbb+0p+6TLXyXTE+QIOwoOlwyFJZnqmzNOA6WqMvyDp8u6UTnF7OyYs5TNupi2uYzBkE0KC5REHYrOcBWCbuJc8cYNP3jbXdWePudAZgD/jSW+Zu8t7xa+dcpgrxE3YNk+IVUp0Z1c+ew7jIooZkOvsu1BKJwhSuD0ZP4w1YVsOnRXLLFOsFOXuL35G1k3hODbCoPBpSnyN0EKT3qrYJMw9VJwla2qvRedbOQIx8RiLV2HZdfiUvy/DxQBSK2beuatW7befMy2Lxb+MpDxREm2Fsrs94a3szTcG57kYHbGgioob7umZ6k53/4zZHcYmsZIAxPLbgVl7bnc++ycbjYInKsZ6fAqzYLYirqr0qFCcn+208cQqzq3qnSszbtnmbRNig/OaheeLDSbKZmywnCZBKXcGw3M0BxZxHYtYjNjqDN6w4wgnAmOfjXVco8sIFQfrds8ZQ8dPXp3EizjfHKUEhp8azuIdBUwsSWwoeaXDeevjvxKVvoDZ/FIiDyNx0Grq6A2j+MBihO5LOStTiZlK3ildrQ28YZT9MDe+DycXJHXKkBog2KvRDixOpZTolzalLBdHp9sRqjyq6YitcnzHCKdxVfcRsRQGEK7wpwaorDn81Lr6MqABcMj5A4McpK6uN3BlTTj7t8uAMYC17e3WiEORY4+fxnV8asoroK3ERPiLDWfC4TQqTlLO1WF4Y3YaQ1rJ935ugKxNX/g/sSLHEK6sWRQupyTi3vmNrybhddwQ7bb6Z0VHDp1ZUXFxaDCIyxRTpfKxfH5babR0SBIdQurpiYrhGO4QbW1ekpA4XO83G9/AWP8rDrcHJh9PVLzzqXUX2JmTMb4vv2ej8KR/i8Mhi40gzfKw8fYU6p+04UaGtg1AsbzBRvC19vYMgoFhG94GB88/crcWa214zhY4xUL9chtB3fGnjsK574tz7W02GhOOTMJm8BwrZ9XuMnHcxtgHuSIeY8wh2hRHpGD+6OiNql6xJGpPovEGvW8zPphcaJxgI8YmTt3fyr1m4jncNWHc1tMNZXhkfHsXNw4x/P+BwJqBO9FYUkYMAL7IEAn/3JIv19d4cpqooQulcM5nWniqy33PD7IJjuuc7gjHOmfUlsh8oWJu4JD+AeKk8FKCYZP1Q8AwF7F3mImLrGNEhAfwp50sZUoOJ411pQyPWKwIYfn7sDxIiivYeEucMhb3tDSsMPkjFiskLP8U5nqwYStYtSV/Oc5uxyllWbEWKyV89zNT1j0BqkgeUuFtJfJgFwShkI0A8ETFOh+uG84D+aWIIMpDJaLdsHB1ifwr+goNm3U+Wz21YpsAE84xnMxkcLknsujocUhkHJIm2AjkwACUbyG9+AwM6XNGxMPFBdmEXc7UXrk9IYN5Chwk912EBXBhtdOgcteiFHDrG+GtbvO2+vco5xelSNeq2uCxzMi1yAecDeaq+dN1K5mKFyqW6l3ebu/y3gWN7yVTR7GpO9zc0fddcuTte8uRR7uVvgXLt2OX+oHNS5mSKhrM2QEhnV9/XKNpdtjWDtyzoIvV7aWNzmowX2Ihndf9SRtRmyEhHC8FSqLUZO7ACh9rMHI01gBIMY6n5OkH7/0KRuM/WP27EVTXoTwYsg5FR/YZj0wbD3TchVTP2SY+YjDnDTMHZtajE180CcfVJvG+L+myLW++fCdfzVSSUf9g//SaWnEFZtUydCzSt0q8sXgSz5W2IsgbC2mZJhS6x1j3b9gzwxxUrJA0QBI7hUetxdZsXxryOBoEHD9D9v8XcbhqYJhVm/i8oIxWMZ7MHOg+MBnGYiq9OUzDh0zEWDYIyaWrPKJ52H6qPpbrHwSz5WjOdgMWDG5gcHPHwFIY26QTjquOoFKUvO+sLRT+Oy5+g6knn+2HwVcb4KqbMDqHnCVCVFjNlwsHuFOfg8GHVS3JYMD0eRwngJMBxkBPzi/b2XfUFCGfRf+mTEgiXm/gVdNxDt+kTIax3Bnpyz+imDRjWWZ/ft4LKFJnE5kn9ifl4dMydd/AexGKfRwTy5QEJPEEUigV09xJImy4EnnLMLV9Gz4t3CXnEl7DX0nLYKXzxXXF4cG5VvwEEb2Fxhe3i10zsGTG7fX3dIFOjH3ql7p/iGo8f/SknvlNOMl8NL+0lx1xvcEHe8fB2ZPXXdU/LNRRD2fej9JY7iRnFnA1cVXVHQYD+xjHI28F1gcfvKv64Wv9JikhW5WwKom3e0M34oO/VhUbbPRodKWDIBv32rLirUGZcPIfUTBcfZ7OkZpq742yeVXvHL6rYdnBu1dB6Hf6H2ZyB89GySyclnHcmr+rm6c0YjDCH2ADehnh35cDeqJ1w1veaFi7ZElsUjqNTBtNbnXvV4Xr4uQm9uF1KEm+jbgp9bU9siU7fG/0Sz2tTS8FBrOitA/HbJ0K4HjviqecC4InjomEKZF4qtM8+9RrkEG/LCVHLJkn/IU9LfPuZ2RoMDfSXhkzrf7DesIu6Z8W9/BQp5tIHVcgKxAgLapWBhzcUv39S8RgFsYX5450VkO4W5Vw3PbDa59ZyZE1P9j/OaqVfN6ei6l25c4tr9+ctAz4wohm1VyES4drwBN5ypDYPxw6fPLn48VZUacrM5iRY4m6R2D0uI+KGHXcVhPfihEO/ftCVuVYmJhejoClFvR1ekerquPj0/DIafzW3OSLNVgR8cMT4ci7QVTVla3i/6jL4CP7dFbSHVeiwarDY4m8Wz6phrOh8N4/qpTAY3tSGRwajkdV2B6WY/sK9kMF/7hKGLkJj6SXVuMsqzJYN4wfXeM/BLTjcD1Hh+/1Ot7e4tF2e9ITuKQ+jNtgXShHWe6n3TwczWIh6RR8hMm5dcXhBNN1HUZyxa7hrZ2VHv3rfbLVJ8Vgm3DOpkx19zkUT7lmub5zIhbQyXDZR/IbE+ZBuDeIqGkzIrYNnuM/js38Zfd97/WuRc3bbTInCv8fmj+x7CiDlLIAAAAASUVORK5CYII='; },
  '906c': function (e, t) { e.exports = 'data:image/png;base64,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'; },
  c019(e, t) { e.exports = 'data:image/png;base64,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'; },
  defc(e, t, n) {
    const r = n('6856'); const o = n.n(r); o.a;
  },
  e92b(e, t, n) {
    n.r(t); const r = function () {
      const e = this; const t = e.$createElement; const r = e._self._c || t; return r('div', { staticClass: 'view' }, [r('div', { staticClass: 'head' }, [r('p', { staticClass: 'fisrtP' }, [e._v('您的分数为：')]), r('p', [r('span', [e._v(e._s(e.score))]), e._v('  分')])]), e._m(0), r('div', { staticClass: 'resultBody', on: { click(t) { e.showBool = 1; } } }, [r('div', { staticClass: 'content' }, [r('p', { staticClass: 'w5' }, [e._v(e._s(e.infor.blue))]), r('p', { class: e.w3 }, [e._v(e._s(e.infor.yellow))])])]), e.showBool == 1 ? r('div', { staticClass: 'btnDiv' }, [r('button', { staticClass: 'btn1', on: { click: e.testAgain } }, [e._v('再测一次')]), r('button', { staticClass: 'btn2', on: { click: e.downApp } }, [e._v('下载APP')]), r('button', { staticClass: 'btn3', on: { click: e.share } }, [e._v('一键分享')])]) : e.showBool == 2 ? r('div', { staticClass: 'shareBtn' }, [r('div', { on: { click(t) { return e.call('qZone'); } } }, [r('img', { attrs: { src: n('906c') } }), r('p', [e._v('QQ空间')])]), r('div', { on: { click(t) { return e.call('qqFriend'); } } }, [r('img', { attrs: { src: n('8ce5') } }), r('p', [e._v('QQ好友')])]), r('div', { on: { click(t) { return e.call('weibo'); } } }, [r('img', { attrs: { src: n('090d') } }), r('p', [e._v('微博+')])]), r('div', { on: { click(t) { return e.call('wechatTimeline'); } } }, [r('img', { attrs: { src: n('0472') } }), r('p', [e._v('朋友圈')])]), r('div', { on: { click(t) { return e.call('wechatFriend'); } } }, [r('img', { attrs: { src: n('c019') } }), r('p', [e._v('微信')])])]) : e._e(), r('div', {
        directives: [{
          name: 'show', rawName: 'v-show', value: e.showBool == 3, expression: 'showBool == 3',
        }],
        staticClass: 'qrcode',
      }, [r('p', [e._v('请打开微信扫描下方二维码')]), r('div', { attrs: { id: 'qrcode' } })]), e.showImg ? r('img', { staticClass: 'shareImg', attrs: { src: n('183e') }, on: { click(t) { e.showImg = !1; } } }) : e._e()]);
    }; const o = [function () { const e = this; const t = e.$createElement; const r = e._self._c || t; return r('div', { staticClass: 'imgDiv' }, [r('img', { attrs: { src: n('1e82') } })]); }]; const i = n('0073'); const a = n.n(i); function c(e) { for (let t = 1; t < arguments.length; t++) { var n = arguments[t] != null ? arguments[t] : {}; let r = Object.keys(n); typeof Object.getOwnPropertySymbols === 'function' && (r = r.concat(Object.getOwnPropertySymbols(n).filter(e => Object.getOwnPropertyDescriptor(n, e).enumerable))), r.forEach((t) => { u(e, t, n[t]); }); } return e; } function u(e, t, n) {
      return t in e ? Object.defineProperty(e, t, {
        value: n, enumerable: !0, configurable: !0, writable: !0,
      }) : e[t] = n, e;
    } const s = {
      data() {
        return {
          showImg: !1, nativeShare: null, showBool: 1, score: 0, w3: 'w3', infor: { blue: '', yellow: '' }, information: [{ blue: '哇哦！你真是个幸福的人呀！\n几乎没有压力，即使刺激或有趣的事情发生了，你也很少作反应。\n你最好更主动些，在工作、社交、娱乐等活动上多增加些刺激，以增加你的压力激活反应。', yellow: '不妨来海马减压和大家分享下排解压力轻松生活的妙招呀~' }, { blue: '压力很难影响到你，处于正常压力状态，在健康心理压力范围内，生活社交能力不受影响。\n请积极保持这样的良好心态同时，遇到压力的时候需要用正确的方式进行排解，更好的减压方式能让你更加平和，也能找到更多生活趣味。', yellow: '如果遇到压力的话，不妨来海马减压听听音乐放松一下，让健康优良的心态一直保持下去~' }, { blue: '你能感受到轻微的压力，但是你能够控制你自己的压力反应，看起来你是一个相当放松的人。\n不过为了更好的让自己处于健康心理状态，请适当给自己压力缓解的时间和空间，遇到压力的时候需要学会新的疏导和释放方式，当承受巨大压力的时候可以通过外部帮助来进行缓解。', yellow: '有轻微压力也别忽视呀，来海马减压放松一下，彻底排解掉吧！' }, { blue: '已经能明显感受到自己的压力，对自己的生活状态有轻微影响，但你也许有能力去享受压力。\n请及时进行压力舒缓和释放，缓解现状的压力状态，寻求新的减压方式，面对巨大压力的时候一定要用科学的方式来排解，请勿习惯性的忍耐或以非健康的方式（如抽烟、酗酒、超体力活动等）进行发泄，以免突然情绪爆发。', yellow: '有轻微压力也别忽视呀，来海马减压放松一下，彻底排解掉吧！' }, { blue: '压力已经达到警戒线，能感觉到较明显的身体症状（如身体不适、乏力、压力型失眠等），社交能力因为压力有所下降（可能出现轻微的强迫、人际关系敏感、孤僻等）。请尽快进行正确的压力释放，如果是长期累积压力请寻求根源尽早解决，如果是短期压力请尽量暂时隔离压力来源，避免压力升级和情绪失控。可以通过新的减压方式来进行压力舒缓与释放。', yellow: '别把压力放在心里呀，来海马减压，新的减压方式，带给你不一样的轻松愉悦' }, { blue: '压力已经超过正常耐受范围，你能非常明显的感觉到压力的存在，并对你的身体带来很明显的影响，如长期失眠、肌肉酸痛、头晕、缺乏活力、突然兴奋、震颤等等，在对社交的干扰比较明显，如社交能力快速下降、不可控的暴躁不安、敏感消极、猜疑敌对、甚至社交恐惧等。请立即进行科学的压力舒缓与释放，阻断压力来源，减轻压力源躯体不适，改变生活方式、社交方式，寻求与以往不同的压力认知和解决方案，找到适合自己的正确高效的减压途径。', yellow: '' }],
        };
      },
      mounted() {
        const e = this; this.is_weixin(), this.$route.query.score ? this.score = this.$route.query.score : this.score = window.sessionStorage.getItem('HAIMASCORE') ? window.sessionStorage.getItem('HAIMASCORE') : 0; let t = 0; this.score <= 27 ? t = 0 : this.score <= 39 ? t = 1 : this.score <= 56 ? t = 2 : this.score <= 70 ? t = 3 : this.score <= 82 ? (t = 4, this.w3 = 'w4') : t = 5, this.score <= 82 ? this.w3 = 'w4' : this.w3 = 'w3', this.infor.blue = this.information[t].blue, this.infor.yellow = this.information[t].yellow, this.nativeShare = new a.a({ syncDescToTag: !1, syncIconToTag: !1, syncTitleToTag: !1 }); const n = {
          title: '海马减压', desc: '测测你的心理压力有多大？史上超专业测试', link: location.href, icon: 'https://web.himaemotion.com/activity/hima/img/logo.5b93807e.png', success() { alert('success'); }, fail() { alert('fail'); },
        }; this.nativeShare.setShareData(n), this.$axios({
          type: 'post',
          data: {
            client: 'iOS', osVer: '9.3.3', appVer: '1.0', param: { platform: 'wechat', url: 'https://test.himaemotion.com' },
          },
          fuc(t) { console.log(t), e.nativeShare.setConfig({ wechatConfig: c({ debug: !0 }, t.data.wechatSign) }); },
        });
      },
      methods: {
        is_weixin() { const e = navigator.userAgent.toLowerCase(); return e.match(/MicroMessenger/i) == 'micromessenger'; }, testAgain() { this.$router.push('TestPage'); }, downApp() { window.location = 'https://sj.qq.com/myapp/detail.htm?apkName=com.himaemotation.app'; }, share(e, t, n) { this.showBool = 2; }, call(e) { if (e == 'weibo') { console.log(1234); const t = `http://v.t.sina.com.cn/share/share.php?title=测测你的心理压力有多大？史上超专业测试&url=${location.href}&content=utf-8`; window.open(t, 'newwindow', 'height=400,width=400,top=100,left=100'), console.log(1); } else if (this.is_weixin());else { console.log(3); try { this.nativeShare.call(e), console.log(4); } catch (n) { alert('当前浏览器不支持自定义分享，请手动点击浏览器分享按钮'); } } },
      },
    }; const l = s; const f = (n('defc'), n('2877')); const p = Object(f.a)(l, r, o, !1, null, '1cfa1a3a', null); t.default = p.exports;
  },
}]);
