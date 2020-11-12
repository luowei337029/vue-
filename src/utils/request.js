// 抽取用户信息接口
//导入xiaos
import axios from "axios";
// 创建请求对象
const request = axios.create({
  // 基地址
  baseURL: process.env.VUE_APP_URL,
  // 是否跨域携带cookie 默认是false
  withCredentials: true
});

// 添加一个请求拦截器 注册给创建的请求对象 把axios换成request
request.interceptors.request.use(
  function(config) {
    // 在发送之前 干一些事情
    // 在发送之前设置token
    // config.headers.token = getToken()
    return config;
  },
  function(error) {
    // 如果请求出错了 干一些事情
    return Promise.reject(error);
  }
);

// 注册一个响应拦截器
request.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // 可以在这里对错误进行一些处理
    return Promise.reject(error);
  }
);

export default request