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
      <el-row>
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
      @current-change="handleCurrentChange"
      :current-page="pagenum"
      :page-size="pagesize"
      layout="total,prev, pager, next,jumper"
      :total="total"
      background
    ></el-pagination>

    <!--新建对话框-->
    <el-dialog
      title="添加用户"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form
        :model="addForm"
        :rules="rules"
        ref="addFormRef"
        label-width="100px"
      >
        <el-form-item label="任务类型" prop="tasktype">
          <el-input v-model="addForm.tasktype"></el-input>
        </el-form-item>
        <el-form-item label="任务标题">
          <el-input v-model="addForm.tasktitle"></el-input>
        </el-form-item>
        <el-form-item label="指派给谁">
          <el-select v-model="addForm.srole" style="width: 100%">
            <el-option label="管理员" value="管理员"></el-option>
            <el-option label="信息工程学院" value="信息工程学院"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="希望完成日期">
          <el-date-picker
            type="date"
            placeholder="请选择希望完成日期时间"
            v-model="addForm.examinetime"
            style="width: 100%;"
          ></el-date-picker>
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
      createLists: [],
      //当前页码数
      pagenum: 1,
      // 每页展示数
      pagesize: 5,
      //当前页面的数据总数
      total: 0,
      //空盒子添加用户的显示与隐藏
      addDialogVisible: false,
      //添加用户的表单数据
      addForm: {
        tasktype: "",
        tasktitle: "",
        srole: "",
        examinetime: "",
        taskcontent: ""
      },
      id: "",
      rules: {
        tasktype: [
          { required: true, message: "请输入活动名称", trigger: "blur" }
        ]
      }
    };
  },
  created() {
    this.id = window.sessionStorage.getItem("adminid");
    this.getCreateLists();
  },
  methods: {
    //获取我创建的任务
    async getCreateLists() {
      const { data: res } = await this.$http.get("/Task/myPublish", {
        params: { id: this.id, pageNum: this.pagenum, pageSize: this.pagesize }
      });
      if (res.code !== 200) {
        return this.$message.error("获取列表失败");
      }
      this.total = res.data.total;
      this.createLists = res.data.list;
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.pagenum = newPage;
      this.getCreateLists();
    },
    //监听添加用户对话框的关闭事件
    addDialogClosed() {
      this.$refs.addFormRef.resetFields();
      // this.addForm = {};
    },
    //添加任务
    async addTask() {
      //路径 + 要请求的数据
      const { data: res } = await this.$http.post(
        "/Task/addTask",
        this.addForm
      );
      console.log(this.addForm);
      if (res.code !== 200) {
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
