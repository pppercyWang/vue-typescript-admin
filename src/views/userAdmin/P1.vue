<template>
  <div>
    <section>
      <el-col :span="24" class="toolbar" style="padding-bottom: 0px;">
        <el-form :inline="true">
          <el-form-item>
            <el-button size="small" plain type="success" @click="addBook()">添加图书</el-button>
          </el-form-item>
        </el-form>
      </el-col>
      <el-table style="font-size: 13px" :data="bookListData" highlight-current-row>
        <el-table-column label="序号" type="index" width="80px" align="center">
          <template slot-scope="scope">
            <span>{{(page - 1) * size + scope.$index + 1}}</span>
          </template>
        </el-table-column>
        <el-table-column prop="Name" label="书名" align="center"></el-table-column>
        <el-table-column prop="Author" label="作者" align="center"></el-table-column>
        <el-table-column prop="Type" label="类型" align="center"></el-table-column>
        <el-table-column prop="Count" label="库存" align="center"></el-table-column>
        <el-table-column class="oprations" label="操作" width="290px" align="center">
          <template slot-scope="scope">
            <el-button type="primary" size="mini" @click="editBook(scope.row)">编辑</el-button>
            <el-button type="danger" size="mini" @click="delBook(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
      <el-col :span="24" class="toolbar">
        <div class="block" style="float:right;">
          <el-pagination
            @size-change="handleSizeChange"
            @current-change="handlePageChange"
            :current-page.sync="page"
            :page-sizes="[10, 20, 30]"
            :page-size="size"
            layout="total, sizes, prev, pager, next, jumper"
            :total="total"
          ></el-pagination>
        </div>
      </el-col>
    </section>
  </div>
</template>
<script lang='ts'>
import { Component, Vue, Watch, Prop } from "vue-property-decorator";
import { Action, Mutation, State, Getter } from "vuex-class";
import { Pagination } from "@/interface";
@Component({
  components: {}
})
export default class extends Vue {
  @Action("bookList") private actionBookList;
  @Action("clearBookList") private actionClearBookList;
  @Getter("bookList") private getterBookList;
  private bookListData = [];
  private book = {};
  private page: number = 1;
  private size: number = 10;
  private total: number = 0;
  private addFlag: boolean = false;
  private dialogVisible: boolean = false;
  private addBook() {
    this.$message.success("执行新增操作");
  }
  private editBook(row) {
    this.$message.success("执行编辑操作");
  }
  private delBook(row) {
    this.$message.success("执行删除操作");
  }
  private handleSizeChange(val) {
    this.size = val;
    this.actionClearBookList(); // 注意每次更改页面和更改Size都需要Clear旧数据，还有修改，新增，删除某条数据时
    this.getBookList();
  }
  private handlePageChange(val) {
    this.page = val;
    this.actionClearBookList();
    this.getBookList();
  }
  private async getBookList() {
    if (JSON.stringify(this.getterBookList) === "{}") {
      try {
        await this.actionBookList({
          page: this.page,
          size: this.size
        } as Pagination); // 传参时会检查类型
        this.total = this.getterBookList.Total;
        this.bookListData = this.getterBookList.List;
      } catch (e) {
        console.log(e);
      }
    } else {
      console.log("store中已储存bookList数据");
      this.page = this.getterBookList.Page;
      this.size = this.getterBookList.Size;
      this.total = this.getterBookList.Total;
      this.bookListData = this.getterBookList.List;
    }
  }
  private created() {
    this.getBookList();
  }
}
</script>
<style lang="scss" scoped>
</style>