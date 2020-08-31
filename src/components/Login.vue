<template>
  <div>
    <el-container>
      <!-- 头部-->
      <el-header style="height: 100px;margin-top: 3%">
        <img src="../assets/imgs/gnyxy.png" />
        <!--        <el-image id="gnyxyImg" :src="gnyxySrc" fit="contain"></el-image>-->
      </el-header>
      <!-- 中间部分-->
      <el-main>
        <el-form>
          <el-form-item>
            <el-input
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              v-model="username"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              placeholder="请输入密码"
              v-model="password"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item>
            <el-input
              id="identify"
              placeholder="请选输入验证码"
              v-model="identify"
              prefix-icon="el-icon-chat-dot-square"
              clearable
            ></el-input>
            <el-image id="identifyImg" :src="src"></el-image>
          </el-form-item>

          <el-row>
            <el-col :span="24">
              <el-button
                type="primary"
                icon="el-icon-s-promotion"
                size="medium"
                @click="login"
                >登录
              </el-button>
              <el-button
                type="primary"
                icon="el-icon-refresh-right"
                size="medium"
                @click="clear"
                >重置
              </el-button>
            </el-col>
          </el-row>
        </el-form>
      </el-main>

      <!--底部-->
      <el-footer>
        <h3>赣南医学院</h3>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src:
        "https://cube.elemecdn.com/6/94/4d3ea53c084bad6931a56d5158a48jpeg.jpeg",
      username: "",
      password: "",
      identify: ""
    };
  },
  methods: {
    login() {
      this.$router.push("/home");
    },
    clear() {
      this.username = "";
      this.password = "";
      this.identify = "";
    }
  }
};
</script>

<style>
.el-form {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 300px;
  left: 50%;
  margin-left: 35%;
  padding: 40px;
}

#identify {
  width: 200px;
}

.el-image {
  display: inline;
}

.el-button {
  margin-left: 50px;
}

.el-button + .el-button {
  margin-left: 20px;
}

#gnyxyImg {
  width: 200px;
  height: 100px;
}

#identifyImg {
  width: 90px;
  height: 39px;
  position: absolute;
  top: -13.5px;
  right: 0;
}

.el-footer {
  margin: auto;
}
</style>
