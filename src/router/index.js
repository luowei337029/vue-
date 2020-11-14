import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "../views/layout/index.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login",
    meta: {
      name: "主页"
    },
    hidden: true
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/login/index.vue"),
    meta: {
      name: "登录"
    },
    hidden: true
  },
  {
    path: "/layout",
    name: "Layout",
    redirect: "/console",
    component: Layout,
    meta: {
      name: "控制台"
    },
    children: [
      {
        path: "/console",
        name: "Console",
        component: () => import("../views/console/index.vue"),
        meta: {
          name: "首页"
        }
      }
    ]
  },
  {
    path: "/info",
    name: "Info",
    component: Layout,
    meta: {
      name: "信息管理"
    },
    children: [
      {
        path: "/infoList",
        name: "InfoList",
        component: () => import("../views/info/infoList.vue"),
        meta: {
          name: "信息列表"
        }
      },
      {
        path: "/infoClassify",
        name: "InfoClassify",
        component: () => import("../views/info/infoClassify.vue"),
        meta: {
          name: "信息分类"
        }
      }
    ]
  },
  {
    path: "/user",
    name: "User",
    component: Layout,
    meta: {
      name: "用户管理"
    },
    children: [
      {
        path: "/userList",
        name: "UserList",
        component: () => import("../views/user/userList.vue"),
        meta: {
          name: "用户列表"
        }
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

export default router;
