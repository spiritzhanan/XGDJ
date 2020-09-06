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
    <el-table :data="createLists" border stripe>
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

    <!--分页区域-->
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNum"
      :page-sizes="[1, 2, 5, 10]"
      :page-size="queryInfo.pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="total"
    ></el-pagination>

    <!--添加用户的对话框-->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form :model="addForm" ref="addFormRef" label-width="70px">
        <el-form-item label="任务类型">
          <el-input v-model="addForm.tasktype"></el-input>
        </el-form-item>
        <el-form-item label="任务标题">
          <el-input v-model="addForm.tasktitle"></el-input>
        </el-form-item>
        <el-form-item label="指派给">
          <el-input v-model="addForm.publisher"></el-input>
        </el-form-item>
        <el-form-item label="希望完成日期">
          <el-input v-model="addForm.examinetime"></el-input>
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input type="textarea" v-model="addForm.taskcontent"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTask">确 定</el-button>
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
        pagenNm: 1,
        //每页展示数
        pageSize: 2
      },
      createLists: [],
      total: 0,
      //空盒子添加用户的显示与隐藏
      addDialogVisible: false,
      //添加用户的表单数据
      addForm: {
        tasktype: "",
        tasktitle: "",
        publisher: "",
        examinetime: "",
        taskcontent: ""
      },
      id: "",
      token: ""
    };
  },
  created() {
    this.id = window.sessionStorage.getItem("adminid");
    this.token = window.sessionStorage.getItem("token");
    this.getCreateLists();
  },
  methods: {
    //获取我创建的任务
    async getCreateLists() {
      const id = this.id;
      const { data: res } = await this.$http.get("/Task/sentMe", {
        params: { id: id },
        headers: { token: this.token }
      });
      console.log(res);
      if (res.code !== "200") {
        return this.$message.error("获取列表失败");
      }
      this.createLists = res.data.tasks;
    },

    //查询我创建
    async queryTask(queryInfo) {
      queryInfo = this.queryInfo;
      if (!queryInfo.query) {
        this.getCreateLists();
      }
      const { data: res } = await this.$http.get("/Task/sentMe", {
        params: queryInfo
      });
      if (res.code !== "200") {
        return this.$message.error("获取列表失败");
      }
      this.dispatchLists = res.data.list;
      this.total = res.data.total;
    },
    //监听 pagesize 改变的事件
    handleSizeChange(newSize) {
      //console.log(newSize)
      this.queryInfo.pageSize = newSize;
      this.getCreateLists();
    },

    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;
      this.getCreateLists();
    },

    //监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
    },

    //添加任务
    async addTask() {
      const { data: res } = await this.$http.post("/Task/addTask", {
        task: this.addForm
      });
      if (res.code !== "200") {
        this.$message.error("任务添加失败");
      }
      this.$message.success("任务添加成功");
      //隐藏添加用户对话框
      this.addDialogVisible = false;
      this.getCreateLists();
    }
  }
};
</script>

<style lang="less" scoped></style>
