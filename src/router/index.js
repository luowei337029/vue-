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
      name: "控制台",
      icon: "console"
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
  // 停车场
  {
    path: "/layout",
    name: "Layout",
    redirect: "/console",
    component: Layout,
    meta: {
      name: "停车场",
      icon: "console"
    },
    children: [
      {
        path: "/parking",
        name: "parking",
        component: () => import("../views/parking/index.vue"),
        meta: {
          name: "停车场列表"
        }
      },
      {
        path: "/parkingAdd",
        name: "parkingAdd",
        component: () => import("../views/parking/parkingAdd.vue"),
        meta: {
          name: "新增停车场"
        }
      },
    ]
  },
  // 车辆品牌
  {
    path: "/carsBrand",
    name: "CarsBrand",
    redirect: "/console",
    component: Layout,
    meta: {
      name: "车辆品牌",
      icon: "console"
    },
    children: [
      {
        path: "/carsBrand",
        name: "carsBrand",
        component: () => import("../views/carsBrand/index.vue"),
        meta: {
          name: "品牌列表"
        }
      }]
  },
  // 车辆管理
  {
    path: "/cars",
    name: "Cars",
    redirect: "/console",
    component: Layout,
    meta: {
      name: "车辆管理",
      icon: "console"
    },
    children: [
      {
        path: "/carsIndex",
        name: "carsIndex",
        component: () => import("../views/cars/index.vue"),
        meta: {
          name: "车辆列表"
        }
      },
      {
        path: "/carsAdd",
        name: "carsAdd",
        component: () => import("../views/cars/carsAdd.vue"),
        meta: {
          name: "新增车辆"
        }
      },
    ]
  },
  // {
  //   path: "/info",
  //   name: "Info",
  //   component: Layout,
  //   meta: {
  //     name: "信息管理",
  //     icon: "info"
  //   },
  //   children: [
  //     {
  //       path: "/infoList",
  //       name: "InfoList",
  //       component: () => import("../views/info/infoList.vue"),
  //       meta: {
  //         name: "信息列表"
  //       }
  //     },
  //     {
  //       path: "/infoClassify",
  //       name: "InfoClassify",
  //       component: () => import("../views/info/infoClassify.vue"),
  //       meta: {
  //         name: "信息分类"
  //       }
  //     }
  //   ]
  // },
  // {
  //   path: "/user",
  //   name: "User",
  //   component: Layout,
  //   meta: {
  //     name: "用户管理",
  //     icon: "user"
  //   },
  //   children: [
  //     {
  //       path: "/userList",
  //       name: "UserList",
  //       component: () => import("../views/user/userList.vue"),
  //       meta: {
  //         name: "用户列表"
  //       }
  //     }
  //   ]
  // }
];

const router = new VueRouter({
  routes
});

export default router;
