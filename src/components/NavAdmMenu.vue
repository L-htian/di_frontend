<template>
  <el-row class="tac">
    <el-col :span="24">
      <el-menu router :default-active="$route.path" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
        <el-menu-item index="/adm/personalInfo">
          <i class="el-icon-location" ></i>
          <span slot="title">个人信息管理</span>
        </el-menu-item>
        <el-menu-item index="/adm/manageTeaching">
          <i class="el-icon-s-management"></i>
          <span slot="title">教务信息管理</span>
        </el-menu-item>
        <el-submenu index="/adm/viewCounts">
          <template slot="title">
            <i class="el-icon-menu"></i>
            <span>统计信息查看</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="/adm/viewStuCount">查看本院学生名单</el-menu-item>
            <el-menu-item index="/adm/viewLessonCount">查看选课情况</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
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