<template>
  <el-container class="home_container">
    <!--头部组件-->
    <!-- <el-header>
      <div>
        <span>信工党建</span>
      </div>
      <el-button type="info" @click="loginout">退出</el-button>
    </el-header>-->
    <el-header>
      <div class="header">
        <!-- 折叠按钮 -->
        <div class="logo">信工党建</div>
        <div class="header-right">
          <div class="header-user-con">
            <!-- 用户头像 -->
            <div class="user-avator">
              <img src="../assets/imgs/welcome.jpg" />
            </div>
            <!-- 用户名下拉菜单 -->
            <el-dropdown
              class="user-name"
              trigger="click"
              @command="handleCommand"
            >
              <span class="el-dropdown-link">
                {{ username }}
                <i class="el-icon-caret-bottom"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>修改密码</el-dropdown-item>
                <el-dropdown-item divided command="loginout"
                  >退出登录</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
    </el-header>
    <el-container>
      <!--左侧菜单栏目-->
      <el-aside width="200px">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
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
              <el-menu-item index="visitors">访客明细</el-menu-item>
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
    return {
      menulist: [],
      collapse: false,
      fullscreen: false,
      message: 2
    };
  },
  computed: {
    username() {
      const username = window.sessionStorage.getItem("username");
      return username;
    }
  },
  /* created () {
        this.getMenuList()
      },*/
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("username");
        this.$router.push("/login");
      }
    },
    loginout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    handleOpen(key, keyPath) {
      return 0;
    },
    handleClose(key, keyPath) {
      return 0;
    }
  }
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
}
.el-container {
  height: calc(100% - 60px);
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-main {
  position: absolute;
  left: 210px;
  right: 0;
  top: 80px;
  bottom: 0;
  padding-top: 30px;
  padding-left: 30px;
  background: #f0f0f0;
}

.el-aside {
  display: block;
  /*overflow-x: hidden;*/
  /*overflow-y: hidden;*/
  .el-menu {
    border-right: none;
  }
}
.el-aside::-webkit-scrollbar {
  width: 0;
}

.el-header {
  padding: 0;
}
.header {
  position: relative;
  box-sizing: border-box;
  height: 60px;
  font-size: 22px;
  color: #fff;
  background-color: #b4c7ea;
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}

.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #ffffff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
