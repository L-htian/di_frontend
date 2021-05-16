<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/stu/personalInfo">
          <i class="el-icon-location" ></i>
          <span slot="title">个人信息管理</span>
        </el-menu-item>
        <el-menu-item index="/stu/manageLessons">
          <i class="el-icon-s-management"></i>
          <span slot="title">课程信息管理</span>
        </el-menu-item>
        <el-menu-item index="/stu/viewLesson">
          <i class="el-icon-menu"></i>
          <span slot="title">选课信息管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  }
}
</script>