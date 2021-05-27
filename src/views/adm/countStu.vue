<template>
  <div class="stuCount">
    <el-table
        :data="stuData"
        height="100%"
        border
        style="width: 100%"
    >
      <el-table-column
          prop="id"
          label="学号"
          width="180">
      </el-table-column>
      <el-table-column
          prop="name"
          label="姓名"
          width="180">
      </el-table-column>
      <el-table-column
          prop="sex"
          label="性别"
          width="180">
      </el-table-column>
      <el-table-column
          prop="department"
          label="院系">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getStuInfoAdmNeed} from "@/api/admin";

export default {
  name: "countStu",
  mounted() {
    this.getStuInfoForAdm()
  },
  methods: {
    getStuInfoForAdm() {
      for (let i=0;i<10;i++){
        this.stuData.push({
          id: 181250000,
          name: '刘峰',
          sex: '男',
          department: '软件学院',
        })
      }
      this.stuData = getStuInfoAdmNeed()
    }
  },
  data() {
    return {
      stuData: []
    }
  }
}
</script>

<style scoped>

</style>