<template>
  <el-form
    label-position="left"
    label-width="0px"
    class="demo-ruleForm login-container"
  >
    <h3 class="title">用户登录</h3>
    <el-form-item >
      <el-input type="text" v-model="user" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item >
      <el-input type="password" v-model="pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item style="width:100%;">
      <el-button
        type="primary"
        style="width:100%;"
        @click.native.prevent="checkUser"
      >登录</el-button>
    </el-form-item>
  </el-form>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
@Component({
  components: {}
})
export default class  extends Vue {
  private user: string = 'admin';
  private pwd: string = 'admin';
  private isCollapse: boolean = false;
  private checkUser() {
    if (this.user === 'admin' && this.pwd === 'admin') {
      sessionStorage.setItem('token', 'token-fake');
      this.$router.push({path: '/page1'});
    }
  }
}
</script>
<style lang="scss" scoped>
.login-container {
  /*box-shadow: 0 0px 8px 0 rgba(0, 0, 0, 0.06), 0 1px 0px 0 rgba(0, 0, 0, 0.02);*/
  -webkit-border-radius: 5px;
  border-radius: 5px;
  -moz-border-radius: 5px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 350px;
  padding: 35px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
  .title {
    margin: 0px auto 40px auto;
    text-align: center;
    color: #505458;
  }
}
</style>