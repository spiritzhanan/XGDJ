<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理报表</el-breadcrumb-item>
      <el-breadcrumb-item>访客明细表</el-breadcrumb-item>
    </el-breadcrumb>
    Visitor
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
