<template>
  <el-row>
    <el-col :span="10">
      <div class="grid-content card-left" :style="{backgroundColor:colorStr}">
        <i :class="[iconStr, iconfont, cardLeftIcon]"></i>
      </div>
    </el-col>
    <el-col :span="14">
      <div class="grid-content card-right">
        <div class="card-right-content">
          <div class="card-right-number">{{number}}</div>
          <div class="card-right-msg"><span>{{cardMsg}}</span></div>
        </div>
      </div>
    </el-col>
  </el-row>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
@Component
export default class extends Vue {
  @Prop(String)
  private iconStr!: string;
  @Prop(String)
  private colorStr!: string;
  @Prop()
  private number!: number;
  @Prop(String)
  private cardMsg!: string;
  private iconfont: string = "iconfont";
  private cardLeftIcon: string = "card-left-icon";
}
</script>
<style lang="scss" scoped>
.indexContainer {
  background: #cccccc;
  display: inline;
}
.el-row {
  width: 380px;
  height: 80px;
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple {
  background: #d3dce6;
}
.grid-content {
  border-radius: 4px;
  min-height: 80px;
}
.card-left {
  background: #f93049;
  display: flex;
  justify-content: space-between;
}
.card-right {
  background: #f1f4f7;
}
.card-left-icon {
  font-size: 40px;
  margin-left: 63px;
  margin-top: 20px;
}
.card-right-content{
  padding-left: 20px
}
.card-right-number {
  font-size: 35px;
  height: 50px;
}
.card-right-msg {
  height: 30px;
  span{
    color:#8F8F8F;
  }
}
</style>