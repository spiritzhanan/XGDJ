<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>志愿任务</el-breadcrumb-item>
      <el-breadcrumb-item>志愿审核</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-input
          placeholder="请输入学生姓名"
          clearable
          v-model="queryInfo.username"
        ></el-input>
        <el-input
          placeholder="请输入学生学号"
          clearable
          v-model="queryInfo.snumber"
        >
        </el-input>
        <el-input
          placeholder="请输入学生电话"
          clearable
          v-model="queryInfo.phone"
        ></el-input>
        <el-input
          placeholder="请输入任务状态"
          clearable
          v-model="queryInfo.state"
        >
        </el-input>

        <el-button type="primary" @click="">查询</el-button>
      </el-form>

      <el-button type="success">新增</el-button>
      <el-button type="info">删除</el-button>
      <el-button type="danger">已完成</el-button>
      <el-button type="danger">缺席</el-button>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="vchecks" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="任务编号" prop="number"></el-table-column>
      <el-table-column label="用户编号" prop="number"></el-table-column>
      <el-table-column label="学生学号" prop="snumber"></el-table-column>
      <el-table-column label="学生姓名 " prop="username"></el-table-column>
      <el-table-column label="学生电话 " prop="phone"></el-table-column>
      <el-table-column
        label="任务接收时间"
        width="100"
        prop="examinetime"
      ></el-table-column>
      <el-table-column
        label="任务审核时间 "
        width="100"
        prop="endtime"
      ></el-table-column>
      <el-table-column label="审核人" prop=""></el-table-column>
      <el-table-column label="任务状态" prop=""></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      :current-page="queryInfo.pagenum"
      :page-size="queryInfo.pagesize"
      layout="total,  prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        number: "",
        snumber: "",
        username: "",
        phone: "",
        examinetime: "",
        endtime: "",
        query: "",
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 6
      },
      vchecks: [],
      total: 0
    };
  },
  mounted() {
    this.getVcheck();
  },
  methods: {
    async getVcheck() {
      const { data: res } = await this.$http.get("/Task/getTaskByLike", {
        params: this.queryInfo
      });
      if (res.code !== 200) {
        this.$message.info("获取数据失败");
      }
      console.log(res);
      this.total = res.data.total;
      this.vchecks = res.data.list;
    }
  }
};
</script>

<style lang="less" scoped>
.query {
  .el-input {
    width: 160px;
    margin: 5px;
  }
  .el-select {
    width: 160px;
    margin: 10px;
  }
}
.btns {
  position: relative;
  top: 9.5px;
  left: -12px;
}
</style>
