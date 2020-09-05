<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学子成长</el-breadcrumb-item>
      <el-breadcrumb-item>任务管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!--查询输入框-->
    <el-form>
      <el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input1"
      >
      </el-input>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-select v-model="value" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.value"
          :label="item.label"
          :value="item.value"
        >
        </el-option>
      </el-select>
      <el-input
        placeholder="请输入内容"
        suffix-icon="el-icon-date"
        v-model="input4"
      >
      </el-input>
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

    <el-button type="danger">删除</el-button>
    <!--用户列表区域-->
    <el-table :data="userList" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="任务编号"></el-table-column>
      <el-table-column label="任务类型" prop=""></el-table-column>
      <el-table-column label="任务名" prop=""></el-table-column>
      <el-table-column label="任务对象" prop=""></el-table-column>
      <el-table-column label="所属学院" prop=""></el-table-column>
      <el-table-column
        label="任务开始时间"
        prop=""
        width="100"
      ></el-table-column>
      <el-table-column
        label="任务结束时间"
        prop=""
        width="100"
      ></el-table-column>
      <el-table-column label="发布人" prop=""></el-table-column>
      <el-table-column label="发布时间" prop=""></el-table-column>
      <el-table-column label="任务状态" prop=""></el-table-column>
      <el-table-column label="操作" prop="" width="180"></el-table-column>
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
      userList: [],
      total: 0,
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
        },
        {
          value: "选项3",
          label: "蚵仔煎"
        },
        {
          value: "选项4",
          label: "龙须面"
        },
        {
          value: "选项5",
          label: "北京烤鸭"
        }
      ],
      value: ""
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
