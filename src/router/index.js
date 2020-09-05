import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  /*重定向到登录界面*/
  {
    path: "/",
    redirect: "/login"
  },

  /*登录路由*/
  {
    path: "/login",
    component: () => import("../components/Login")
  },

  /*首页路由*/
  {
    path: "/home",
    redirect: "/welcome",
    component: () => import("../components/Home"),
    children: [
      /*欢迎界面路由*/
      {
        path: "/welcome",
        component: () => import("../components/Welcome")
      },

      /*待办事项路由*/
      {
        path: "/dispatch",
        component: () => import("../components/backlog/Dispatch")
      },
      {
        path: "/closed",
        component: () => import("../components/backlog/Closed")
      },
      {
        path: "/created",
        component: () => import("../components/backlog/Created")
      },
      {
        path: "/solved",
        component: () => import("../components/backlog/Solved")
      },

      /*学子成长路由*/
      {
        path: "/tasklists",
        component: () => import("../components/growup/TaskLists")
      },
      {
        path: "/scheck",
        component: () => import("../components/growup/SCheck")
      },

      /*志愿任务路由*/
      {
        path: "/taskmanage",
        component: () => import("../components/vtasks/TaskManage")
      },
      {
        path: "/vcheck",
        component: () => import("../components/vtasks/VCheck")
      },

      /*成长履历路由*/
      {
        path: "/growth",
        component: () => import("../components/growth/Growth")
      },

      /*网页管理路由*/
      {
        path: "/ad",
        component: () => import("../components/wmanage/AD")
      },
      {
        path: "/article",
        component: () => import("../components/wmanage/Article")
      },
      {
        path: "/file",
        component: () => import("../components/wmanage/File")
      },
      {
        path: "/image",
        component: () => import("../components/wmanage/Image")
      },
      {
        path: "/menu",
        component: () => import("../components/wmanage/Menu")
      },

      /*管理报表路由*/
      {
        path: "visitor",
        component: () => import("../components/mbvr/Visitor")
      },

      /*系统管理路由*/
      {
        path: "code",
        component: () => import("../components/msetting/Code")
      },
      {
        path: "log",
        component: () => import("../components/msetting/Log")
      },
      {
        path: "setting",
        component: () => import("../components/msetting/Setting")
      },
      {
        path: "student",
        component: () => import("../components/msetting/Student")
      },
      {
        path: "user",
        component: () => import("../components/msetting/User")
      }
    ]
  }
];

const router = new VueRouter({
  routes
});

//挂载路由导航守卫
//为路由对象添加beforeEach 导航守卫
//to：将要访问的路径
//from：代表从哪个路径跳转而来
//next是一个函数，表示放行，next() 放行， next('/login') 强制跳转
router.beforeEach((to, from, next) => {
  //如果用户访问的登录页，直接放行
  if (to.path === "/login") return next();
  //从sessionStorage中获取到保存的token值
  const tokenStr = window.sessionStorage.getItem("token");
  //没有token，强制跳转到登录页
  if (!tokenStr) return next("/login");
  next();
});

export default router;
