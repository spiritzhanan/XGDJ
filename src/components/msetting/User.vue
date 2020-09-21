<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-input
          placeholder="请输入用户名称"
          clearable
          v-model="queryInfo.tasktitle"
        ></el-input>
        <el-input
          placeholder="请输入微信昵称"
          clearable
          v-model="queryInfo.tasktitle"
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
        <el-input
          placeholder="请输入电话号码"
          clearable
          v-model="queryInfo.publisher"
        >
        </el-input>

        <el-button type="primary">查询</el-button>
      </el-form>
    </el-card>
    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="编号" prop=""></el-table-column>
      <el-table-column label="用户代码 " prop=""></el-table-column>
      <el-table-column label="用户名称" prop=""></el-table-column>
      <el-table-column label="微信ID" prop=""></el-table-column>
      <el-table-column label="微信昵称" prop=""></el-table-column>
      <el-table-column label="角色名称" prop=""></el-table-column>
      <el-table-column label="电话手机" prop=""></el-table-column>
      <el-table-column label="QQ号码" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>
    <!--分页区域-->
    <el-pagination
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout="total, sizes, prev, pager, next, jumper"
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
        tasktitle: "",
        publisher: "",
        college: "",
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 2
      },
      input1: "",
      input4: "",
      taskLists: [],
      total: 0,
      options: [
        {
          value: "选项1",
          label: "黄金糕"
        },
        {
          value: "选项2",
          label: "双皮奶"
        }
      ],
      value: "",
      token: ""
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
  .el-select {
    width: 200px;
    margin: 10px;
  }
}
</style>
