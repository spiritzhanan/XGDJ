<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网页管理</el-breadcrumb-item>
      <el-breadcrumb-item>文件管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary">新建文件夹</el-button>
    <el-button type="primary">上传文件</el-button>

    <el-upload
      action="string"
      :http-request="submitUpload"
      list-type="picture-card"
      :on-preview="handlePictureCardPreview"
      :on-remove="handleRemove"
    >
      <i class="el-icon-plus"></i>
    </el-upload>
    <div class="img_div" v-for="(src, index) in pictureuploads" :key="index">
      <img class="img_card" :src="src.picturepath" />
      <p>{{ src.picturename }}</p>
    </div>

    <!--      <div>{{ this.pictureuploads.picturename }}</div>-->
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogImageUrl: "",
      dialogVisible: false,
      pictureuploads: []
    };
  },
  mounted() {
    this.getImg();
  },
  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
    },
    async submitUpload(item) {
      let formData = new FormData();
      formData.append("file", item.file);
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

<style lang="less" scoped>
.img_div {
  width: 200px;
  height: 200px;
  display: inline-block;
  margin: 10px;
  .img_card {
    height: 100%;
    width: 100%;
  }
}
</style>
