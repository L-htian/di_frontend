<template>
  <div id="stuView" style="margin-top: 0">
    <el-container>
      <el-header class="header">
        <Header></Header>
      </el-header>
      <el-container>
        <el-aside width="200px">
          <NavMenu></NavMenu>
        </el-aside>
        <el-main><router-view/></el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>

import NavMenu from "@/components/NavStuMenu";
import Header from "@/components/Header";
export default {
  name: 'mainStuView',
  components: {Header, NavMenu}
}

</script>

<style>
.header {
  background-color: #4279f3;
  color: #fff;
  line-height: 60px;
}
#stuView{
  padding-top: 0;
}
*{
  margin-top: 0;
}
body {
  display: block;
  margin: 0;
}
body .head-wrap{
  font-weight: bold;
  font-size: 22px;
}
body .Info{
  font-weight: bolder;
}
</style>
