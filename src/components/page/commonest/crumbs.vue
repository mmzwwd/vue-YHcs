<template>
    <!-- <div class="crumbs"> -->
        <el-breadcrumb  separator="/" >
            <el-breadcrumb-item v-for="(item, index) in list" :key="index" >
                <i :class="item.icon"></i>
                {{item.title}}
                </el-breadcrumb-item>
        </el-breadcrumb>
    <!-- </div> -->
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    separator: String
  },
      created() {
console.log(this.list)
      }
}
</script>
<style scoped>
.el-breadcrumb {
    /* line-height: 38px; */
    /* background-color: #fff; */
    border: none;
    /* height: 38px; */
    width: 100%;
    box-sizing: border-box;
    font-family: MicrosoftYaHei;
    color: #444;
    font-size: 14px;
    padding-left: 10px;
    margin: 10px 0;
}
</style>
