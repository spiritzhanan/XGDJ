<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网页管理</el-breadcrumb-item>
      <el-breadcrumb-item>图片管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary">根目录</el-button>
    <el-button type="primary">返回</el-button>
    <el-button type="primary">新建文件夹</el-button>
    <el-button type="primary">上传图片</el-button>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
