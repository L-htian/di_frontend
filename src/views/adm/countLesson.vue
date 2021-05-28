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
          prop="teacher"
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
          prop="chooseCount"
          label="选课人数">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {getLessonInfoAdmNeed} from "@/api/admin";

export default {
  name: "countLesson",
  mounted() {
    this.getLessonInfoForAdm()
  },
  methods: {
    getLessonInfoForAdm() {
      for (let i = 0; i < 10; i++) {
        this.lessonData.push({
          lesson_id: '12354',
          lesson_name: '数据集成',
          lesson_point: '2',
          teacher: '刘峰',
          classroom: '教学楼202',
          isShared: '否',
          chooseCount: 120
        })
      }
      let re = getLessonInfoAdmNeed()
      for (let i = 0; i < re.length; i++) {
        let ss = {}
        ss.lesson_id = re[i].lesson_id
        ss.lesson_name = re[i].lesson_name
        ss.lesson_point = re[i].lesson_point
        ss.teacher = re[i].teacher
        ss.classroom = re[i].classroom
        ss.chooseCount = re[i].chooseCount
        if (re[i].isShared == 1) {
          ss.isShared = "是"
        } else if (re[i].isShared == 0) {
          ss.isShared = "否"
        } else {
          ss.isShared = "其他学院"
        }
        this.lessonData.push(ss)
      }
    }
  },
  data() {
    return {
      lessonData: []
    }
  }
}
</script>

<style scoped>

</style>