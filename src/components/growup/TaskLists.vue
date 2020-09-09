<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学子成长</el-breadcrumb-item>
      <el-breadcrumb-item>任务管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!--查询输入框-->
    <el-row>
      <el-col :span="18">
        <el-form class="query">
          <el-input
            placeholder="请输入任务名"
            v-model="queryInfo.tasktitle"
          ></el-input>
          <el-select v-model="queryInfo.srole" placeholder="请选择任务对象">
            <el-option label="普通群众" value="普通群众"></el-option>
            <el-option label="入党申请人" value="入党申请人"></el-option>
            <el-option label="入党积极分子" value="入党积极分子"></el-option>
            <el-option label="发展对象" value="发展对象"></el-option>
            <el-option label="预备党员" value="预备党员"></el-option>
            <el-option label="正式党员" value="正式党员"></el-option>
            <el-option label="管理员" value="管理员"></el-option>
          </el-select>
          <el-input placeholder="请输入发布人" v-model="queryInfo.publisher">
          </el-input>
          <el-select v-model="queryInfo.state" placeholder="请选择任务状态">
            <el-option label="显示" value="显示"></el-option>
            <el-option label="隐藏" value="隐藏"></el-option>
          </el-select>
          <el-button type="primary" @click="getTaskList()">查询</el-button>
        </el-form>
      </el-col>
      <el-col :span="2" class="query">
        <el-button type="info">删除</el-button>
      </el-col>
    </el-row>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="任务编号" prop="number"></el-table-column>
      <el-table-column label="任务类型" prop="tasktype"></el-table-column>
      <el-table-column label="任务名" prop="tasktitle"></el-table-column>
      <el-table-column label="任务对象" prop="srole"></el-table-column>
      <el-table-column
        label="任务开始时间"
        prop="starttime"
        width="100"
      ></el-table-column>
      <el-table-column
        label="任务结束时间"
        prop="endtime"
        width="100"
      ></el-table-column>
      <el-table-column label="发布人" prop="publisher"></el-table-column>
      <el-table-column label="发布时间" prop="releasetime"></el-table-column>
      <el-table-column label="任务状态" prop="state"></el-table-column>
      <el-table-column label="操作" width="250"></el-table-column>
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
        srole: "",
        publisher: "",
        tasktype: "",
        state: "",
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 2
      },
      taskLists: {},
      total: 0,
      value: ""
    };
  },
  mounted() {
    this.getTaskList();
  },
  methods: {
    async getTaskList(queryInfo) {
      queryInfo = this.queryInfo;
      const res = await this.$http.get("/Task/getTaskBySearch", queryInfo);
      this.taskLists = res.list;
    }
  }
};
</script>

<style lang="less" scoped>
.el-input {
  width: 150px;
  margin: 10px;
}
.el-select {
  width: 150px;
  margin: 10px;
}
.query {
  line-height: 60px;
}
</style>
