<template>
  <div class="home">
    <el-row class="container">
      <el-col :span="24" class="header">
        <el-col :span="10">
          <div class="tools" @click.prevent="collapse">
            <i class="iconfont percy-icon-ego-menu"></i>
          </div>
        </el-col>
        <el-col :span="4" class="userinfo">
          <el-dropdown trigger="hover">
            <span class="el-dropdown-link userinfo-inner">个人中心</span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>基本资料</el-dropdown-item>
              <el-dropdown-item>修改密码</el-dropdown-item>
              <el-dropdown-item divided @click.native="logout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </el-col>
      </el-col>
      <el-col :span="24" class="main">
        <el-menu
          :default-active="$route.path"
          class="el-menu-vertical-demo"
          :collapse="isCollapse"
          router
          unique-opened
        >
          <el-menu-item index="/index">
          <i class="iconfont percy-icon-shouye"></i>
            <span slot="title">首页</span>
          </el-menu-item>
          <el-submenu index="1">
            <template slot="title">
              <i class="iconfont percy-icon-shu"></i>
              <span slot="title">图书管理</span>
            </template>
            <el-menu-item index="/book/index">图书列表</el-menu-item>
          </el-submenu>
        </el-menu>
        <section class="content-container">
          <div class="grid-content bg-purple-light">
            <el-col :span="24" class="breadcrumb-container">
              <strong class="title">{{$route.name}}</strong>
              <el-breadcrumb separator="/" class="breadcrumb-inner">
                <el-breadcrumb-item v-for="item in $route.matched" :key="item.path">{{ item.name }}</el-breadcrumb-item>
              </el-breadcrumb>
            </el-col>
            <el-col :span="24" class="content-wrapper">
              <transition name="fade" mode="out-in">
                <router-view></router-view>
              </transition>
            </el-col>
          </div>
        </section>
      </el-col>
    </el-row>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
@Component({
  components: {}
})
export default class  extends Vue {
  private isCollapse: boolean = false;
  private collapse() {
      this.isCollapse = !this.isCollapse;
    }
  private logout() {
    this.$confirm("确认退出吗?", "提示", {
      type: "warning"
    })
      .then(() => {
        sessionStorage.removeItem("token");
        this.$router.push("/login");
      })
      .catch((e) => {
        console.log(e);
      });
  }
}
</script>
<style scoped lang="scss">
.iconfont{
    margin-right:6px
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
.container {
  position: absolute;
  top: 0px;
  bottom: 0px;
  width: 100%;
  .header {
    height: 60px;
    line-height: 60px;
    background: #0594cc;  //修改header背景色
    color: #fff;
    .userinfo {
      text-align: right;
      padding-right: 35px;
      float: right;
      .userinfo-inner {
        cursor: pointer;
        color: #fff;
        img {
          width: 40px;
          height: 40px;
          border-radius: 20px;
          margin: 10px 0px 10px 10px;
          float: right;
        }
      }
    }
    .logo {
      //width:230px;
      height: 60px;
      font-size: 22px;
      padding-left: 20px;
      padding-right: 20px;
      border-color: rgba(238, 241, 146, 0.3);
      border-right-width: 1px;
      border-right-style: solid;
      img {
        width: 40px;
        float: left;
        margin: 10px 10px 10px 18px;
      }
      .txt {
        color: #fff;
      }
    }
    .logo-width {
      width: 230px;
    }
    .logo-collapse-width {
      width: 60px;
    }
    .tools {
      padding: 0px 23px;
      width: 14px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
    }
  }
  .main {
    display: flex;
    // background: #324057;
    position: absolute;
    top: 60px;
    bottom: 0px;
    overflow: hidden;
    aside {
      flex: 0 0 230px;
      width: 230px;
      // position: absolute;
      // top: 0px;
      // bottom: 0px;
      .el-menu {
        height: 100%;
      }
      .collapsed {
        width: 60px;
        .item {
          position: relative;
        }
        .submenu {
          position: absolute;
          top: 0px;
          left: 60px;
          z-index: 99999;
          height: auto;
          display: none;
        }
      }
    }
    .menu-collapsed {
      flex: 0 0 60px;
      width: 60px;
    }
    .menu-expanded {
      flex: 0 0 230px;
      width: 230px;
    }
    .content-container {
      // background: #f1f2f7;
      flex: 1;
      // position: absolute;
      // right: 0px;
      // top: 0px;
      // bottom: 0px;
      // left: 230px;
      overflow-y: scroll;
      padding: 20px;
      .breadcrumb-container {
        //margin-bottom: 15px;
        .title {
          width: 200px;
          float: left;
          color: #475669;
        }
        .breadcrumb-inner {
          float: right;
        }
      }
      .content-wrapper {
        background-color: #fff;
        box-sizing: border-box;
      }
      .sidebar-container {
        position: fixed;
        top: 0;
        bottom: 0;
        left: 0;
        width: 220px; // transition: width 10s;
        overflow-y: auto;
        &::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
}
</style>