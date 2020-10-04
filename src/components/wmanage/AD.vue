<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网页管理</el-breadcrumb-item>
      <el-breadcrumb-item>广告管理</el-breadcrumb-item>
    </el-breadcrumb>
    <!--卡片区域-->
    <el-card>
      <!--查询输入框-->
      <el-form class="query">
        <el-input
          placeholder="请输入编号"
          clearable
          v-model="queryInfo.number"
        ></el-input>
        <el-input
          placeholder="请输入广告类型"
          clearable
          v-model="queryInfo.category"
        ></el-input>

        <el-input
          placeholder="请输入显示顺序"
          clearable
          v-model="queryInfo.displayorder"
        >
        </el-input
        ><el-input placeholder="请输入标题" clearable v-model="queryInfo.title">
        </el-input>

        <el-button type="primary" @click="getADList">查询</el-button>
      </el-form>
      <el-button type="success" @click="addDialogVisible = true"
        >新增</el-button
      >
      <el-button type="info" @click="delAll">删除</el-button>
    </el-card>
    <!--用户列表区域-->
    <el-table
      :data="ADLists"
      @selection-change="handleSelectionChange"
      border
      stripe
    >
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="单据编号" prop="id"></el-table-column>
      <el-table-column label="广告类型" prop="category"></el-table-column>
      <el-table-column label="显示顺序" prop="displayorder"></el-table-column>
      <el-table-column label="标题" prop="title"></el-table-column>
      <el-table-column label="图片" prop="picture"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <!--修改按钮-->
          <el-button
            type="danger"
            size="mini"
            @click="showEditDialog(scope.row.tid)"
            >修改</el-button
          >
        </template>
      </el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      @current-change="handleCurrentChange"
      :current-page="queryInfo.pageNum"
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
        <el-form-item label="广告类型">
          <el-select v-model="addForm.category" style="width: 100%">
            <el-option label="网络党校轮播" value="网络党校轮播"></el-option>
            <el-option label="学子成长轮播" value="学子成长轮播"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="显示顺序">
          <el-input v-model="addForm.displayorder" clearable></el-input>
        </el-form-item>
        <el-form-item label="标题">
          <el-input v-model="addForm.title" clearable></el-input>
        </el-form-item>
        <el-form-item label="图片">
          <el-input
            v-model="addForm.picture"
            clearable
            style="width: 150px"
          ></el-input>
          <el-button>选择图片</el-button>
        </el-form-item>
        <el-form-item label="广告链接地址">
          <el-input v-model="addForm.url" clearable></el-input>
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
        category: "",
        displayorder: "",
        number: "",
        title: "",
        //当前页码数
        pageNum: 1,
        //每页展示数
        pageSize: 5
      },
      ADLists: [],
      total: 0,
      addForm: {
        category: "",
        displayorder: "",
        title: "",
        picture: "",
        url: ""
      },
      editForm: {},
      //控制添加的显示与隐藏
      addDialogVisible: false,
      //控制修改的显示与隐藏
      editDialogVisible: false,
      multipleSelection: [] //勾选的id
    };
  },
  mounted() {
    this.getADList();
  },
  methods: {
    async getADList() {
      const { data: res } = await this.$http.get(
        "/Advertisement/getAdvertisementBySearch",
        {
          params: {
            // category: this.queryInfo.category,
            // displayorder: this.queryInfo.displayorder,
            // number: this.queryInfo.number,
            // title: this.queryInfo.title,
            pageNum: this.queryInfo.pageNum,
            pageSize: this.queryInfo.pageSize
          }
        }
      );
      if (res.code !== 200) {
        this.$message.info("获取数据失败");
      }
      console.log(res);
      console.log(this.queryInfo.pageNum);
      this.total = res.data.total;
      this.ADLists = res.data.list;
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pageNum = newPage;
      this.getADList();
    },
    //发布任务
    async addTask() {
      const { data: res } = await this.$http.post(
        "/Advertisement/addAdvertisement",
        this.addForm
      );
      if (res.code !== 200) {
        this.$message.error("任务添加失败");
      }
      this.$message.success("任务添加成功");
      this.getADList();
      //隐藏添加用户对话框
      this.addDialogVisible = false;
    },
    //监听添加对话框的关闭事件
    addDialogClosed() {
      // this.$refs.addFormRef.resetFields();
      this.addForm = {};
    },
    //全选
    handleSelectionChange(val) {
      console.log(val);
      this.multipleSelection = val;
    },
    //批量删除
    delAll() {
      // 批量删除
      if (this.multipleSelection.length == 0) {
        this.$message({
          type: "error",
          message: "请先勾选需要删除的数据"
        });
      } else {
        this.$confirm("是否删除选中数据?", "提示", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "error"
        })
          .then(async () => {
            const del = this.multipleSelection;
            let newArray = [];
            for (let i = 0; i < del.length; i++) {
              const delId = del[i].id;
              newArray.push(delId);
            }
            let delArray = {
              ids: newArray.join("-")
            };
            const { data: res } = await this.$http.delete(
              "/Advertisement/deteleAdvertisement",
              {
                params: delArray
              }
            );
            if (res.code !== 200) {
              this.$message.error("删除失败!");
            }
            this.$message.success("删除成功！");
            this.getADList();
          })
          .catch(() => {
            this.$message.error("已取消删除");
          });
      }
    }
    // //展示修改对话框
    // async showEditDialog(id) {
    //   const { data: res } = await this.$http.get(
    //     "/Advertisement/updateAdvertisement",
    //     {
    //       params: {
    //         tid: id
    //       }
    //     }
    //   );
    //   if (res.code !== 200) {
    //     return this.$message.error("查询任务失败！");
    //   }
    //   this.editForm = res.data;
    //   this.editDialogVisible = true;
    // },
    // //修改任务
    // async editTask() {
    //   console.log(this.editForm);
    //   const { data: res } = await this.$http.put(
    //     "/Task/updateTask",
    //     this.editForm
    //   );
    //   if (res.code !== 200) {
    //     this.$message.error("任务修改失败");
    //   }
    //   this.$message.success("任务修改成功");
    //   this.getTaskList();
    //   //隐藏添加用户对话框
    //   this.editDialogVisible = false;
    // },
    // //监听修改对话框的关闭事件
    // editDialogClosed() {
    //   // this.$refs.addFormRef.resetFields();
    //   this.editForm = {};
    // }
  }
};
</script>

<style lang="less" scoped>
.query {
  .el-input {
    width: 200px;
    margin: 10px;
  }
}
</style>
