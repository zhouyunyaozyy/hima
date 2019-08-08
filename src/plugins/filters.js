// time stamp
import { moment } from '../utils/common';

export const filters = {
  timeStampToDate(timeStamp, reg = 'YYYY.MM.DD HH:mm:ss') { // 时间戳转时间
    if (!timeStamp) return '...';
    return moment(timeStamp).format(reg);
  },
  countDown(timeDifference/* [,时间差]：秒 */) {
    const day = Math.floor(timeDifference / 86400);
    const hour = Math.floor((timeDifference % 86400) / 3600);
    const minute = Math.floor((timeDifference % 86400 % 3600) / 60);
    const second = Math.floor(timeDifference % 86400 % 3600 % 60);
    return {
      day,
      hour,
      minute,
      second,
    };
  },
  attrSort(array, attr, rev = 1) { // 数组排序，支持对象key键值排序
  /* eslint no-nested-ternary: 0 */
    return array.sort((a, b) => {
      const [old, cur] = [
        a.constructor === Object ? a[attr] : a,
        b.constructor === Object ? b[attr] : b,
      ];
      return (old - cur) * rev;
    });
  },
  toFixed(amount, fix = 2) {
    const newAmount = amount * 1;
    return typeof newAmount === 'number' ? newAmount.toFixed(fix) : '--·--';
  },
};

const install = Vue => Object.entries(filters).forEach(([key, func]) => Vue.filter(key, func));

// !!window && window.Vue && install(window.Vue) // auto install

export default {
  filters,
  install,
};
