<template>
  <div class="lesson">
    <el-table
        :data="lessonData"
        height="100%"
        border
        style="width: 100%"
        v-show="showLessonTable">
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
          fixed="right"
          label="操作"
          width="150">
        <template slot-scope="scope">
          <!--          <el-button @click="showLessonInfo(scope.row.lesson_id)" type="text" size="small">查看</el-button>-->
          <el-button type="text" size="small" @click="chooseLesson(scope.row.lesson_id)">选课</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {chooseStuLesson, getStuLessonInfo} from "@/api/stu";

export default {
  name: "lessonManage",
  mounted() {
    this.getLessonInfo()
  },
  computed: {
    ...mapGetters(['login_account', 'stu_id'])
  },
  methods: {
    chooseLesson(id) {
      console.log(id)
      let re = {
        "lesson_id": id,
        "student_id": this.stu_id
      }
      if(chooseStuLesson(re)){
        this.$notify({
          title:"选课成功",
          type: 'success'
        })
      }
    },
    getLessonInfo() {
      let re = getStuLessonInfo()
      for (let i = 0; i < re.length; i++) {
        let ss = {}
        ss.lesson_id = re[i].lesson_id
        ss.lesson_name = re[i].lesson_name
        ss.lesson_point = re[i].lesson_point
        ss.teacher = re[i].teacher
        ss.classroom = re[i].classroom
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
      chooseLessonInfo: {
        lesson_id: '',
        student_id: ''
      },
      showLessonCard: false,
      showLessonTable: true,
      lessonData: []
    }
  }
}
</script>

<style scoped>

</style>