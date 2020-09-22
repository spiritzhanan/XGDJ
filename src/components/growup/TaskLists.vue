<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>学子成长</el-breadcrumb-item>
      <el-breadcrumb-item>任务管理</el-breadcrumb-item>
    </el-breadcrumb>

    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
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
      <el-button type="success" @click="publishTask">发布任务</el-button>
      <el-button type="info" @click="delAll">删除</el-button>
    </el-card>

    <!--用户列表区域-->
    <el-table
      :data="taskLists"
      @selection-change="handleSelectionChange"
      border
      stripe
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="任务编号" prop="number"></el-table-column>
      <el-table-column label="任务类型" prop="tasktype"></el-table-column>
      <el-table-column label="任务名" prop="tasktitle"></el-table-column>
      <el-table-column label="任务对象" prop="srole"></el-table-column>
      <el-table-column
        label="任务开始时间"
        prop="starttime"
        width="90"
      ></el-table-column>
      <el-table-column
        label="任务结束时间"
        prop="endtime"
        width="90"
      ></el-table-column>
      <el-table-column label="发布人" prop="publisher"></el-table-column>
      <el-table-column label="发布时间" prop="releasetime"></el-table-column>
      <el-table-column label="任务状态" prop="state"></el-table-column>
      <el-table-column label="操作" width="240">
        <template slot-scope="scope">
          <!--修改按钮-->
          <el-button type="danger" size="mini">修改</el-button>
          <!--任务完成情况-->
          <el-button type="danger" size="mini">任务完成情况</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pagenum"
      :page-size="queryInfo.pageSize"
      layout="total,prev, pager, next,jumper"
      :total="total"
      background
    ></el-pagination>

    <!--新建对话框-->
    <el-dialog
      title="发布任务"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form :model="addForm" ref="addFormRef" label-width="100px">
        <el-form-item label="任务类型">
          <el-select v-model="addForm.tasktype" style="width: 100%">
            <el-option label="导师判断" value="导师判断"></el-option>
            <el-option label="系统考试" value="系统考试"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务标题">
          <el-input v-model="addForm.tasktitle" clearable></el-input>
        </el-form-item>
        <el-form-item label="任务描述">
          <el-input
            type="textarea"
            v-model="addForm.taskcontent"
            clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="任务对象">
          <el-select v-model="addForm.srole" style="width: 100%">
            <el-option label="普通群众" value="普通群众"></el-option>
            <el-option label="入党申请人" value="入党申请人"></el-option>
            <el-option label="入党积极分子" value="入党积极分子"></el-option>
            <el-option label="发展对象" value="发展对象"></el-option>
            <el-option label="预备党员" value="预备党员"></el-option>
            <el-option label="正式党员" value="正式党员"></el-option>
            <el-option label="管理员" value="管理员"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="任务开始时间">
          <el-date-picker
            type="date"
            v-model="addForm.starttime"
            style="width: 100%;"
            clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="任务结束时间">
          <el-date-picker
            type="date"
            v-model="addForm.endtime"
            style="width: 100%;"
            clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="发布人">
          <el-input v-model="addForm.publisher" clearable></el-input>
        </el-form-item>
        <el-form-item label="任务状态">
          <el-select v-model="addForm.state" style="width: 100%">
            <el-option label="显示" value="显示"></el-option>
            <el-option label="隐藏" value="隐藏"></el-option>
          </el-select>
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
      multipleSelection: [], //勾选的id
      queryInfo: {
        tasktitle: "",
        srole: "",
        publisher: "",
        state: "",
        //当前页码数
        pagenum: 1,
        //每页展示数
        pageSize: 5
      },
      taskLists: [],
      addForm: {
        tasktype: "",
        tasktitle: "",
        taskcontent: "",
        srole: "",
        starttime: "",
        endtime: "",
        publisher: "",
        state: ""
      },
      total: 0,
      //空盒子添加用户的显示与隐藏
      addDialogVisible: false
    };
  },
  mounted() {
    this.getTaskList();
  },
  methods: {
    /*全选*/
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    delAll() {
      // 批量删除
      if (this.multipleSelection.length == 0) {
        this.$message({
          type: "error",
          message: "请先勾选需要删除的数据"
        });
      } else {
        this.$confirm("删除此数据, 是否继续?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "error"
        })
          .then(async () => {
            const del = this.multipleSelection;
            let newArray = [];
            for (let i = 0; i < del.length; i++) {
              const delId = del[i].tid;
              newArray.push(delId);
            }
            let delArray = {
              tids: newArray.join("-")
            };
            const { data: res } = await this.$http.delete("/Task/deleteTask", {
              params: delArray
            });
            if (res.code !== 200) {
              this.$message.error("删除失败!");
            }
            this.$message.success("删除成功！");
            this.getTaskList();
          })
          .catch(() => {
            this.$message.error("已取消删除");
          });
      }
    },
    async getTaskList() {
      const { data: res } = await this.$http.get("/Task/getTaskBySearch", {
        params: {
          tasktitle: this.queryInfo.tasktitle,
          publisher: this.queryInfo.publisher,
          state: this.queryInfo.state,
          srole: this.queryInfo.srole,
          pageNum: this.queryInfo.pagenum,
          pageSize: this.queryInfo.pageSize
        }
      });
      if (res.code !== 200) {
        this.$message.info("获取数据失败");
      }
      this.total = res.data.total;
      this.taskLists = res.data.list;
    },
    //监听添加用户对话框的关闭事件
    addDialogClosed() {
      // this.$refs.addFormRef.resetFields();
      this.addForm = {};
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getTaskList();
    },
    publishTask() {
      this.addDialogVisible = true;
    },

    async addTask() {
      const { data: res } = await this.$http.post(
        "/Task/addTask",
        this.addForm
      );
      if (res.code !== "200") {
        this.$message.error("任务添加失败");
      }
      this.$message.success("任务添加成功");
      this.getTaskList();
      //隐藏添加用户对话框
      this.addDialogVisible = false;
    }
  }
};
</script>

<style lang="less" scoped>
.query {
  .el-input {
    width: 200px;
    margin: 5px;
  }
  .el-select {
    width: 200px;
    margin: 10px;
  }
}
</style>
