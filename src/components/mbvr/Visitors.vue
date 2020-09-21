<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理报表</el-breadcrumb-item>
      <el-breadcrumb-item>访客明细表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-input
          placeholder="请输入会话ID"
          clearable
          v-model="queryInfo.tasktitle"
        ></el-input>
        <el-input
          placeholder="请输入访客IP"
          clearable
          v-model="queryInfo.tasktitle"
        ></el-input>

        <el-input
          placeholder="请输入起始日期"
          clearable
          v-model="queryInfo.publisher"
        >
        </el-input
        ><el-input
          placeholder="请输入终止日期"
          clearable
          v-model="queryInfo.publisher"
        >
        </el-input>

        <el-button type="primary">查询</el-button>
      </el-form>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column label="序号" prop=""></el-table-column>
      <el-table-column label="访问时间" prop=""></el-table-column>
      <el-table-column label="访客IP" prop=""></el-table-column>
      <el-table-column label="访客主机" prop=""></el-table-column>
      <el-table-column label="会话ID" prop=""></el-table-column>
      <el-table-column label="前一页面" prop=""></el-table-column>
      <el-table-column label="当前页面" prop=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskLists: [],
      queryInfo: {
        tasktitle: "",
        publisher: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
.query {
  .el-input {
    width: 200px;
    margin: 10px;
  }
}
</style>
