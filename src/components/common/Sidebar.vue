<template>
    <div class="sidebar">
        <el-menu
            class="sidebar-el-menu"
            :default-active="activeIndex"
            @select="handleSelect"
            :collapse="collapse"
            active-text-color="#409EFF"
            unique-opened
            router
        >
        <!-- background-color="#324157"
            text-color="#bfcbd9"
            active-text-color="#20a0ff" -->
           <template v-for="item in items">
                <template v-if="item.subs">
                    <el-submenu :index="item.index" :key="item.index">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <span slot="title">{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-submenu
                                v-if="subItem.subs"
                                :index="subItem.index"
                                :key="subItem.index"
                            >
                                <template slot="title">{{ subItem.title }}</template>
                                <el-menu-item
                                    v-for="(threeItem,i) in subItem.subs"
                                    :key="i"
                                    :index="threeItem.index"
                                >{{ threeItem.title }}</el-menu-item>
                            </el-submenu>
                            <el-menu-item
                                v-else
                                :index="subItem.index"
                                :key="subItem.index"
                            >{{ subItem.title }}</el-menu-item>
                        </template>
                    </el-submenu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <i :class="item.icon"></i>
                        <span slot="title">{{ item.title }}</span>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script>
import bus from '../common/bus';
import routerUrl from '../common/routePower';
export default {
    data() {
        return {
            activeIndex: '/',
            collapse: false,
            items: []
        };
    },
    computed: {
        onRoutes() {
            return this.$route.path.replace('/', '');
        }
    },
    watch: {
	'$route' () {
        // console.log(this.activeIndex)
        this.activeIndex = this.$route.matched[1].path.replace('/', '')
        // console.log(this.activeIndex)
		this.handleSelect(this.activeIndex)
       }
    },
    created() {
         this.items=routerUrl.items;
        // 通过 Event Bus 进行组件间通信，来折叠侧边栏
        bus.$on('collapse', msg => {
            this.collapse = msg;
            bus.$emit('collapse-content', msg);
        });
    },
    mounted () {
        // console.log(this.$route)
        // console.log(this.$route.matched[1].path.replace('/', ''))
         let  index=this.$route.matched.length-1
        console.log( this.$route.matched[index].path)
        this.activeIndex = this.$route.matched[1].path.replace('/', '')
    },
     methods: {
        handleSelect (index) {
            console.log(index)
            this.activeIndex = index
        }
    },
};
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}
.sidebar::-webkit-scrollbar {
    width: 0;
}
.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}
.sidebar > ul {
    height: 100%;
}
</style>
