<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成长履历</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-row>
        <el-col :span="19">
          <el-form class="query">
            <el-input
              placeholder="请输入任务名"
              clearable
              v-model="queryInfo.tasktitle"
            ></el-input>
            <el-select
              v-model="queryInfo.srole"
              clearable
              placeholder="请选择任务对象"
            >
              <el-option label="普通群众" value="普通群众"></el-option>
              <el-option label="入党申请人" value="入党申请人"></el-option>
              <el-option label="入党积极分子" value="入党积极分子"></el-option>
              <el-option label="发展对象" value="发展对象"></el-option>
              <el-option label="预备党员" value="预备党员"></el-option>
              <el-option label="正式党员" value="正式党员"></el-option>
              <el-option label="管理员" value="管理员"></el-option>
            </el-select>
            <el-input
              placeholder="请输入发布人"
              clearable
              v-model="queryInfo.publisher"
            >
            </el-input>
            <el-select
              v-model="queryInfo.state"
              clearable
              placeholder="请选择任务状态"
            >
              <el-option label="显示" value="显示"></el-option>
              <el-option label="隐藏" value="隐藏"></el-option>
            </el-select>
            <el-button type="primary" @click="getTaskList">查询</el-button>
          </el-form>
        </el-col>
        <el-col :span="5">
          <el-button type="success" @click="publishTask">发布任务</el-button>
          <el-button type="info" @click="delAll">删除</el-button>
        </el-col>
      </el-row>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column label="学生学号" prop=""></el-table-column>
      <el-table-column label="学生姓名" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column label="发生时间" psrop=""></el-table-column>
      <el-table-column label="来源类型" prop=""></el-table-column>
      <el-table-column label="来源单据编号" prop=""></el-table-column>
      <el-table-column label="变更类型" prop=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      taskLists: [],
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
