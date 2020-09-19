<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>志愿任务</el-breadcrumb-item>
      <el-breadcrumb-item>志愿任务管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!--查询输入框-->
    <el-row>
      <el-col :span="19">
        <el-form class="query">
          <el-input
            placeholder="请输入志愿名"
            clearable
            v-model="queryInfo.tasktitle"
          ></el-input>
          <el-input
            placeholder="请输入报名联系人"
            clearable
            v-model="queryInfo.publisher"
          >
          </el-input>
          <el-select
            v-model="queryInfo.college"
            clearable
            placeholder="请选择发布学院"
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
            v-model="queryInfo.state"
            clearable
            placeholder="请选择任务状态"
          >
            <el-option label="报名中" value="报名中"></el-option>
            <el-option label="报名进行中" value="报名进行中"></el-option>
            <el-option label="进行中" value="进行中"></el-option>
            <el-option label="已结束" value="已结束"></el-option>
          </el-select>
          <el-button type="primary" @click="">查询</el-button>
        </el-form>
      </el-col>
      <el-col :span="5" class="btns">
        <el-button type="success" @click="">新增</el-button>
        <el-button type="info">删除</el-button>
      </el-col>
    </el-row>
    <!--用户列表区域-->
    <el-table :data="taskManage" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="任务编号" prop="number"></el-table-column>
      <el-table-column label="志愿名" prop="volunteername"></el-table-column>
      <!--  <el-table-column label="志愿时长" prop=""></el-table-column>-->
      <el-table-column label="所需人数" prop="neednum"></el-table-column>
      <el-table-column label="报名人数 " prop="applicantsnum"></el-table-column>
      <!--  <el-table-column label="报名联系人" prop="number"></el-table-column>-->
      <el-table-column
        label="报名联系电话 "
        width="100"
        prop="cphone"
      ></el-table-column>
      <el-table-column label="发布人" prop="publisher"></el-table-column>
      <el-table-column label="所属学院" prop="college"></el-table-column>
      <el-table-column label="发布时间 " prop="vtime"></el-table-column>
      <el-table-column label="任务状态 " prop="vstate"></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      :current-page="queryInfo.pagenum"
      :page-size="queryInfo.pagesize"
      layout="total, prev, pager, next, jumper"
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
        volunteername: "",
        neednum: "",
        applicantsnum: "",
        cphone: "",
        publisher: "",
        college: "",
        vtime: "",
        vstate: "",
        query: "",
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 6
      },
      taskManage: [],
      total: 0
    };
  },

  mounted() {
    this.getTaskManage();
  },
  methods: {
    async getTaskManage() {
      const { data: res } = await this.$http.get("/Volunteer/findBySearch", {
        params: this.queryInfo
      });
      if (res.code !== 200) {
        this.$message.info("获取数据失败");
      }
      console.log(res);
      this.total = res.data.total;
      this.taskManage = res.data.list;
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
