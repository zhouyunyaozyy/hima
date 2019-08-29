(window.webpackJsonp = window.webpackJsonp || []).push([['vds2'], {
  '17d8': function (a, e, t) {
    const i = t('662b'); const r = t.n(i); r.a;
  },
  2869(a, e, t) {
    t.r(e); const i = function () {
      const a = this; const e = a.$createElement; const i = a._self._c || e; return i('div', { staticClass: 'view' }, [i('div', [i('div', { staticClass: 'viewQuest' }, [i('p', { staticClass: 'quest' }, [a._v(a._s(a.questing))]), i('div', { staticClass: 'viewAnswer' }, [i('div', [i('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: a.param, expression: 'param',
        }],
        attrs: {
          type: 'radio', name: 'paixu', id: 'paixu1', value: '4',
        },
        domProps: { checked: a._q(a.param, '4') },
        on: { change(e) { a.param = '4'; } },
      }), i('label', { staticStyle: { cursor: 'pointer' }, attrs: { for: 'paixu1' } }, [a._v('总是')])]), i('div', [i('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: a.param, expression: 'param',
        }],
        attrs: {
          type: 'radio', name: 'paixu', id: 'paixu2', value: '3',
        },
        domProps: { checked: a._q(a.param, '3') },
        on: { change(e) { a.param = '3'; } },
      }), i('label', { staticStyle: { cursor: 'pointer' }, attrs: { for: 'paixu2' } }, [a._v('经常')])]), i('div', [i('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: a.param, expression: 'param',
        }],
        attrs: {
          type: 'radio', name: 'paixu', id: 'paixu3', value: '2',
        },
        domProps: { checked: a._q(a.param, '2') },
        on: { change(e) { a.param = '2'; } },
      }), i('label', { staticStyle: { cursor: 'pointer' }, attrs: { for: 'paixu3' } }, [a._v('有时')])]), i('div', [i('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: a.param, expression: 'param',
        }],
        attrs: {
          type: 'radio', name: 'paixu', id: 'paixu4', value: '1',
        },
        domProps: { checked: a._q(a.param, '1') },
        on: { change(e) { a.param = '1'; } },
      }), i('label', { staticStyle: { cursor: 'pointer' }, attrs: { for: 'paixu4' } }, [a._v('很少')])]), i('div', [i('input', {
        directives: [{
          name: 'model', rawName: 'v-model', value: a.param, expression: 'param',
        }],
        attrs: {
          type: 'radio', name: 'paixu', id: 'paixu5', value: '0',
        },
        domProps: { checked: a._q(a.param, '0') },
        on: { change(e) { a.param = '0'; } },
      }), i('label', { staticStyle: { cursor: 'pointer' }, attrs: { for: 'paixu5' } }, [a._v('从未')])]), i('img', { attrs: { src: t('543b') } })])]), i('button', { on: { click: a.nextQuest } }, [a._v('下一题')])])]);
    }; const r = []; const s = {
      data() {
        return {
          score: 0, param: -1, num: 0, questing: '', questingData: ['1. 我感觉到背部疼痛。', '2. 我难以入睡，即便睡着也睡不踏实。', '3. 我有头痛。', '4. 如果让我等待，我会焦躁。', '5. 我的后颈疼痛。', '6. 我很敏感，神经紧绷。', '7. 我有胃病或消化不良。', '8. 我不自信。', '9. 我喜欢自言自语。', '10. 我担心钱的问题。', '11. 我和别人见面或者说话前会焦虑。', '12. 我怕发生恐怖的事或者灾难。', '13. 白天时候，我就觉得累。', '14. 我的喉咙很紧很涩，但并非生病。', '15. 我情绪不安，无法安静的待着。', '16. 我感到非常口渴。', '17. 我的心跳很快。', '18. 我觉得自己无用。', '19. 我吸烟。', '20. 我独自一人会感觉不舒服。', '21. 我觉得不快乐。', '22. 我流汗。', '23. 我喝酒。', '24. 我很自律。', '25. 我觉得自己不是我自己，好像四分五裂。', '26. 我的眼睛又酸又累。', '27. 我的腿或脚抽筋。', '28. 我怕认识陌生人。', '29. 我手脚冰凉。', '30. 我有便秘。', '31. 我有药物滥用的情况。', '32. 我发现自己很容易哭。', '33. 我咬指甲。', '34. 我耳中有嗡嗡声。', '35. 我小便频繁。', '36. 我担心我的工作。', '37. 我为琐事忧虑。', '38. 我呼吸浅促急促。', '39. 我觉得胸部紧迫。', '40. 我发现很难作决定。'],
        };
      },
      created() { this.questing = this.questingData[0]; },
      methods: { nextQuest() { this.num >= 39 ? (this.score += Number(this.param), this.$router.push({ path: 'ResultLoading', query: { score: this.score } })) : this.param >= 0 && (this.score += Number(this.param), this.num++, this.questing = this.questingData[this.num], this.param = -1); } },
    }; const n = s; const o = (t('17d8'), t('2877')); const p = Object(o.a)(n, i, r, !1, null, '27e302b1', null); e.default = p.exports;
  },
  '543b': function (a, e, t) { a.exports = `${t.p}img/plant1.987654f6.png`; },
  '662b': function (a, e, t) {},
}]);
