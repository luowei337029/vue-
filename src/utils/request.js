// 抽取用户信息接口
//导入xiaos
import axios from "axios";

const BASEURL = process.env.NODE_ENV === 'production' ? '' : '/devApi';
// 手把手撸码前端API，地址 http://www.web-jshtml.cn/productApi
// 创建请求对象
const service = axios.create({
  // 基地址
  baseURL: BASEURL,
  timeout: 3000
});

// 添加一个请求拦截器 注册给创建的请求对象 把axios换成service
service.interceptors.request.use(
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
service.interceptors.response.use(
  function(response) {
    return response;
  },
  function(error) {
    // 可以在这里对错误进行一些处理
    return Promise.reject(error);
  }
);

export default service