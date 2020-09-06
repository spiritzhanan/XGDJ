<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>管理报表</el-breadcrumb-item>
      <el-breadcrumb-item>访客明细表</el-breadcrumb-item>
    </el-breadcrumb>
    <!--查询输入框-->
    <el-form>
      会话ID<el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      访客IP<el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      日期起<el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      日期至
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-button type="primary">查询</el-button>
    </el-form>

    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column label="序号" prop=""></el-table-column>
      <el-table-column label="访问时间" prop=""></el-table-column>
      <el-table-column label="访客IP" prop=""></el-table-column>
      <el-table-column label="访客主机" prop=""></el-table-column>
      <el-table-column label="会话ID" prop=""></el-table-column>
      <el-table-column label="前一页面" prop=""></el-table-column>
      <el-table-column label="当前页面" prop=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input1: "",
      input4: "",
      taskLists: [],
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
  width: 120px;
  margin: 10px;
}
.el-select {
  width: 120px;
  margin: 10px;
}
</style>
