<template>
  <el-container class="home_container">
    <!--头部组件-->
    <el-header>
      <div>
        <span>信工党建</span>
      </div>
      <el-button type="info" @click="loginout">退出</el-button>
    </el-header>
    <el-container>
      <!--左侧菜单栏目-->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          :unique-opened="true"
          :collapse-transition="false"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>待办事项</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="dispatch">派给我</el-menu-item>
              <el-menu-item index="created">我创建</el-menu-item>
              <el-menu-item index="solved">我解决</el-menu-item>
              <el-menu-item index="closed">我关闭</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学子成长</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="tasklists">任务管理</el-menu-item>
              <el-menu-item index="scheck">学生审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>志愿任务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="taskmanage">志愿任务管理</el-menu-item>
              <el-menu-item index="vcheck">志愿审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成长履历</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="growth">成长履历</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>待办事项</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="file">文档管理</el-menu-item>
              <el-menu-item index="image">图片管理</el-menu-item>
              <el-menu-item index="ad">广告管理</el-menu-item>
              <el-menu-item index="article">文章管理</el-menu-item>
              <el-menu-item index="menu">公众号菜单栏</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理报表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="visitors">访客列表</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="student">学生管理</el-menu-item>
              <el-menu-item index="user">用户名单</el-menu-item>
              <el-menu-item index="log">管理日志</el-menu-item>
              <el-menu-item index="code">基本代码</el-menu-item>
              <el-menu-item index="setting">参数配置</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!--中间内容-->
      <el-main>
        <!--路由占位符-->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    loginout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    }
  }
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-main {
}
.el-header {
  background-color: #75b2ef;
  display: flex;
  justify-content: space-between;
  padding-bottom: 0;
  color: white;
  align-items: center;
  font-size: 20px;
  > div {
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
    }
  }
}
.el-aside {
  display: block;
  overflow-y: scroll;
  .el-menu {
    border-right: none;
  }
}
.el-aside::-webkit-scrollbar {
  width: 0;
}
</style>
