<template>
  <div id="admView" style="margin-top: 0">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavAdmMenu></NavAdmMenu>
        </el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import NavAdmMenu from "@/components/NavAdmMenu";
import Header from "@/components/Header"
export default {
  name: "mainAdmView",
  components: {NavAdmMenu,Header}
}
</script>

<style scoped>

</style>