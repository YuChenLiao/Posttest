import axios from 'axios';
import { message } from 'antd';
import { Promise } from 'core-js';
import { getToken } from 'utils/token';
import store from '../index';

axios.defaults.baseURL = '';

message.config({
  top: 50,
  duration: 2,
  maxCount: 1,
});

const codeMessage = {
  200: '请求成功',
  201: '新建或修改数据成功',
  202: '一个请求已经进入后台排队',
  204: '删除数据成功',
  400: '请求格式有误',
  401: 'token无效或过期',
  403: '权限不足，无法进行此操作',
  404: '请求不存在',
  406: '请求的格式不可得',
  410: '请求的资源被永久删除',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器宕机了',
  502: '网关错误',
  503: '服务器暂时过载或维护。',
  504: '连接超时，请检查网络',
};

function checkStatus(response) {
  // message.destroy();
  if (response.status >= 200 && response.status < 300) {
    return response;
  }
  const errortext = response.statusText || codeMessage[response.status];
  const error = new Error(errortext);
  error.name = response.status;
  error.response = response;
  throw error;
}

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 * @return {object}           An object containing either "data" or "err"
 */
export default function request(url, options) {
  const defaultOptions = {
    credentials: 'include',
  };
  const newOptions = { ...defaultOptions, ...options };
  if (
    newOptions.method === 'POST' ||
    newOptions.method === 'PUT' ||
    newOptions.method === 'DELETE'
  ) {
    if (!(newOptions.body instanceof FormData)) {
      newOptions.headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json; charset=utf-8',
        ...newOptions.headers,
      };
    } else {
      // newOptions.body is FormData
      newOptions.headers = {
        Accept: 'application/json',
        ...newOptions.headers,
      };
    }
  }

  return axios(url, newOptions)
    .then(checkStatus)
    .catch(e => {
      const { response } = e;
      const { dispatch } = store;

      if (isUndefined(response)) {
        message.error(codeMessage[504]);
        return {
          statusText: 'error',
        };
      }

      const { status, data } = response;
      const errorMessage = data.message || data.error || codeMessage[status];
      if (status === 401) {
        message.error(errorMessage);
        dispatch({
          type: 'login/logout',
        });
        return;
      }
      if (status === 404) {
        const method = (options && options.method) || 'GET';
        window.console.error(`${method} ${url} error:${errorMessage}`);
        message.error(errorMessage);
        return e.response;
      }
      if (status > 401 || status === 400) {
        message.error(errorMessage);
        return e.response;
      }
    });
}

axios.interceptors.request.use(
  config => {
    const { headers, addToken = true } = config;
    if (addToken) {
      return {
        ...config,
        headers: {
          ...headers,
          authorization: getToken(),
        },
      };
    }
    return config;
  },
  err => Promise.reject(err)
);

axios.defaults.timeout = 30000;
