<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网页管理</el-breadcrumb-item>
      <el-breadcrumb-item>文章管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-button type="primary">新增</el-button>
    <el-button type="primary">新增腾讯视频</el-button>
    <el-button type="primary">多图片上传</el-button>
    <el-button type="primary">导入文档</el-button>
    <el-button type="primary">发布电脑版</el-button>
    <el-button type="primary">发布移动版</el-button>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column label="所属栏目" prop=""></el-table-column>
      <el-table-column label="标题" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column label="文章日期" prop=""></el-table-column>
      <el-table-column label="任务对象" prop=""></el-table-column>
      <el-table-column label="移动端网址" prop=""></el-table-column>
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
