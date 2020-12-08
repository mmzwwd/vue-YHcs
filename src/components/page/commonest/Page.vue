<template>
  <!-- 页码 -->
  <div class="pageblock">
    <el-button size="small" class="topage" @click="toPage" style="margin-left:6px;">确定</el-button>
    <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page="pageData.currentPage" :page-sizes="pageData.pageSizeArr" :page-size="pageData.pageSize" layout="total, sizes, prev, pager, next, jumper" :total="pageData.total" :pager-count="5"></el-pagination>
  </div>
</template>

<script>
export default {
  props: {
    pageData: {
      type: Object,
      required: true,
      pageSize: '',
      currentPage: ''
    },
    func: {
      type: Function,
      required: true
    }
  },
  methods: {
    toPage (val) {
      this.func(this.pageData.pageSize, this.pageData.currentPage);
    },
    handleSizeChange (val) {
      this.pageData.pageSize = val
      this.pageData.currentPage = 1;
      this.func(val, 1);
    },
    handleCurrentChange (val) {
      this.pageData.currentPage = val
      this.func(this.pageData.pageSize, val);
    }
  }
};
</script>
<style>
.pageblock .el-pagination__editor.el-input {
  width: 40px;
}
</style>

