<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网页管理</el-breadcrumb-item>
      <el-breadcrumb-item>广告管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-input
          placeholder="请输入编号"
          clearable
          v-model="queryInfo.tasktitle"
        ></el-input>
        <el-input
          placeholder="请输入广告类型"
          clearable
          v-model="queryInfo.tasktitle"
        ></el-input>

        <el-input
          placeholder="请输入显示顺序"
          clearable
          v-model="queryInfo.publisher"
        >
        </el-input
        ><el-input
          placeholder="请输入标题"
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
      <el-table-column label="单据编号" prop=""></el-table-column>
      <el-table-column label="广告类型" prop=""></el-table-column>
      <el-table-column label="显示顺序" prop=""></el-table-column>
      <el-table-column label="标题" prop=""></el-table-column>
      <el-table-column label="图片" prop=""></el-table-column>
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
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 2
      },
      taskLists: [],
      total: 0
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
}
</style>
