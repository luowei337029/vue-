import Vue from "vue";
import SvgIcon from "./SvgIcon.vue";

Vue.component("svg-icon", SvgIcon);

// require.context 中的三个参数
// 1. 目录名
// 2. 是否遍历子级目录
// 3. 定义遍历文件规则 /\.svg$/ 以.svg结尾
const req = require.context("./svg", false, /\.svg$/); // 获取当前svg目录所有为.svg结尾的文件
const requireAll = requireContext => {
  return requireContext.keys().map(requireContext); // 解析获取的.svg文件的文件名称，并返回
};
requireAll(req);
