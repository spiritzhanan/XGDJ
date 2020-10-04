<template>
  <div>
    <!--面包屑导航区域-->
    <el-breadcrumb separator="/">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>网页管理</el-breadcrumb-item>
      <el-breadcrumb-item>图片管理</el-breadcrumb-item>
    </el-breadcrumb>
    <el-button type="primary">新建文件夹</el-button>
    <el-upload
      action="http://39.99.142.199:8083/Pic/addPic"
      list-type="picture-card"
      :with-credentials="true"
      :on-preview="handlePictureCardPreview"
      :on-success="uploadSuccess3"
      :on-remove="handleRemove"
      :file-list="formData.img"
    >
      <i slot="default" class="el-icon-plus"></i>
      <div slot="tip" class="uploadTip">注：建议尺寸：1200*420像素</div>
    </el-upload>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fileList: [],
      dialogImageUrl: "",
      dialogVisible: false,
      formData: {
        img: [] // 这里的必须是一个数组，才能正确回显，并且对象中要有name，url，uid
      }
    };
  },
  methods: {
    // 正文图片上传回显
    uploadSuccess3(res, file) {
      if (res.code === 200) {
        this.formData.img.push({
          name: res.data.pic,
          url: res.data.picUrl,
          uid: this.formData.img.length
        });
        console.log(this.formData.img);
      } else {
        this.$message.error(res.msg);
      }
    },
    // 正文图片上传,删除操作
    handleRemove(file, fileList) {
      // file是点击删除的文件，fileList时删除后剩下的文件列表
      this.formData.img = fileList;
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
};
</script>

<style lang="less" scoped></style>
