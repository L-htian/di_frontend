<template>
  <div class="login_form">
    <h1>教务系统A</h1>
    <h2>Login</h2>
    <el-form class="form">
      <el-form-item label="账号">
        <el-input v-model="account" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import {validate} from "@/api/common";
import {mapGetters, mapMutations, mapActions} from 'vuex'

export default {
  name: "login",
  data() {
    return {
      account: '',
      password: '',
      login_form: {}
    }
  },
  methods: {
    ...mapMutations(['set_account']),
    submitForm() {
      this.login_form = {
        "account": this.account,
        "password": this.password
      }
      let co = validate(this.login_form)
      switch (co) {
        case 0:
          this.$message.error('Please Input Correct Account!');
          break;
        case 1:
          this.set_account(this.account)
          this.$router.push({name: 'stuHome'});
          break;
        case 2:
          this.set_account(this.account)
          this.$router.push({name: 'admHome'});
          break;
        default:
          break;
      }
    }
  }
}
</script>

<style scoped>
.form {
  width: 20%;
  position: relative;
  left: 41%;
}

.login_form {
  text-align: center;
}
</style>