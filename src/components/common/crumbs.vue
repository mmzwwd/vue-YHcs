<template>
    <!-- <div class="crumbs"> -->
        <el-breadcrumb  separator="/" v-if="!routeMatched[1].meta.crumbs">
            <el-breadcrumb-item v-for="(item, index) in routeMatched" :key="index" v-show="index!=0" >
                <i :class="item.meta.icon"></i>
                {{item.meta.title}}
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
 computed: {
      ...mapGetters(['routeMatched'])
},
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
