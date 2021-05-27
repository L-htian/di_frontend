<template>
  <div class="Info">
    <el-form class="form" :label-position="labelPosition" label-width="80px">
      <el-form-item label="姓名">
        <el-input :disabled="true" v-model="admin_Info.name"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-input :disabled="true" v-model="admin_Info.sex"></el-input>
      </el-form-item>
      <el-form-item label="账户">
        <el-input :disabled="true" v-model="admin_Info.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input :disabled="false" v-model="admin_Info.password"></el-input>
      </el-form-item>
    </el-form>
    <el-button id="button" round @click="changePassword">修改密码</el-button>
  </div>
</template>

<script>
import {mapGetters, mapMutations, mapActions} from 'vuex'
import {changeAdmPassword, getAdmInfo} from "@/api/admin";

export default {
  name: "admPersonalInfo",
  computed: {
    ...mapGetters(['login_account'])
  },
  mounted() {
    this.getInfo()
  },
  data() {
    return {
      labelPosition:'right',
      admin_Info: {
        name: '',
        sex: '',
        account: '',
        password: ''
      }
    }
  },
  methods: {
    getInfo() {
      this.admin_Info = {
        name: '刘峰',
        sex: '男',
        account: '181250000',
        password: '123456'
      }
      this.admin_Info = getAdmInfo(this.login_account)
    },
    changePassword() {
      let re = {
        "account": this.admin_Info.account,
        "password": this.admin_Info.password
      }
      console.log(re)
      if(changeAdmPassword(re)){
        this.$notify({
          title: '修改成功',
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
  top: 50%;
  left: 27%;
}
</style>