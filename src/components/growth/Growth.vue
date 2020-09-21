<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成长履历</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-input
          placeholder="请输入学生学号"
          clearable
          v-model="queryInfo.tasktitle"
        ></el-input>
        <el-input
          placeholder="请输入学生姓名"
          clearable
          v-model="queryInfo.tasktitle"
        ></el-input>

        <el-input
          placeholder="请输入发生时间"
          clearable
          v-model="queryInfo.publisher"
        >
        </el-input
        ><el-input
          placeholder="请输入来源类型"
          clearable
          v-model="queryInfo.publisher"
        >
        </el-input>

        <el-button type="primary">查询</el-button>
      </el-form>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column label="学生学号" prop=""></el-table-column>
      <el-table-column label="学生姓名" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column label="发生时间" psrop=""></el-table-column>
      <el-table-column label="来源类型" prop=""></el-table-column>
      <el-table-column label="来源单据编号" prop=""></el-table-column>
      <el-table-column label="变更类型" prop=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        tasktitle: "",
        publisher: ""
      },
      taskLists: []
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
