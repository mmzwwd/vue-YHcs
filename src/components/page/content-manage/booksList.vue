<template>
  <div >
    <div class="booksList" >
            <div class="container">
                <div class="handle-box">
                    <el-input v-model="query.name" placeholder="用户名" class="handle-input mr10"></el-input>
                    <el-button type="primary" icon="el-icon-search" @click="handleSearch">搜索</el-button>
                </div>
                <el-table :data="tableData" border   class="table"   ref="multipleTable"   header-cell-class-name="table-header">
                    <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
                    <el-table-column prop="title" label="图书名称" align="center"></el-table-column>
                    <el-table-column prop="barcode" label="ISBN" align="center"> </el-table-column>
                    <el-table-column prop="bookId" label="文选ID" align="center"></el-table-column>
                    <el-table-column prop="date" label="更新时间" align="center"></el-table-column>
                    <el-table-column prop="clc" label="中图分类" align="center">
                         <template slot-scope="scope">
                            <span v-if="scope.row.clc=='null'">---</span>
                            <span v-else>{{scope.row.clc}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column prop="author" label="作者" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.author=='null'">---</span>
                            <span v-else>{{scope.row.author}}</span>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="180" align="center">
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                icon="el-icon-edit"
                                @click="deleteRow(scope.$index, scope.row)"
                            >修改</el-button>
                            <!-- <el-button
                                type="text"
                                icon="el-icon-delete"
                                class="red"
                                @click="handleDelete(scope.$index, scope.row)"
                            >删除</el-button> -->
                        </template>
                    </el-table-column>
                </el-table>
                <div class="pagination">
                            <page-unit :pageData="pageData" :func="getData"></page-unit>
                </div>
            </div>
    </div>
  </div>
</template>

<script>
import { fetchData,esSearchPage } from '../../../api/index';
import pageUnit from '../commonest/Page';

export default {
    name: 'basetable',
    components: { pageUnit },
    data() {
        return {
            pageData: {
                pageSize: 10,
                currentPage: 1,
                total: 0,
                pageSizeArr: [5, 10, 20]
            },
            query:{
                name:"",
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
    created() {
        // console.log(this.$route.meta.isSub)
        this.getData();
    },
    computed: {
        list () {
            this.$store.dispatch('setRouteMatched', this.$route.matched)
            // console.log(this.$route.matched)
            return this.$route.matched
        },
    },
    methods: {
        deleteRow(ids, row) {
            this.$router.push({ path: '/content-manage/booksEdit', query: { id: row.bookId, } });
        },
        // 获取 书籍列表的数据
        getData() {
            let data ={
                page:this.pageData.currentPage,
                pageSize:this.pageData.pageSize
            }
            esSearchPage(data).then(res => {
                 console.log(res);
                this.tableData = res.res.object;
                this.pageData.total=res.res.totalNum
            });
        },
        // 触发搜索按钮
        handleSearch() {
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
