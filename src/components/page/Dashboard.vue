<template>
    <div class="dashboard">
        <p class="dashboard-p">数据总览</p>
        <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4"><div class="grid-content bg-purple-ts"><p>12341242本</p><div class="divider"></div><p>图书总量</p></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-jg"><p>12341242本</p><div class="divider"></div><p>机构总量</p></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-dd"><p>12341242本</p><div class="divider"></div><p>订单总量</p></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-yh"><p>12341242本</p><div class="divider"></div><p>开通用户</p></div></el-col>
        </el-row>
        <el-row type="flex" class="row-bg" justify="space-between">
            <el-col :span="4"><div class="grid-content bg-purple-zt"><p>12341242本</p><div class="divider"></div><p>专题总量</p></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-yy"><p>12341242本</p><div class="divider"></div><p>运营总量</p></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-tsyy"><p>12341242本</p><div class="divider"></div><p>套书运营</p></div></el-col>
            <el-col :span="4"><div class="grid-content bg-purple-rm"><p>12341242本</p><div class="divider"></div><p>热门分类</p></div></el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    name: 'dashboard',
    data() {
        return {
             name: localStorage.getItem('ms_username'),
        };
    },
    components: {
        
    },
    computed: {
        role() {
            return this.name === 'admin' ? '超级管理员' : '普通用户';
        }
    },
    methods: {
        changeDate() {
            const now = new Date().getTime();
            this.data.forEach((item, index) => {
                const date = new Date(now - (6 - index) * 86400000);
                item.name = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
            });
        }
    }
};
</script>


<style scoped>
.dashboard{
    margin-left: 10px;
}
.dashboard-p{
    margin-top: 40px;
    margin-bottom: 20px;
    font-size: 20px;
    color: #409EFF;
}




.el-row {
    margin-bottom: 20px;
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-ts{
    background: #409EFF;
  }
  .bg-purple-jg {
    background: #8797F0;
  }
  .bg-purple-dd {
    background: #F89803;
  }
  .bg-purple-yh{
    background: #EA6140;
  }
  .bg-purple-zt {
    background: #868282;
  }
  .bg-purple-yy {
    background: #EC8A58;
  }
  .bg-purple-tsyy {
    background: #80C3E8;
  }
  .bg-purple-rm {
    background: #6A03F8;
  }

  .grid-content {
    border-radius: 4px;
    min-height: 136px;
    color: #fff;
  }
  .grid-content p{
      text-align: center;
      height: 66px;
      line-height: 66px;
      font-size: 18px;
  }
   .divider{
       width: 80%;
       height: 4px;
       margin: 0 auto;
       background: #fff;
   }
  .row-bg {
    padding: 10px 0;
    /* background-color: #f9fafc; */
    width: 88%;
  }
</style>
