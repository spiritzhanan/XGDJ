<template>
  <el-container class="home_container">
    <el-header>
      <div class="header">
        <div class="icon">
          <i class="el-icon-s-home"></i>
        </div>
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
                <el-dropdown-item command="changepassword"
                  >修改密码</el-dropdown-item
                >
                <el-dropdown-item divided command="loginOut"
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
          :unique-opened="true"
          :collapse-transition="false"
          router
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-s-promotion"></i>
              <span>待办事项</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="dispatch"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>派给我</span>
                </template></el-menu-item
              >
              <el-menu-item index="created"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>我创建</span>
                </template></el-menu-item
              >
              <el-menu-item index="solved"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>我解决</span>
                </template></el-menu-item
              >
              <el-menu-item index="closed"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>我关闭</span>
                </template></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-user-solid"></i>
              <span>学子成长</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="tasklists"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>任务管理</span>
                </template></el-menu-item
              >
              <el-menu-item index="scheck"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>学生审核</span>
                </template></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-s-flag"></i>
              <span>志愿任务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="taskmanage"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>志愿任务管理</span>
                </template></el-menu-item
              >
              <el-menu-item index="vcheck"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>志愿审核</span>
                </template></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-s-claim"></i>
              <span>成长履历</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="growth"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>成长履历</span>
                </template></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="5">
            <template slot="title">
              <i class="el-icon-s-help"></i>
              <span>网页管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="file"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>文档管理</span>
                </template></el-menu-item
              >
              <el-menu-item index="image"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>图片管理</span>
                </template></el-menu-item
              >
              <el-menu-item index="ad"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>广告管理</span>
                </template></el-menu-item
              >
              <el-menu-item index="article"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>文章管理</span>
                </template></el-menu-item
              >
              <el-menu-item index="menu"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>公众号菜单栏</span>
                </template></el-menu-item
              >
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="6">
            <template slot="title">
              <i class="el-icon-s-tools"></i>
              <span>系统管理</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="student"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>学生管理</span>
                </template></el-menu-item
              >
              <el-menu-item index="user"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>用户名单</span>
                </template></el-menu-item
              >
              <el-menu-item index="log"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>管理日志</span>
                </template></el-menu-item
              >
              <el-menu-item index="code"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>基本代码</span>
                </template></el-menu-item
              >
              <el-menu-item index="setting"
                ><template slot="title">
                  <i class="el-icon-menu"></i>
                  <span>参数配置</span>
                </template></el-menu-item
              >
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
    <!--修改密码弹出框-->
    <el-dialog
      title="修改密码"
      :visible.sync="changeDialogVisible"
      width="40%"
      center
    >
      <span slot="footer" class="dialog-footer">
        <el-form :model="changeForm" label-width="100px">
          <el-form-item label="请输入旧密码">
            <el-input
              v-model="changeForm.oldPassword"
              show-password
            ></el-input> </el-form-item
          ><el-form-item label="请输入新密码">
            <el-input
              v-model="changeForm.newPassword"
              show-password
            ></el-input> </el-form-item
          ><el-form-item label="请输入新密码">
            <el-input
              v-model="changeForm.newPassword2"
              show-password
            ></el-input>
          </el-form-item>
        </el-form>
        <el-button @click="changeDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="changePassword">确 定</el-button>
      </span>
    </el-dialog>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      changeForm: {
        oldPassword: "",
        newPassword: "",
        newPassword2: ""
      },
      adminid: "",
      changeDialogVisible: false
    };
  },
  computed: {
    username() {
      const username = window.sessionStorage.getItem("username");
      return username;
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginOut") {
        window.sessionStorage.clear();
        this.$router.push("/login");
      } else if (command == "changepassword") {
        this.changeDialogVisible = true;
      }
    },
    async changePassword() {
      this.adminid = window.sessionStorage.getItem("adminid");
      let params = {
        id: this.adminid,
        oldPassword: this.changeForm.oldPassword,
        newPassword: this.changeForm.newPassword
      };
      if (this.changeForm.newPassword === this.changeForm.newPassword2) {
        const { data: res } = await this.$http.put(
          "/updatePassword",
          this.$qs.stringify(params)
        );
        if (res.code !== 200) return this.$message.error("密码修改失败");
        this.$message.success("密码修改成功");
        window.sessionStorage.clear();
        this.$router.push("/login");
        this.changeDialogVisible = false;
      } else {
        this.$message.error("两次输入的新密码不一致");
      }
    }
  }
};
</script>

<style lang="less" scoped>
.home_container {
  height: 100%;
  /*头部样式*/
  .el-header {
    padding: 0;
    .header {
      /*头部样式*/
      position: relative;
      box-sizing: border-box;
      height: 60px;
      font-size: 22px;
      color: #fff;
      background-color: #b4c7ea;
      /*icon图标*/
      .icon {
        float: left;
        padding: 0 20px;
        cursor: pointer;
        line-height: 70px;
      }
      /*信工党建样式*/
      .logo {
        float: left;
        width: 250px;
        line-height: 70px;
      }
      /*右边用户相关样式*/
      .header-right {
        float: right;
        padding-right: 50px;
        /*用户信息区域*/
        .header-user-con {
          display: flex;
          height: 70px;
          align-items: center;
          /*下拉菜单*/
          .user-name {
            margin-left: 10px;
            /*下拉链接*/
            .el-dropdown-link {
              color: #ffffff;
              cursor: pointer;
            }
          }
        }
        /*用户头像*/
        .user-avator {
          margin-left: 20px;
          img {
            display: block;
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }
      }
    }
  }
  .el-container {
    height: calc(100% - 60px);
    /*内容区域*/
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
    /*导航栏样式*/
    .el-aside {
      display: block;
      overflow-x: hidden;
      .el-menu {
        border-right: none;
      }
    }
  }
}

/*导航栏样式*/
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.el-aside::-webkit-scrollbar {
  width: 0;
}

/*头像下拉相关样式*/
.el-dropdown-menu__item {
  text-align: center;
}
</style>
