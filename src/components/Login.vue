<template>
  <div>
    <el-container>
      <!-- 头部-->
      <el-header>
        <img src="../assets/imgs/gnyxy.png" />
      </el-header>
      <!-- 中间部分-->
      <el-main>
        <el-form
          ref="loginFormRef"
          class="login_form"
          :model="loginForm"
          :rules="loginFormRules"
        >
          <el-form-item prop="username">
            <el-input
              placeholder="请输入用户名"
              prefix-icon="el-icon-user"
              v-model="loginForm.username"
              clearable
            ></el-input>
          </el-form-item>

          <el-form-item prop="password">
            <el-input
              placeholder="请输入密码"
              v-model="loginForm.password"
              prefix-icon="el-icon-lock"
              show-password
            ></el-input>
          </el-form-item>

          <el-form-item prop="identify">
            <el-row :gutter="18">
              <el-col :span="15">
                <el-input
                  placeholder="请选输入验证码"
                  v-model="loginForm.identify"
                  prefix-icon="el-icon-chat-dot-square"
                ></el-input>
              </el-col>
              <el-col :span="9">
                <div @click="refreshCode">
                  <Identify :identifyCode="identifyCode"></Identify>
                </div>
              </el-col>
            </el-row>
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
                @click="resetLoginForm"
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
import Identify from "../components/Identity";
export default {
  data() {
    return {
      loginForm: {
        username: "admin",
        password: "0000",
        identify: ""
      },
      identifyCodes: "1234567890",
      identifyCode: "",
      //表单验证规则对象
      loginFormRules: {
        //验证用户名是否合法
        username: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          {
            min: 3,
            max: 10,
            message: "用户名在 3 到 10 个字符之间",
            trigger: "blur"
          }
        ],
        //验证密码是否合法
        password: [
          { required: true, message: "请输入登录密码", trigger: "blur" },
          {
            min: 4,
            max: 15,
            message: "密码在 4 到 15 个字符之间",
            trigger: "blur"
          }
        ],
        //验证验证码是否合法
        identify: [{ required: true, message: "请输入验证码", trigger: "blur" }]
      }
    };
  },

  components: {
    Identify
  },
  mounted() {
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
  },
  methods: {
    //重置表单
    resetLoginForm() {
      this.$refs.loginFormRef.resetFields();
    },

    //登录预验证
    login() {
      if (
        this.loginForm.identify.toLowerCase() !==
        this.identifyCode.toLowerCase()
      ) {
        this.$message.error("请填写正确验证码");
        this.refreshCode();
        return;
      }
      this.$refs.loginFormRef.validate(async valid => {
        if (!valid) return;
        const { data: res } = await this.$http.post("login", {
          number: this.loginForm.username,
          password: this.loginForm.password
        });
        console.log(res);
        if (res.code !== "200") return this.$message.error("登录失败");
        this.$message.success("登录成功");
        window.sessionStorage.setItem("token", res.data.token);
        this.$router.push("/home");
      });
    },

    //验证码
    randomNum(min, max) {
      return Math.floor(Math.random() * (max - min) + min);
    },
    refreshCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    makeCode(o, l) {
      for (let i = 0; i < l; i++) {
        this.identifyCode += this.identifyCodes[
          this.randomNum(0, this.identifyCodes.length)
        ];
      }
      console.log(this.identifyCode);
    }
  }
};
</script>

<style lang="less" scoped>
.el-header {
  margin-top: 3%;
}
.login_form {
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12), 0 0 6px rgba(0, 0, 0, 0.04);
  width: 300px;
  margin-top: 5%;
  margin-left: 35%;
  padding: 40px;
}
.el-input {
  height: 43.3px;
}
.el-button {
  width: 140px;
  margin-left: 5px;
}

.el-button + .el-button {
  margin-left: 10px;
}

#gnyxyImg {
  width: 200px;
  height: 100px;
}
.el-footer {
  margin: auto;
}
</style>
