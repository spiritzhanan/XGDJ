import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/login"
  },
  {
    path: "/login",
    component: () => import("../components/Login")
  },
  {
    path: "/home",
    redirect: "/welcome",
    component: () => import("../components/Home"),
    children: [
      {
        path: "/welcome",
        component: () => import("../components/Welcome")
      },
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
      {
        path: "/tasklists",
        component: () => import("../components/growup/TaskLists")
      },
      {
        path: "/scheck",
        component: () => import("../components/growup/SCheck")
      },
      {
        path: "/taskmanager",
        component: () => import("../components/vtasks/TaskManager")
      },
      {
        path: "/vcheck",
        component: () => import("../components/vtasks/VCheck")
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
