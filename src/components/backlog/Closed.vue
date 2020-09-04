<template>
  <div></div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped></style>
<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>待办事项</el-breadcrumb-item>
      <el-breadcrumb-item>我关闭</el-breadcrumb-item>
    </el-breadcrumb>

    <!--用户列表区域-->
    <el-table :data="userList" border stripe>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="任务状态" prop=""></el-table-column>
      <el-table-column label="任务类型" prop=""></el-table-column>
      <el-table-column label="任务标题" prop=""></el-table-column>
      <el-table-column label="希望完成日期" prop=""></el-table-column>
      <el-table-column label="指派给" prop=""></el-table-column>
      <el-table-column label="创建人" prop=""></el-table-column>
      <el-table-column label="解决人" prop=""></el-table-column>
      <el-table-column label="关闭人" prop=""></el-table-column>
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
        query: "",
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 2
      },
      userList: [],
      total: 0,
      //空盒子添加用户的显示与隐藏
      addDialogVisible: false,
      //添加用户的表单数据
      addForm: {
        username: "",
        password: "",
        email: "",
        mobile: ""
      }
    };
  },
  methods: {
    //监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    }
  }
};
</script>

<style lang="less" scoped></style>
