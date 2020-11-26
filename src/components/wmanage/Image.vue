<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网页管理</el-breadcrumb-item>
      <el-breadcrumb-item>图片管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary">新建文件夹</el-button>
    <form>
      <input type="file" @change="getFile($event)" />
      <el-button type="success" @click="submitForm($event)">提交</el-button>
    </form>
    <el-table :data="pictureuploads">
      <el-table-column label="图片">
        <template slot-scope="scope">
          <el-image :src="scope.row.picturepath" alt="" />
          {{ scope.row.picturepath }}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      file: "",
      pictureuploads: []
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    getFile(event) {
      this.file = event.target.files[0];
      console.log(this.file);
    },
    async submitForm(event) {
      event.preventDefault();
      let formData = new FormData();
      formData.append("file", this.file);

      let config = {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      };

      const { data: res } = await this.$http.post(
        "/picUpload",
        formData,
        config
      );
      if (res.code !== 200) {
        this.$message.error("图片上传失败！");
      }
      this.$message.success("图片上传成功！");
      this.getImg();
    },
    async getImg() {
      const { data: res } = await this.$http.get("/Pic/findPic");
      if (res.code !== 200) {
      }
      this.pictureuploads = res.data.pictureuploads;
      console.log(this.pictureuploads);
    }
  }
};
</script>

<style lang="less" scoped></style>
