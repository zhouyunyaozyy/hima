import { alert, toast, confirm } from '../utils/common';

const ejects = {
  alert,
  toast,
  confirm,
};

const install = Vue => Object.assign(Vue.prototype, Object.entries(ejects).reduce((acc, [key, func]) => ({ ...acc, [`$${key}`]: func }), {}));

// !!window && window.Vue && install(window.Vue) // auto install

export default {
  ejects,
  install,
};
