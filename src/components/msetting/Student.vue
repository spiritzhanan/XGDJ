<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>学生名单</el-breadcrumb-item>
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
        <el-select v-model="queryInfo.college" clearable placeholder="请选班级">
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
        <el-select v-model="queryInfo.srole" clearable placeholder="请选择身份">
          <el-option label="普通群众" value="普通群众"></el-option>
          <el-option label="入党申请人" value="入党申请人"></el-option>
          <el-option label="入党积极分子" value="入党积极分子"></el-option>
          <el-option label="发展对象" value="发展对象"></el-option>
          <el-option label="预备党员" value="预备党员"></el-option>
          <el-option label="正式党员" value="正式党员"></el-option>
          <el-option label="管理员" value="管理员"></el-option>
        </el-select>
        <el-input
          placeholder="请输入电话"
          clearable
          v-model="queryInfo.publisher"
        >
        </el-input>
        <el-button type="primary">查询</el-button>
      </el-form>
      <el-button type="primary">新增</el-button>
      <el-button type="danger">删除</el-button>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="学生学号" prop=""></el-table-column>
      <el-table-column label="学生姓名 " prop=""></el-table-column>
      <el-table-column label="性别" prop=""></el-table-column>
      <el-table-column label="年龄" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column label="年级" prop=""></el-table-column>
      <el-table-column label="班级" prop=""></el-table-column>
      <el-table-column label="身份" prop=""></el-table-column>
      <el-table-column label="电话" prop=""></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
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
        college: "",
        publisher: "",
        srole: ""
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
  .el-select {
    width: 200px;
    margin: 10px;
  }
}
</style>
