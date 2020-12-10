<template>
    <!-- <div class="crumbs"> -->
      <el-breadcrumb class="app-breadcrumb"  separator="/" v-if="!routeMatched[1].meta.crumbs">
            <transition-group name="breadcrumb">
                        <el-breadcrumb-item v-for="(item, index) in routeMatched" :key="item.meta.title" v-show="index!=0" >
                            <i :class="item.meta.icon"></i>
                            {{item.meta.title}}
                            </el-breadcrumb-item>
            </transition-group>
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
  mounted(){console.log(this.routeMatched)},

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

  /* breadcrumb transition */
.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all .8s;
}

.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(10px);
}

.breadcrumb-move {
  transition: all .5s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>
