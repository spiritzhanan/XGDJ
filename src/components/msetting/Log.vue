<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>日志管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-row>
          <el-col :span="22">
            <el-input
              placeholder="请输入程序名称"
              clearable
              v-model="queryInfo.snumber"
            ></el-input
            ><el-input
              placeholder="请输入单据编号"
              clearable
              v-model="queryInfo.snumber"
            ></el-input>

            <el-input
              placeholder="请输入动作名称"
              clearable
              v-model="queryInfo.snumber"
            >
            </el-input>
            <el-input
              placeholder="请输入用户名称"
              clearable
              v-model="queryInfo.snumber"
            ></el-input>
            <el-date-picker
              type="datetime"
              placeholder="请选择希望完成日期时间"
              v-model="queryInfo.snumber"
            ></el-date-picker>
            <el-date-picker
              type="datetime"
              placeholder="请选择希望完成日期时间"
              v-model="queryInfo.snumber"
            ></el-date-picker>
          </el-col>
          <el-col :span="2">
            <el-button type="primary">查询</el-button>
          </el-col>
        </el-row>
      </el-form>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column label="程序名称" prop=""></el-table-column>
      <el-table-column label="单据编号" prop=""></el-table-column>
      <el-table-column label="动作名称" prop=""></el-table-column>
      <el-table-column label="用户代码" prop=""></el-table-column>
      <el-table-column label="用户名称" prop=""></el-table-column>
      <el-table-column label="操作时间" prop=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskLists: [],
      queryInfo: {
        snumber: ""
      }
    };
  }
};
</script>

<style lang="less" scoped>
.query {
  .el-input,
  .el-date-picker {
    width: 250px;
    margin: 10px;
  }
}
</style>
