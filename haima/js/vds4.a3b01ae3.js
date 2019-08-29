(window.webpackJsonp = window.webpackJsonp || []).push([['vds4'], {
  1132(t, n, s) { t.exports = `${s.p}img/plant2.084c8da4.png`; },
  '520e': function (t, n, s) {},
  '93db': function (t, n, s) {
    s.r(n); const e = function () { const t = this; const n = t.$createElement; const s = t._self._c || n; return s('div', { staticClass: 'view' }, [s('div', [s('p', [t._v('测评结果计算中，请耐心等待')]), t._m(0), s('div', { staticClass: 'progressDiv' }, [s('div', { staticClass: 'progress' }, [s('span', { staticClass: 'red', style: { width: `${t.num}%` } }, [s('span', [t._v('loading…')])])])])])]); }; const i = [function () { const t = this; const n = t.$createElement; const e = t._self._c || n; return e('div', { staticClass: 'imgDiv' }, [e('img', { attrs: { src: s('1132') } })]); }]; const a = { data() { return { num: 0 }; }, mounted() { const t = this; var n = setInterval(() => { t.num++, t.num >= 99 && (clearInterval(n), t.inHome()); }, 15); }, methods: { inHome() { this.$router.push({ path: 'TestResult', query: this.$route.query }); } } }; const r = a; const u = (s('f958'), s('2877')); const c = Object(u.a)(r, e, i, !1, null, '5c8be465', null); n.default = c.exports;
  },
  f958(t, n, s) {
    const e = s('520e'); const i = s.n(e); i.a;
  },
}]);
