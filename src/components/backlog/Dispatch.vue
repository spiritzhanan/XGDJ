<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>待办事项</el-breadcrumb-item>
      <el-breadcrumb-item>派给我</el-breadcrumb-item>
    </el-breadcrumb>

    <!--用户列表区域-->
    <el-table :data="dispatchLists" border stripe>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="任务状态" prop="state"></el-table-column>
      <el-table-column label="任务类型" prop="tasktype"></el-table-column>
      <el-table-column label="任务标题" prop="tasktitle"></el-table-column>
      <el-table-column label="希望完成日期" prop="endtime"></el-table-column>
      <el-table-column label="指派给" prop="srole"></el-table-column>
      <el-table-column label="创建人" prop="role"></el-table-column>
      <el-table-column label="解决人" prop="resolver"></el-table-column>
      <el-table-column label="关闭人" prop="closeperson"></el-table-column>
    </el-table>

    <!--分页-->
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
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 2
      },
      dispatchLists: [],
      total: 0,
      id: ""
    };
  },
  created() {
    this.id = window.sessionStorage.getItem("adminid");
    this.getDispatchLists();
  },
  methods: {
    //获取派给我
    async getDispatchLists() {
      const { data: res } = await this.$http.get("/Task/sentMe", {
        params: { id: this.id }
      });
      if (res.code !== 200) {
        return this.$message.error("获取列表失败");
      }
      this.dispatchLists = res.data.list;
    }
  }
};
</script>

<style lang="less" scoped></style>
