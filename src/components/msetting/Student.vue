<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>系统管理</el-breadcrumb-item>
      <el-breadcrumb-item>学生名单</el-breadcrumb-item>
    </el-breadcrumb>
    <!--查询输入框-->
    <el-form>
      用户名称<el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      微信昵称<el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      所属学院
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      电话号码<el-input placeholder="请输入内容" v-model="input4"> </el-input>
      <el-button type="primary">查询</el-button>
    </el-form>
    <el-button type="primary">新增</el-button>
    <el-button type="danger">删除</el-button>
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
      input1: "",
      input4: "",
      taskLists: [],
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
.el-input {
  width: 120px;
  margin: 10px;
}
.el-select {
  width: 120px;
  margin: 10px;
}
</style>
