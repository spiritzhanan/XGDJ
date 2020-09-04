<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>待办事项</el-breadcrumb-item>
      <el-breadcrumb-item>我创建</el-breadcrumb-item>
    </el-breadcrumb>

    <!--卡片视图-->
    <el-card>
      <!--搜索与添加区域-->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-input
            placeholder="请输入内容"
            v-model="queryInfo.query"
            clearable
          >
            <el-button slot="append" icon="el-icon-search"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary" @click="addDialogVisible = true"
            >添加用户</el-button
          >
        </el-col>
      </el-row>
    </el-card>

    <!--用户列表区域-->
    <el-table :data="userList" border stripe>
      <el-table-column label="#" type="index"></el-table-column>
      <el-table-column label="任务状态" prop=""></el-table-column>
      <el-table-column label="任务类型" prop=""></el-table-column>
      <el-table-column label="任务标题" prop=""></el-table-column>
      <el-table-column label="希望完成日期" prop=""></el-table-column>
      <el-table-column label="指派给" prop=""></el-table-column>
      <el-table-column label="创建人" prop=""></el-table-column>
      <el-table-column label="解决人" prop=""></el-table-column>
      <el-table-column label="关闭人" prop=""></el-table-column>
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

    <!--添加用户的对话框-->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form :model="addForm" ref="addFormRef" label-width="70px">
        <el-form-item label="任务类型" prop="">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="任务标题" prop="">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="指派给" prop="">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="希望完成日期" prop="">
          <el-input></el-input>
        </el-form-item>
        <el-form-item label="任务描述" prop="">
          <el-input type="textarea"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary">确 定</el-button>
      </span>
    </el-dialog>
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
      //空盒子添加用户的显示与隐藏
      addDialogVisible: false,
      //添加用户的表单数据
      addForm: {}
    };
  },
  methods: {
    //监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    }
  }
};
</script>

<style lang="less" scoped></style>
