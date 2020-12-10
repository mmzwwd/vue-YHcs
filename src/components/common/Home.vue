<template>
    <div class="wrapper">
        <v-head></v-head>
        <v-sidebar></v-sidebar>
        <div class="content-box" :class="{'content-collapse':collapse}">
            <!-- <v-tags></v-tags> -->
            <div class="content-back">
                 <v-crumbs :list='list' v-show="cartoon"></v-crumbs>
                <div class="content">
                    <transition name="el-zoom-in-bottom" mode="out-in">
                        <keep-alive :include="tagsList">
                            <router-view></router-view>
                        </keep-alive>
                    </transition>
                    <el-backtop target=".content"></el-backtop>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vHead from './Header.vue';
import vSidebar from './Sidebar.vue';
import vTags from './Tags.vue';
import vCrumbs from './crumbs.vue';
import bus from './bus';
import Cookies from 'js-cookie';

export default {
    data() {
        return {
            cartoon:true,
            tagsList: [],
            collapse: false
        };
    },
    components: {
        vHead,
        vSidebar,
        vCrumbs,
        vTags,
    },
    computed: {
        list () {
            this.$store.dispatch('setRouteMatched', this.$route.matched)
            // console.log(this.$route.matched)
            return this.$route.matched
        },
    },
    created() {
        bus.$on('collapse-content', msg => {
            this.collapse = msg;
        });

        // 只有在标签页列表里的页面才使用keep-alive，即关闭标签之后就不保存到内存中了。
        bus.$on('tags', msg => {
            let arr = [];
            for (let i = 0, len = msg.length; i < len; i++) {
                msg[i].name && arr.push(msg[i].name);
            }
            this.tagsList = arr;
        });
    }
};
</script>
