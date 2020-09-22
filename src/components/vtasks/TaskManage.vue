<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>志愿任务</el-breadcrumb-item>
      <el-breadcrumb-item>志愿任务管理</el-breadcrumb-item>
    </el-breadcrumb>

    <el-card>
      <!--查询输入框-->
      <el-row>
        <el-col :span="20">
          <el-form class="query">
            <el-input
              placeholder="请输入志愿名"
              clearable
              v-model="queryInfo.volunteername"
            ></el-input>
            <el-input
              placeholder="请输入报名联系人"
              clearable
              v-model="queryInfo.publisher"
            >
            </el-input>
            <el-select
              v-model="queryInfo.college"
              clearable
              placeholder="请选择发布学院"
            >
              <el-option label="信息工程学院" value="信息工程学院"></el-option>
              <el-option label="药学院" value="药学院"></el-option>
              <el-option label="人文社科学院" value="人文社科学院"></el-option>
              <el-option label="第一临床学院" value="第一临床学院"></el-option>
              <el-option label="护理学院" value="护理学院"></el-option>
              <el-option label="康复学院" value="康复学院"></el-option>
              <el-option label="基础医学院" value="基础医学院"></el-option>
              <el-option label="马克思学院" value="马克思学院"></el-option>
              <el-option label="外国语学院" value="外国语学院"></el-option>
              <el-option label="赣南医学院" value="赣南医学院"></el-option>
            </el-select>

            <el-select
              v-model="queryInfo.vstate"
              clearable
              placeholder="请选择任务状态"
            >
              <el-option label="报名中" value="报名中"></el-option>
              <el-option label="报名进行中" value="报名进行中"></el-option>
              <el-option label="进行中" value="进行中"></el-option>
              <el-option label="已结束" value="已结束"></el-option>
            </el-select>
            <el-button type="primary" @click="getTaskManage">查询</el-button>
          </el-form>
        </el-col>
        <el-col :span="4" class="btns">
          <el-button type="success" @click="addtaskmanage">新增</el-button>
          <el-button type="info">删除</el-button>
        </el-col>
      </el-row>
    </el-card>
    <!--用户列表区域-->
    <el-table :data="taskManage" border stripe>
      <el-table-column type="selection" width="55"> </el-table-column>
      <el-table-column label="任务编号" prop="number"></el-table-column>
      <el-table-column label="志愿名" prop="volunteername"></el-table-column>
      <!--  <el-table-column label="志愿时长" prop=""></el-table-column>-->
      <el-table-column label="所需人数" prop="neednum"></el-table-column>
      <el-table-column label="报名人数 " prop="applicantsnum"></el-table-column>
      <el-table-column label="报名联系人" prop=""></el-table-column>
      <el-table-column
        label="报名联系电话 "
        width="100"
        prop="cphone"
      ></el-table-column>
      <el-table-column label="发布人" prop="publisher"></el-table-column>
      <el-table-column label="所属学院" prop="college"></el-table-column>
      <el-table-column label="发布时间 " prop="vtime"></el-table-column>
      <el-table-column label="任务状态 " prop="vstate"></el-table-column>
      <el-table-column label="操作" prop=""></el-table-column>
    </el-table>

    <!--分页区域-->
    <el-pagination
      :current-page="queryInfo.pagenum"
      :page-size="queryInfo.pagesize"
      layout="total, prev, pager, next, jumper"
      :total="total"
    >
    </el-pagination>

    <!--新增对话框-->
    <el-dialog
      title="新增"
      :visible.sync="addDialogVisible"
      width="50%"
      @close="addDialogClosed"
    >
      <el-form
        :model="addTaskmanage"
        ref="addTaskmanageRef"
        label-width="100px"
      >
        <el-form-item label="志愿名">
          <el-input v-model="addTaskmanage.volunteername" clearable></el-input>
        </el-form-item>
        <!--  <el-form-item label="志愿内容">
          <el-input v-model="" clearable></el-input>
        </el-form-item>
        <el-form-item label="出发集合地点">
          <el-input
                  v-model=""
                  clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="出发集合时间">
          <el-date-picker
                  type="date"
                  v-model=""
                  style="width: 100%;"
                  clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="志愿地点:">
          <el-input
                  v-model=""
                  clearable
          ></el-input>
        </el-form-item>
        <el-form-item label="志愿时长">
          <el-input
                  v-model=""
                  clearable
          ></el-input>
        </el-form-item>

        <el-form-item label="报名结束时间">
          <el-date-picker
                  type="date"
                  v-model=""
                  style="width: 100%;"
                  clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="任务开始时间">
          <el-date-picker
                  type="date"
                  v-model="addTaskmanage.vtime"
                  style="width: 100%;"
                  clearable
          ></el-date-picker>
        </el-form-item>
        <el-form-item label="任务结束时间">
          <el-date-picker
                  type="date"
                  v-model=""
                  style="width: 100%;"
                  clearable
          ></el-date-picker>
        </el-form-item>-->
        <el-form-item label="所需人数">
          <el-input v-model="addTaskmanage.neednum" clearable></el-input>
        </el-form-item>
        <el-form-item label="报名联系人">
          <el-input v-model="addTaskmanage.publisher" clearable></el-input>
        </el-form-item>
        <el-form-item label=" 报名联系电话">
          <el-input v-model="addTaskmanage.cphone" clearable></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="addDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="addTaskMan">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      queryInfo: {
        number: "",
        volunteername: "",
        neednum: "",
        applicantsnum: "",
        cphone: "",
        publisher: "",
        college: "",
        vtime: "",
        vstate: "",
        //当前页码数
        pagenum: 1,
        //每页展示数
        pagesize: 5
      },
      addTaskmanage: {
        volunteername: "",
        vtime: "",
        neednum: "",
        cphone: "",
        publisher: ""
      },
      taskManage: [],
      total: 0,
      addDialogVisible: false
    };
  },

  mounted() {
    this.getTaskManage();
  },
  methods: {
    /* //表格中修改时间格式
    dateFormat(row, column, cellValue, index) {
      const daterc = row[column.property];
      if (daterc != null) {
        const dateMat = new Date(
          parseInt(daterc.replace("/Date(", "").replace(")/", ""), 10)
        );
        const year = dateMat.getFullYear();
        const month = dateMat.getMonth() + 1;
        const day = dateMat.getDate();
        const hh = dateMat.getHours();
        const mm = dateMat.getMinutes();
        const ss = dateMat.getSeconds();
        const timeFormat =
          year + "-" + month + "-" + day + " " + hh + ":" + mm + ":" + ss;
        return timeFormat;
      }
    },*/
    async getTaskManage() {
      const { data: res } = await this.$http.get("/Volunteer/findBySearch", {
        params: {
          volunteername: this.queryInfo.volunteername,
          college: this.queryInfo.college,
          vstate: this.queryInfo.vstate,
          pageNum: this.queryInfo.pagenum,
          pageSize: this.queryInfo.pagesize
        }
      });
      if (res.code !== 200) {
        this.$message.info("获取数据失败");
      }
      console.log(res);
      this.total = res.data.total;
      this.taskManage = res.data.list;
    },
    //监听 页码值 改变的事件
    handleCurrentChange(newPage) {
      this.queryInfo.pagenum = newPage;
      this.getTaskManage();
    },
    //监听添加对话框的关闭事件
    addDialogClosed() {
      this.addTaskmanage = {};
    },
    addtaskmanage() {
      this.addDialogVisible = true;
    },
    async addTaskMan() {
      const { data: res } = await this.$http.post(
        "/Volunteer/addVolunteer",
        this.addTaskmanage
      );
      if (res.code !== "200") {
        this.$message.error("任务添加失败");
      }
      this.$message.success("任务添加成功");
      this.getTaskManage();
      //隐藏添加用户对话框
      this.addDialogVisible = false;
    }
  }
};
</script>

<style lang="less" scoped>
.query {
  .el-input {
    width: 160px;
    margin: 5px;
  }
  .el-select {
    width: 160px;
    margin: 10px;
  }
}
.btns {
  position: relative;
  top: 9.5px;
  left: -12px;
}
</style>
