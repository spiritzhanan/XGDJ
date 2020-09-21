<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学子成长</el-breadcrumb-item>
      <el-breadcrumb-item>学生审核</el-breadcrumb-item>
    </el-breadcrumb>

    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-row>
          <el-col :span="22">
            <el-input
              placeholder="请输入学生学号"
              clearable
              v-model="queryInfo.snumber"
            ></el-input>
            <el-select
              v-model="queryInfo.college"
              clearable
              placeholder="请选择所属学院"
            >
              <el-option label="信息工程学院" value="信息工程学院"></el-option>
              <el-option label="药学院" value="药学院"></el-option>
              <el-option label="人文社科学院" value="人文社科学院"></el-option>
              <el-option label="第一临床学院" value="第一临床学院"></el-option>
              <el-option label="护理学院" value="护理学院"></el-option>
              <el-option label="康复学院" value="康复学院"></el-option>
              <el-option label="基础医学院" value="基础医学院"></el-option>
              <el-option label="马克思学院" value="马克思学院"></el-option>
              <el-option label="外国语学院" value="外国语学院"></el-option>
              <el-option label="赣南医学院" value="赣南医学院"></el-option>
            </el-select>
            <el-select
              v-model="queryInfo.srole"
              clearable
              placeholder="请选择身份"
            >
              <el-option label="普通群众" value="普通群众"></el-option>
              <el-option label="入党申请人" value="入党申请人"></el-option>
              <el-option label="入党积极分子" value="入党积极分子"></el-option>
              <el-option label="发展对象" value="发展对象"></el-option>
              <el-option label="预备党员" value="预备党员"></el-option>
              <el-option label="正式党员" value="正式党员"></el-option>
              <el-option label="管理员" value="管理员"></el-option>
            </el-select>
            <el-input
              placeholder="请输入电话号码"
              clearable
              v-model="queryInfo.phone"
            >
            </el-input>
            <el-input
              placeholder="请输入学生姓名"
              clearable
              v-model="queryInfo.username"
            ></el-input>
            <el-input
              placeholder="请输入所属班级"
              clearable
              v-model="queryInfo.userclass"
            >
            </el-input>
            <el-input
              placeholder="请输入年级"
              clearable
              v-model="queryInfo.grade"
            >
            </el-input>
            <el-select
              v-model="queryInfo.sex"
              clearable
              placeholder="请选择性别"
            >
              <el-option label="男" value="男"></el-option>
              <el-option label="女" value="女"></el-option>
            </el-select>
          </el-col>
          <el-col :span="2">
            <el-button type="primary" @click="getCheckList">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="checkLists" border stripe>
      <el-table-column label="任务编号" prop="unumber"></el-table-column>
      <el-table-column label="学生学号" prop="snumber"></el-table-column>
      <el-table-column label="学生姓名" prop="username"></el-table-column>
      <el-table-column label="性别" prop="sex"></el-table-column>
      <el-table-column label="年龄" prop="sage"></el-table-column>
      <el-table-column label="所属学院" prop="college"></el-table-column>
      <el-table-column label="年级" prop="grade"></el-table-column>
      <el-table-column label="身份" prop="srole"></el-table-column>
      <el-table-column label="电话" prop="phone"></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-size="queryInfo.pagesize"
      layout="total,prev, pager, next,jumper"
      :total="total"
      background
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkLists: [],
      queryInfo: {
        snumber: "",
        college: "",
        srole: "",
        phone: "",
        username: "",
        userclass: "",
        grade: "",
        sex: "",
        pageNum: 1,
        pageSize: 5
      },
      total: 0
    };
  },
  watch: {
    queryInfo: {
      handler: function(newVal, oldVal) {
        if (this.queryInfo == null) {
          console.log(this.queryInfo);
        } else {
          console.log(this.queryInfo);
        }
      },
      deep: true
    }
  },
  created() {
    this.getCheckList();
  },
  methods: {
    async getCheckList() {
      const { data: res } = await this.$http.get("/User/findUserBySearch", {
        params: this.queryInfo
      });
      console.log(res);
      if (res.code !== 200) {
        this.$message.info("获取数据失败");
      }
      this.total = res.data.total;
      this.checkLists = res.data.list;
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getCheckList();
    }
  }
};
</script>

<style lang="less" scoped>
.query {
  .el-input {
    width: 200px;
    margin: 10px;
  }
  .el-select {
    width: 200px;
    margin: 10px;
  }
}
</style>
