<template>
    <!-- <div class="crumbs"> -->
        <el-breadcrumb  separator="/">
            <el-breadcrumb-item v-for="(item, index) in lists" :key="index" v-show="index!=0" >
                <i :class="item.meta.icon"></i>
                {{item.meta.title}}
                </el-breadcrumb-item>
        </el-breadcrumb>
    <!-- </div> -->
</template>
<script>
export default {
  props: {
    list: {
      type: Array,
      required: true,
      default: () => []
    },
    separator: String
  },
  watch: {
    list(newName, oldName) {
      this.lists=newName
        console.log(newName)
      // ...
    }
  },
  data(){
      return{
          lists:[
             {
                icon: 'el-icon-lx-home',
                index: 'dashboard',
                name: '系统首页'
            },
            {
                icon: 'el-icon-lx-cascades',
                index: 'table',
                name: '基础表格'
            },
          ]
      }
  }
}
</script>
<style scoped>
.el-breadcrumb {
    line-height: 44px;
    /* background-color: #fff; */
    border: none;
    height: 44px;
    width: 100%;
    box-sizing: border-box;
    font-family: MicrosoftYaHei;
    color: #444;
    font-size: 14px;
    padding-left: 10px;
    margin-top: 10px;
}
</style>
