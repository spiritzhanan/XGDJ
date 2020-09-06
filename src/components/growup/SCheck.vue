<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学子成长</el-breadcrumb-item>
      <el-breadcrumb-item>学生审核</el-breadcrumb-item>
    </el-breadcrumb>

    <!--查询输入框-->
    <el-form>
      学生学号<el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      所属学院<el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      身份
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      电话<el-input placeholder="请输入内容" v-model="input4"> </el-input>
    </el-form>

    学生姓名<el-input
      placeholder="请输入内容"
      suffix-icon="el-icon-date"
      v-model="input1"
    >
    </el-input>
    所属班级<el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    年级/老师<el-select v-model="value" placeholder="请选择">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      >
      </el-option>
    </el-select>
    性别<el-input placeholder="请输入内容" v-model="input4"> </el-input>
    <el-button type="primary">查询</el-button>
    <!--用户列表区域-->
    <el-table :data="taskLists" border stripe>
      <el-table-column label="任务编号" prop=""></el-table-column>
      <el-table-column label="学生学号" prop=""></el-table-column>
      <el-table-column label="学生姓名" prop=""></el-table-column>
      <el-table-column label="性别" prop=""></el-table-column>
      <el-table-column label="年龄" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column label="年级" prop=""></el-table-column>
      <el-table-column label="身份" prop=""></el-table-column>
      <el-table-column label="电话" prop=""></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
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
  width: 120px;
  margin: 10px;
}
.el-select {
  width: 120px;
  margin: 10px;
}
</style>
