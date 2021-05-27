<template>
<div class="viewLesson">
  <el-table
      :data="lessonData"
      height="100%"
      border
      style="width: 100%;position: relative;top: 10px"
  >
    <el-table-column
        prop="lesson_id"
        label="课程编号"
        width="180">
    </el-table-column>
    <el-table-column
        prop="lesson_name"
        label="课程名称"
        width="180">
    </el-table-column>
    <el-table-column
        prop="lesson_point"
        label="学分"
        width="130">
    </el-table-column>
    <el-table-column
        prop="teachers"
        label="授课老师">
    </el-table-column>
    <el-table-column
        prop="classroom"
        label="授课地点">
    </el-table-column>
    <el-table-column
        prop="isShared"
        label="是否共享">
    </el-table-column>
    <el-table-column
        fixed="right"
        label="操作"
        width="150">
      <template slot-scope="scope">
        <el-button @click="dropSelectedLesson(scope.row.lesson_id)" type="text" size="small">退课</el-button>
<!--        <el-button type="text" size="small" @click="deleteChoosedLesson(scope.row.lesson_id)">删除</el-button>-->
      </template>
    </el-table-column>
  </el-table>
</div>
</template>

<script>
import {mapGetters} from "vuex";
import {dropLesson, getChoosedLesson} from "@/api/stu";

export default {
  name: "viewStuLesson",
  mounted() {
    this.getLessonInfo()
  },
  methods:{
    dropSelectedLesson(id){
      this.$confirm(`该操作不可撤销`, '将要退选该课程,是否继续？', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'waring'
      }).then(() => {
        for (let i = 0; i < this.lessonData.length; i++) {
          if (this.lessonData[i].lesson_id === id) {
            this.lessonData.splice(i, 1)
            break
          }
        }
        console.log(this.lessonData)
        this.$message({
          type: 'success',
          message: '退选成功'
        })
        let re = {
          "lesson_id":id,
          "student_id":this.stu_id
        }
        this.lessonData = dropLesson(re)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '操作已取消'
        })
      })
    },
    getLessonInfo() {
      for(let i =0;i<10;i++){
        this.lessonData.push({
          lesson_id: '12354',
          lesson_name: '数据集成',
          lesson_point: '2',
          teachers: '刘峰',
          classroom: '教学楼202',
          isShared: '否'
        })
      }
      this.lessonData = getChoosedLesson(this.stu_id)
    }
  },
  computed: {
    ...mapGetters(['stu_id'])
  },
  data(){
    return{
      lessonData: []
    }
  }
}
</script>

<style scoped>

</style>