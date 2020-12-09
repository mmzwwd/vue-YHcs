<template>
  <div >
    <div class="booksList"   v-if="!sub">
            <v-crumbs :list='crumbsList'></v-crumbs>
            <div class="container">
                <div class="handle-box">
                    <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                    <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                </div>
                <el-table :data="tableData" border   class="table"   ref="multipleTable"   header-cell-class-name="table-header">
                    <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
                    <el-table-column prop="name" label="专题名称" align="center"></el-table-column>
                    <el-table-column label="图书数量" align="center">
                        <template slot-scope="scope">￥{{scope.row.money}}</template>
                    </el-table-column>
                    <el-table-column prop="address" label="状态" align="center"></el-table-column>
                    <el-table-column prop="date" label="更新时间" align="center"></el-table-column>
                    <el-table-column label="操作" width="180" align="center">
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                icon="el-icon-edit"
                                @click="deleteRow(scope.$index, scope.row)"
                            >修改</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination">
                            <page-unit :pageData="pageData" :func="getData"></page-unit>
                </div>
            </div>
    </div>
    <div v-else>
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { fetchData } from '../../../api/index';
import pageUnit from '../commonest/Page';
import vCrumbs from '../commonest/crumbs.vue';

export default {
    name: 'basetable',
    components: { pageUnit ,vCrumbs},
    data() {
        return {
            crumbsList:[
                {
                    icon:"el-icon-collection",
                    title:"内容管理"
                },{
                    icon:"",
                    title:"专题运营"
                }
            ],
            sub: this.$route.meta.isSub,
            pageData: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
                pageSizeArr: [5, 10, 20]
            },
            query: {
                name: '',
                pageIndex: 1,
                pageSize: 10
            },
            tableData: [],
            multipleSelection: [],
            delList: [],
            editVisible: false,
            pageTotal: 0,
            form: {},
            idx: -1,
            id: -1
        };
    },
        watch: {
    '$route':'getPath'
    },
    created() {
        console.log(this.$route.meta.isSub)
        this.getData();
    },
    computed: {
        list () {
            this.$store.dispatch('setRouteMatched', this.$route.matched)
            console.log(this.$route.matched)
            return this.$route.matched
        },
    },
    methods: {
         getPath(){
      // console.log(this.$route.meta.isSub)
      this.sub=this.$route.meta.isSub
    },
        deleteRow(ids, typp) {
            this.$router.push({ path: '/speciaEdit', query: { id: ids, } });
        },
        // 获取 easy-mock 的模拟数据
        getData() {
            fetchData(this.query).then(res => {
                console.log(res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
        // 触发搜索按钮
        handleSearch() {
            this.$set(this.query, 'pageIndex', 1);
            this.getData();
        },
        // 删除操作
        // handleDelete(index, row) {
        //     // 二次确认删除
        //     this.$confirm('确定要删除吗？', '提示', {
        //         type: 'warning'
        //     })
        //         .then(() => {
        //             this.$message.success('删除成功');
        //             this.tableData.splice(index, 1);
        //         })
        //         .catch(() => {});
        // },
        // 多选操作
        // handleSelectionChange(val) {
        //     this.multipleSelection = val;
        // },
        delAllSelection() {
            const length = this.multipleSelection.length;
            let str = '';
            this.delList = this.delList.concat(this.multipleSelection);
            for (let i = 0; i < length; i++) {
                str += this.multipleSelection[i].name + ' ';
            }
            this.$message.error(`删除了${str}`);
            this.multipleSelection = [];
        },
        // 编辑操作
        handleEdit(index, row) {
            this.idx = index;
            this.form = row;
            this.editVisible = true;
        },
        // 保存编辑
        saveEdit() {
            this.editVisible = false;
            this.$message.success(`修改第 ${this.idx + 1} 行成功`);
            this.$set(this.tableData, this.idx, this.form);
        },
        // 分页导航
        handlePageChange(val) {
            this.$set(this.query, 'pageIndex', val);
            this.getData();
        }
    }
};
</script>
<style  scoped>
.handle-box {
    margin-bottom: 20px;
}

.handle-select {
    width: 120px;
}

.handle-input {
    width: 300px;
    display: inline-block;
}
.table {
    width: 100%;
    font-size: 14px;
}
.red {
    color: #ff0000;
}
.mr10 {
    margin-right: 10px;
}
.table-td-thumb {
    display: block;
    margin: auto;
    width: 40px;
    height: 40px;
}
</style>
