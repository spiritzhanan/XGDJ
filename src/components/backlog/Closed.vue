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
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-size="pagesize"
      layout="total,prev, pager, next,jumper"
      :total="total"
      background
    ></el-pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      //当前页码数
      pagenum: 1,
      //每页展示数
      pagesize: 5,
      closeList: [],
      id: "",
      total: 0
    };
  },
  created() {
    this.id = window.sessionStorage.getItem("adminid");
    this.getCloseLists();
  },
  methods: {
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getCloseLists();
    },
    //获取派给我
    async getCloseLists() {
      const { data: res } = await this.$http.get("/Task/myClose", {
        params: { id: this.id, pageNum: this.pagenum, pageSize: this.pagesize }
      });
      if (res.code !== 200) {
        return this.$message.error("获取列表失败");
      }
      this.total = res.data.total;
      this.closeList = res.data.list;
    }
  }
};
</script>

<style lang="less" scoped></style>
