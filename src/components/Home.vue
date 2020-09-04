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
          @open="handleOpen"
          @close="handleClose"
          :unique-opened="true"
          :collapse="isCollapse"
          :collapse-transition="false"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>待办事项</span>
            </template>
            <el-menu-item-group>
              <router-link to="/created"
                ><el-menu-item index="1-1">新建</el-menu-item></router-link
              >
              <router-link to="/dispatch"
                ><el-menu-item index="1-2">派给我</el-menu-item></router-link
              >
              <router-link to="/created"
                ><el-menu-item index="1-3">我创建</el-menu-item></router-link
              >
              <router-link to="/solved"
                ><el-menu-item index="1-4">我解决</el-menu-item></router-link
              >
              <router-link to="/closed"
                ><el-menu-item index="1-5">我关闭</el-menu-item></router-link
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>学子成长</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">任务管理</el-menu-item>
              <el-menu-item index="2-2">学生审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>志愿任务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">志愿任务管理</el-menu-item>
              <el-menu-item index="3-2">志愿审核</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>成长履历</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">成长履历</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>待办事项</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="5-1">文档管理</el-menu-item>
              <el-menu-item index="5-2">图片管理</el-menu-item>
              <el-menu-item index="5-3">广告管理</el-menu-item>
              <el-menu-item index="5-4">文章管理</el-menu-item>
              <el-menu-item index="5-5">公众号菜单栏</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>管理报表</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="6-1">访客明细</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="7">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="7-1">学生管理</el-menu-item>
              <el-menu-item index="7-2">用户名单</el-menu-item>
              <el-menu-item index="7-3">管理日志</el-menu-item>
              <el-menu-item index="7-4">基本代码</el-menu-item>
              <el-menu-item index="7-5">参数配置</el-menu-item>
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
      /* // 左侧菜单数据
        menulist: [],
        // 是否折叠
        isCollapse: false*/
    };
  },
  /* created () {
      this.getMenuList()
    },*/
  methods: {
    /* // 获取所有菜单
      async getMenuList () {
        const { data: result } = await this.$http.get('menus')
        if (result.meta.status !== 200) return this.$message.error(result.meta.msg)
        this.menulist = result.data
        console.log(result)
      },
      */
    loginout() {
      window.sessionStorage.clear();
      this.$router.push("/login");
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
</style>
