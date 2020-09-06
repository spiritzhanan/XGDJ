<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>成长履历</el-breadcrumb-item>
    </el-breadcrumb>
    <!--查询输入框-->
    <el-form>
      学生学号<el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      学生姓名<el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      发生时间
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      来源类型<el-input placeholder="请输入内容" v-model="input4"> </el-input>
      <el-button type="primary">查询</el-button>
    </el-form>

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
