<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>志愿任务</el-breadcrumb-item>
      <el-breadcrumb-item>志愿任务管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!--查询输入框-->
    <el-form>
      志愿名<el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      报名联系人<el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      发布学院<el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      任务状态
      <el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input4"
      >
      </el-input>

      <el-button type="primary">查询</el-button>
    </el-form>
    <el-button type="danger">新增</el-button>
    <el-button type="danger">删除</el-button>
    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="任务编号" prop="number"></el-table-column>
      <el-table-column label="志愿名" prop="tasktype"></el-table-column>
      <el-table-column label="志愿时长" prop=""></el-table-column>
      <el-table-column label="所需人数" prop=""></el-table-column>
      <el-table-column label="报名人数 " prop=""></el-table-column>
      <el-table-column label="报名联系人" prop="number"></el-table-column>
      <el-table-column
        label="报名联系电话 "
        width="100"
        prop="tasktype"
      ></el-table-column>
      <el-table-column label="发布人" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column label="发布时间 " prop=""></el-table-column>
      <el-table-column label="任务状态 " prop=""></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      :current-page="queryInfo.pagenum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pagesize"
      layout=" sizes, prev, pager, next, jumper"
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
      taskLists: [],
      input1: "",
      input4: "",
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
  width: 150px;
  margin: 10px;
}
.el-select {
  width: 150px;
  margin: 10px;
}
</style>
