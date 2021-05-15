<template>
  <div class="lessonChooseCount">
    <el-table
        :data="lessonData"
        height="100%"
        border
        style="width: 100%"
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
          <el-button @click="changeLessonInfo(scope.row.lesson_id)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="deleteChoosedLesson(scope.row.lesson_id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getStuLessonInfo} from "@/api/stu";

export default {
  name: "teachingManage",
  mounted() {
    this.getLessonInfo()
  },
  methods:{
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
      // this.lessonData = getStuLessonInfo()
    },
    //todo
    changeLessonInfo(id){},
    deleteChoosedLesson(id){}
  },
  data(){
    return{
      lessonData:[]
    }
  }
}
</script>

<style scoped>

</style>