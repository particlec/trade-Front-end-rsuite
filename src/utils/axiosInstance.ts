import axios from 'axios';
import JsonBigInt from 'json-bigint';
import configs from '../configs';

const axiosInstance = axios.create({
  baseURL: configs.host,
  transformResponse: [
    function transformResponse(data) {
      if (typeof data === 'string') {
        try {
          // 使用 JsonBigInt 将长整型转换为字符串，避免前端取值时发生精度丢失。
          data = JsonBigInt({ storeAsString: true }).parse(data);
        } catch (e) {
          console.log('JsonBigInt 转换出错');
        }
      }
      return data;
    }
  ]
});

// 请求拦截处理
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

// 响应拦截处理
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
