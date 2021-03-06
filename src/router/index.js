import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            redirect: '/dashboard'
        },
        {
            path: '/',
            component: () => import(/* webpackChunkName: "home" */ '../components/common/Home.vue'),
            meta: { title: '首页' },
            children: [
                {
                    path: '/dashboard',
                    component: () => import(/* webpackChunkName: "dashboard" */ '../components/page/Dashboard.vue'),
                    meta: { title: '系统首页',icon: 'el-icon-lx-home',crumbs:true, }
                },
                {
                    path: '/icon',
                    component: () => import(/* webpackChunkName: "icon" */ '../components/page/Icon.vue'),
                    meta: { title: '自定义图标' }
                },
                {
                    path: '/table',
                    component: () => import(/* webpackChunkName: "table" */ '../components/page/BaseTable.vue'),
                    meta: { title: '基础表格',icon: 'el-icon-lx-cascades', }
                },
                {
                    path: '/content-manage',
                    redirect: "../components/page/content-manage",
                    component: {
                        render (c) {
                            return c('router-view')
                        }
                    },                   
                    meta: { title: '内容管理',icon: 'el-icon-collection', },
                    children: [
                        {
                            path: 'booksList',
                            component: () => import(/* webpackChunkName: "chart" */ '../components/page/content-manage/booksList.vue'),
                            meta: { title: '图书列表',},
                        },
                        {
                            path: 'booksEdit',
                            component: () => import(/* webpackChunkName: "chart" */ '../components/page/content-manage/booksEdit.vue'),
                            meta: { title: '图书编辑', activeMenu: '/content-manage/booksList',}
                        },
                        {
                            path: 'specialList',
                            component: () => import(/* webpackChunkName: "chart" */ '../components/page/content-manage/specialList.vue'),
                            meta: { title: '专题运营'},
                        },
                        {
                            path: 'speciaEdit',
                            component: () => import(/* webpackChunkName: "chart" */ '../components/page/content-manage/speciaEdit.vue'),
                            meta: { title: '专题编辑',activeMenu: '/content-manage/specialList',}
                        },
                        {
                            path: 'speciaAdd',
                            component: () => import(/* webpackChunkName: "chart" */ '../components/page/content-manage/speciaAdd.vue'),
                            meta: { title: '专题新增',activeMenu: '/content-manage/specialList',}
                        },
                    ]

                },
                {
                    path: '/bannerList',
                    component: () => import(/* webpackChunkName: "tabs" */ '../components/page/bannerList.vue'),
                    meta: { title: 'banner列表' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    path: '/form',
                    component: () => import(/* webpackChunkName: "form" */ '../components/page/BaseForm.vue'),
                    meta: { title: '基本表单' }
                },
                {
                    // 富文本编辑器组件
                    path: '/editor',
                    component: () => import(/* webpackChunkName: "editor" */ '../components/page/VueEditor.vue'),
                    meta: { title: '富文本编辑器' }
                },
                {
                    // markdown组件
                    path: '/markdown',
                    component: () => import(/* webpackChunkName: "markdown" */ '../components/page/Markdown.vue'),
                    meta: { title: 'markdown编辑器' }
                },
                {
                    // 图片上传组件
                    path: '/upload',
                    component: () => import(/* webpackChunkName: "upload" */ '../components/page/Upload.vue'),
                    meta: { title: '文件上传' }
                },
                {
                    // vue-schart组件
                    path: '/charts',
                    component: () => import(/* webpackChunkName: "chart" */ '../components/page/BaseCharts.vue'),
                    meta: { title: 'schart图表' }
                },
                {
                    // 拖拽列表组件
                    path: '/drag',
                    component: () => import(/* webpackChunkName: "drag" */ '../components/page/DragList.vue'),
                    meta: { title: '拖拽列表' }
                },
                {
                    // 拖拽Dialog组件
                    path: '/dialog',
                    component: () => import(/* webpackChunkName: "dragdialog" */ '../components/page/DragDialog.vue'),
                    meta: { title: '拖拽弹框' }
                },
                {
                    // 国际化组件
                    path: '/i18n',
                    component: () => import(/* webpackChunkName: "i18n" */ '../components/page/I18n.vue'),
                    meta: { title: '国际化' }
                },
                {
                    // 权限页面
                    path: '/permission',
                    component: () => import(/* webpackChunkName: "permission" */ '../components/page/Permission.vue'),
                    meta: { title: '权限测试', permission: true }
                },
                {
                    path: '/404',
                    component: () => import(/* webpackChunkName: "404" */ '../components/page/404.vue'),
                    meta: { title: '404' }
                },
                {
                    path: '/403',
                    component: () => import(/* webpackChunkName: "403" */ '../components/page/403.vue'),
                    meta: { title: '403' }
                },
                // {
                //     path: '/donate',
                //     component: () => import(/* webpackChunkName: "donate" */ '../components/page/Donate.vue'),
                //     meta: { title: '支持作者' }
                // }
            ]
        },
        {
            path: '/login',
            component: () => import(/* webpackChunkName: "login" */ '../components/page/Login.vue'),
            meta: { title: '登录' }
        },
        {
            path: '*',
            redirect: '/404'
        }
    ],
    scrollBehavior(to, from, saveTop){
        if (saveTop) {
            return saveTop;
        } else {
            //跳转页面保持 滚动条在顶部
            // window.scrollTo(0,0);
            // return {x: 0, y: 0}
        }
    }
});
