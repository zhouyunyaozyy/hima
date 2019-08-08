import {
  http, cookies, toast, md5, moment,
} from '../utils/common';
import jockey from '../utils/jockey';
import i18n from './i18n';

const xhrDefaultConfig = {
  headers: {
    'Content-Type': 'application/json;charset=UTF-8',
    DEVICESOURCE: 'web',
    Accept: 'application/json',
    'Cache-Control': 'no-cache',
  },
  // timeout: 1000,
};

function httpInit(instance) {
  instance.interceptors.request.use(config => ({
    ...config,
    headers: {
      ...xhrDefaultConfig.headers,
      CEXPASSPORT: cookies.get('activityToken'),
      DEVICEID: md5(`${navigator.userAgent}${cookies.get('activityToken')}`),
      'X-B3-Traceid': moment().valueOf() * 1000,
      'X-B3-Spanid': moment().valueOf() * 1000,
      lang: i18n.locale,
    },
    // transformRequest: [// Do whatever you want to transform the data
    //   (data = {}) => JSON.stringify(Object.assign({ lang: i18n.locale }, { data })),
    // ],
  }), (error) => {
    toast(error.message);
    return Promise.reject(error);
  });

  instance.interceptors.response.use((/* response */{ data = {} }) => {
    // Do something with response data
    switch (data.code) {
      case '100000': // 去登录
        toast('请登录');
        cookies.expire('activityToken');
        jockey.send('login'); // 原生登录
        return Promise.reject(new Error(`${data.code} 登录超时`));
      case '000000': // 正常
        return data.data;
      /* case '100007':
        return data; // 账户已经存在 */
      default:
        toast(data.msg);
        return Promise.reject(new Error(data.msg));
    }
  }, error => Promise.reject(error.response));
  // toast(error.message);

  return instance;
}

export default typeof Proxy === 'undefined' ? {
  instance(uri) {
    const { baseURL = uri, headers, timeout } = xhrDefaultConfig;
    return httpInit(http.create({
      baseURL,
      headers,
      timeout,
    }));
  },
} : new Proxy(Object.create(null),
  {
    get(target, key) {
      if (key === 'instance') return null;
      const { baseURL = key, headers, timeout } = xhrDefaultConfig;
      return httpInit(http.create({
        baseURL,
        headers,
        timeout,
      }));
    },
  });
