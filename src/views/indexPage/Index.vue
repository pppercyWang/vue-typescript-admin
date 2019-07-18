<template>
  <div calss="index-container">
    <div class="content">
      <div class="card-wrap">
        <div class="card-row">
          <card
            class="my-card"
            iconStr="percy-icon-085shucezhongxin"
            colorStr="#F93049"
            number="4"
            cardMsg="图书总计"
          ></card>
          <card
            class="my-card"
            iconStr="percy-icon-jiebei"
            colorStr="#1EBFAE"
            number="5"
            cardMsg="今日借书"
          ></card>
          <card
            class="my-card"
            iconStr="percy-icon-restore"
            colorStr="#FFB53E"
            number="6"
            cardMsg="今日还书"
          ></card>
          <card
            class="my-card"
            iconStr="percy-icon-renshu"
            colorStr="#30A5FF"
            number="2"
            cardMsg="到店人数"
          ></card>
        </div>
        <div class="card-row"></div>
      </div>
      <div class="notify-wrap">
        <div class="notify-header">
          <i class="iconfont percy-icon-tongzhi"></i>
          <span>最新通告</span>
        </div>
      </div>
    </div>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import Card from "@/components/index/Card.vue";
@Component({
  components: {
    card: Card
  }
})
export default class extends Vue {
}
</script>
<style lang="scss" scoped>
.card-row {
  display: flex;
  justify-content: space-between;
}
.content {
  margin-top: 30px;
}
.card-wrap {
  margin-bottom: 30px;
}
.notify-header {
  background: #f1f4f7;
  i {
    font-size: 40px;
    margin-left: 30px;
  }
  span {
    padding-left: 15px;
    font-size: 30px;
    padding-bottom: 15px;
  }
}
</style>