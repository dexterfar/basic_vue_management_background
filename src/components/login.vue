<template>
  <div>
    <v-header></v-header>
    <el-form :model="loginForm" status-icon ref="loginForm" label-width="100px" class="login-form">
      <el-form-item label="账号" prop="username">
        <el-input type="text" v-model="loginForm.phone" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="loginForm.password" autocomplete="off"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('loginForm')"> 提交 </el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import vHeader from "./header";
import { login } from '@/api/userManage';
export default {
  name: "login",
  data() {
    return {
      loginForm: {
        phone: "13272670720",
        password: "",
      },
    };
  },
  components: {
    vHeader,
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        login(this.loginForm).then(res=>{
          let data = res.data;
          if(data.code == 0 && data.message == "success"){
            sessionStorage.setItem('ms_user', '1');
            this.$router.push("/");
          }
          else{
            this.toaster.error("登录失败")
          }
        }).catch(err=>{
          this.toaster.error("登录失败")
          console.log(err);
        })
        return;



        if (valid) {
            console.log(this.$router);
            sessionStorage.setItem('ms_user', '1')
          this.$router.push("/");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    },
  },
  filters: {},
};
</script>
<style scoped>
.login-form {
  width: 500px;
  margin: 0 auto;
  border: 1px solid rgb(214, 214, 214);
  padding: 30px 100px 30px 30px;
  border-radius: 6px;
  box-shadow: 1px 1px 10px rgba(0, 0, 0, 0.1);
  margin-top: 100px;
}
body {
    margin:0;
    padding:0;
}
</style>