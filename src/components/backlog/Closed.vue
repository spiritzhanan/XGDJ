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
    <el-table :data="closeList" border stripe>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="任务状态" prop="resolver"></el-table-column>
      <el-table-column label="任务类型" prop="tasktype"></el-table-column>
      <el-table-column label="任务标题" prop="srole"></el-table-column>
      <el-table-column label="希望完成日期" prop="role"></el-table-column>
      <el-table-column label="指派给" prop="closeperson"></el-table-column>
      <el-table-column label="创建人" prop="tasktitle"></el-table-column>
      <el-table-column label="解决人" prop="endtime"></el-table-column>
      <el-table-column label="关闭人" prop="publisher"></el-table-column>
      <el-table-column label="状态" prop="state"></el-table-column>
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
      closeList: [],
      id: "",
      total: 0
    };
  },
  created() {
    this.id = window.sessionStorage.getItem("adminid");
    this.token = window.sessionStorage.getItem("token");
    this.getCloseLists();
  },
  methods: {
    //获取派给我
    async getCloseLists() {
      const { data: res } = await this.$http.get("/Task/myClose", {
        params: { id: this.id }
      });
      if (res.code !== "200") {
        return this.$message.error("获取列表失败");
      }
      this.closeList = res.data.tasks;
    }
  }
};
</script>

<style lang="less" scoped></style>
