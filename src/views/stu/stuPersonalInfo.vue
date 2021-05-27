<template>
  <div class="Info">
    <el-form class="form" :label-position="labelPosition" label-width="80px">
      <el-form-item label="学号">
        <el-input :disabled="true" v-model="student_Info.id"></el-input>
      </el-form-item>
      <el-form-item label="姓名">
        <el-input :disabled="true" v-model="student_Info.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input :disabled="true" v-model="student_Info.sex"></el-input>
      </el-form-item>
      <el-form-item label="院系">
        <el-input :disabled="true" v-model="student_Info.department"></el-input>
      </el-form-item>
      <el-form-item label="账户">
        <el-input :disabled="true" v-model="student_Info.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input :disabled="false" v-model="student_Info.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button id="button" round @click="changePassword">修改密码</el-button>
  </div>
</template>

<script>
import {changeStuPassword, getStuInfo} from "@/api/stu";
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "personalInfo",
  mounted() {
    this.getInfo()
  },
  computed: {
    ...mapGetters(['login_account'])
  },
  data() {
    return {
      labelPosition: 'right',
      student_Info: {
        id: 0,
        name: '',
        sex: '',
        department: '',
        account: '',
        password: ''
      },
    }
  },
  methods: {
    ...mapMutations(['set_stuId']),
    getInfo() {
      this.student_Info = {
        id: 181250000,
        name: '刘峰',
        sex: '男',
        department: '软件学院',
        account: '181250000',
        password: '1232456'
      }
      this.set_stuId(this.student_Info.id)
      console.log(this.login_account)
      this.student_Info = getStuInfo(this.login_account)
    },
    changePassword() {
      let re = {
        "account": this.student_Info.account,
        "password": this.student_Info.password
      }
      console.log(re)
      if(changeStuPassword(re)){
        this.$notify({
          title: '修改成功',
          // message: '您成功的修改了您的密码',
          type: 'success'
        });
      }

    }
  }
}
</script>

<style scoped>
.form {
  width: 30%;
  position: fixed;
}

.Info {
  font-size: 120%;
}

#button {
  position: fixed;
  top: 66%;
  left: 27%;
}
</style>