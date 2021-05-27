<template>
  <div class="lessonChooseCount">
    <el-button class="addLesson" style="float:right;position: relative" @click="addLesson">添加课程</el-button>
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
          <el-button @click="changeLessonInfo(scope.row.lesson_id)" type="text" size="small">修改</el-button>
          <el-button type="text" size="small" @click="deleteChoosedLesson(scope.row.lesson_id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="修改课程信息" :visible.sync="modifyLessonVisible" :label-position="labelPosition" label-width="80px">
      <el-form :model="lessonToModify">
        <el-form-item label="课程编号">
          <el-input v-model="lessonToModify.lesson_id" :disabled="true" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程名称">
          <el-input v-model="lessonToModify.lesson_name" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程学分">
          <el-input v-model="lessonToModify.lesson_point" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="任课老师">
          <el-input v-model="lessonToModify.teachers" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="授课地点">
          <el-input v-model="lessonToModify.classroom" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否共享">
          <el-select v-model="lessonToModify.isShared" placeholder="请选择是否共享">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelModify">取 消</el-button>
        <el-button type="primary" @click="confirmModify">确 定</el-button>
      </div>
    </el-dialog>
    <el-dialog title="添加课程" :visible.sync="addLessonVisible" :label-position="labelPosition" label-width="80px">
      <el-form :model="lessonToModify">
        <el-form-item label="课程编号">
          <el-input v-model="lessonToModify.lesson_id" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程名称">
          <el-input v-model="lessonToModify.lesson_name" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="课程学分">
          <el-input v-model="lessonToModify.lesson_point" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="任课老师">
          <el-input v-model="lessonToModify.teachers" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="授课地点">
          <el-input v-model="lessonToModify.classroom" :disabled="false" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="是否共享">
          <el-select v-model="lessonToModify.isShared" placeholder="请选择是否共享">
            <el-option label="是" value="是"></el-option>
            <el-option label="否" value="否"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="cancelAdd">取 消</el-button>
        <el-button type="primary" @click="confirmAdd">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {getStuLessonInfo} from "@/api/stu";
import {updateAdmLesson} from "@/api/admin";
import $ from 'jquery'

export default {
  name: "teachingManage",
  mounted() {
    this.getLessonInfo()
  },
  methods: {
    getLessonInfo() {
      this.initInfo()
    },
    cancelModify() {
      this.makeModifyEmpty()
      this.modifyLessonVisible = false
    },
    cancelAdd() {
      this.makeModifyEmpty()
      this.addLessonVisible = false
    },
    confirmModify() {
      for (let i = 0; i < this.lessonData.length; i++) {
        if (this.lessonToModify.lesson_id === this.lessonData[i].lesson_id) {
          this.lessonData[i].lesson_id = this.lessonToModify.lesson_id
          this.lessonData[i].lesson_name = this.lessonToModify.lesson_name
          this.lessonData[i].lesson_point = this.lessonToModify.lesson_point
          this.lessonData[i].teachers = this.lessonToModify.teachers
          this.lessonData[i].classroom = this.lessonToModify.classroom
          this.lessonData[i].isShared = this.lessonToModify.isShared
        }
      }
      if(updateAdmLesson(this.lessonData)){
        this.$message({
          type: 'success',
          message: '修改成功'
        })
      }
      this.makeModifyEmpty()
      this.modifyLessonVisible = false
    },
    confirmAdd() {
      this.lessonData.push($.extend({}, this.lessonToModify))
      this.addLessonVisible = false
      console.log(this.lessonData)
      if(updateAdmLesson(this.lessonData)){
        this.$message({
          type: 'success',
          message: '添加成功'
        })
      }
      this.makeModifyEmpty()
    },
    makeModifyEmpty() {
      this.lessonToModify.lesson_id = ''
      this.lessonToModify.lesson_name = ''
      this.lessonToModify.lesson_point = ''
      this.lessonToModify.teachers = ''
      this.lessonToModify.classroom = ''
      this.lessonToModify.isShared = ''
    },
    initInfo() {
      let co = 0
      if (!co) {
        for (let i = 0; i < 10; i++) {
          this.lessonData.push({
            lesson_id: '12354',
            lesson_name: '数据集成',
            lesson_point: '2',
            teachers: '刘峰',
            classroom: '教学楼202',
            isShared: '否'
          })
        }
        this.lessonData.push({
          lesson_id: '12354545',
          lesson_name: '数据集成',
          lesson_point: '2',
          teachers: '刘峰',
          classroom: '教学楼202',
          isShared: '否'
        })
        co = 1
        this.lessonData = getStuLessonInfo()
      }
    },
    //todo
    addLesson() {
      this.addLessonVisible = true
    },
    changeLessonInfo(id) {
      this.getCurrentLessonInfo(id)
      this.modifyLessonVisible = true
    },

    getCurrentLessonInfo(id) {
      //获得当前课程信息
      for (let i = 0; i < this.lessonData.length; i++) {
        if (this.lessonData[i].lesson_id === id) {
          this.lessonToModify.lesson_id = this.lessonData[i].lesson_id
          this.lessonToModify.lesson_name = this.lessonData[i].lesson_name
          this.lessonToModify.lesson_point = this.lessonData[i].lesson_point
          this.lessonToModify.teachers = this.lessonData[i].teachers
          this.lessonToModify.classroom = this.lessonData[i].classroom
          this.lessonToModify.isShared = this.lessonData[i].isShared
        }
      }
    },
    deleteChoosedLesson(id) {
      console.log(id)
      this.$confirm(`该操作不可撤销`, '将要删除该条课程信息,是否继续？', {
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
          message: '删除成功'
        })
        updateAdmLesson(this.lessonData)
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '操作已取消'
        })
      })

    }
  },
  data() {
    return {
      labelPosition: 'right',
      addLessonVisible: false,
      modifyLessonVisible: false,
      lessonData: [],
      lessonToModify: {
        lesson_id: '',
        lesson_name: '',
        lesson_point: '',
        teachers: '',
        classroom: '',
        isShared: ''
      }

    }
  }
}
</script>

<style scoped>

</style>