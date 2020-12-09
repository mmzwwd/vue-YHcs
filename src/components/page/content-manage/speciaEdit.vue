<template>
  <div class='speciaEdit'>
        <v-crumbs :list='crumbsList'></v-crumbs>
        <div class="container">
               <div class="form" >
                <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="136px" class="demo-ruleForm">
                    <el-row>
                      <el-col :span="6">
                        <el-form-item label="图书名称：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="更新日期：" prop="date1">
                           <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                    </el-row>
                    <el-row>
                      <el-col :span="6">
                        <el-form-item label="状态：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="专题详情大图：" prop="date1">
                            <div class="content-upload">
                                <div :class="['imgbox',{'imgbox-v':!ruleForm.imageUrl}]">
                                  <el-image class="imgbox-v"   v-show="ruleForm.imageUrl" :src="ruleForm.imageUrl" :preview-src-list="[ruleForm.imageUrl]" alt></el-image>
                                </div>
                                <el-upload class="upload-demo" action="1" :show-file-list="false" :http-request="uploadSectionFile2" :before-upload="beforeAvatarUpload">
                                <!-- :before-upload="beforeAvatarUpload" -->
                                  <el-button slot="trigger" size="small" type="primary">选取文件</el-button>
                                </el-upload>
                            </div>          
                        </el-form-item>
                      </el-col>
                    </el-row>
                     <el-row>
                      <el-col :span="9">
                        <el-form-item label="专题图书：" prop="name">
                        <el-card class="box-card">
                            <div slot="header" class="clearfix">
                                <el-button style="float: right; padding: 3px 0" type="text" @click="dialogVisible = true">新增</el-button>
                            </div>
                            <transition name="el-fade-in-linear">
                             <el-table :data="tableData" border  class="table"   ref="multipleTable"  height="386" header-cell-class-name="table-header">
                                <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
                                <el-table-column prop="money" label="ISBN" align="center"></el-table-column>
                                <el-table-column prop="address" label="图书名称" align="center"></el-table-column>
                                <el-table-column label="封面" align="center">
                                <template slot-scope="scope">
                                    <el-image
                                        class="table-td-thumb"
                                        :src="scope.row.thumb"
                                        :preview-src-list="[scope.row.thumb]"
                                    ></el-image>
                                </template>
                            </el-table-column>                                
                            <el-table-column label="操作" width="100" align="center">
                                    <template slot-scope="scope">
                                        <el-button
                                            type="text"
                                            icon="el-icon-edit"
                                            @click="handleDelete(scope.$index, scope.row)"
                                        >删除</el-button>
                                    </template>
                                </el-table-column>
                            </el-table>
                            </transition>
                            </el-card>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" >
                       <el-form-item label="专题组：" prop="region">
                           <el-select v-model="ruleForm.region" placeholder="请选择">
                              <el-option  label="私有" value="1"></el-option>
                              <el-option  label="公有" value="2"></el-option>
                            </el-select>  
                            <div class="boder-wd" v-show="ruleForm.region=='1'">
                               <el-tag class="boder-tag" :key="tag" v-for="tag in dynamicTags" closable :disable-transitions="false" @close="handleClose(tag)">
                                {{tag}}
                                </el-tag>
                                <el-tag class="boder-tag"  effect="dark">新增</el-tag>
                            </div>                     
                        </el-form-item>
                      </el-col>
                    </el-row>
                </el-form>
          </div>
        </div>
        <el-dialog   title="选择图书" :visible.sync="dialogVisible"   width="30%" >
            <el-table :data="tableData" border  class="tables"   ref="multipleTable"   @selection-change="handleSelectionChange" header-cell-class-name="table-header">
                <el-table-column type="selection" width="55"></el-table-column>
                <el-table-column type="index" label="序号" width="55" align="center"></el-table-column>
                <el-table-column prop="money" label="ISBN" align="center"></el-table-column>
                <el-table-column prop="address" label="图书名称" align="center"></el-table-column>
                <el-table-column label="封面" align="center">
                <template slot-scope="scope">
                    <el-image
                        class="table-td-thumb"
                        :src="scope.row.thumb"
                        :preview-src-list="[scope.row.thumb]"
                    ></el-image>
                </template>
            </el-table-column>                                
            <el-table-column label="操作" width="100" align="center">
                    <template slot-scope="scope">
                        <el-button
                            type="text"
                            icon="el-icon-edit"
                            @click="deleteRow(scope.$index, scope.row)"
                        >删除</el-button>
                    </template>
                </el-table-column>
            </el-table>
            <span slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
            </span>
        </el-dialog>

  </div>
</template>

<script>
import vCrumbs from '../commonest/crumbs.vue';
import { fetchData } from '../../../api/index';
import {uploadFileSingle} from '@/api/index';
export default {
  name: 'speciaEdit',
  components: { vCrumbs},
  data(){
    return {
        multipleSelection:[],
        dialogVisible: false,
        dynamicTags: ['标签一', '标二', '标签三'],
        tableData:[],
        crumbsList:[
            {
                icon:"el-icon-collection",
                title:"内容管理"
            },{
                icon:"",
                title:"专题编辑"
            }
      ],
    ruleForm: {
          name: '',
          imageUrl: '',
          region:'',
          date1: '',
    },
    rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    }
  },
  created(){      this.getData()
},
  mounted(){
  },
  methods: {
      // 删除操作
        handleDelete(index, row) {
            this.tableData.splice(index, 1); 
        },
        //多选
       handleSelectionChange(val) {
        this.multipleSelection = val;
        console.log(this.multipleSelection)
      },
       beforeAvatarUpload(file) {
            console.log(file);
            //格式
            const isJPG = file.type === 'image/jpg' || file.type === 'image/jpeg'|| file.type === 'image/png';
            //图片文件大小限制
            const isLt2M = 5 < file.size / 1024 && file.size / 1024 < 200;
            if (!isJPG) {
                this.$message.error('上传图片格式错误!');
                return false;
            }
             return isJPG;
        },
       //上传图片
        uploadSectionFile2(param) {
            var fileObj = param.file;
            var data = new FormData();
            data.append('imageFile', fileObj);
            //   data.append("projectName", fileObj.name);
            uploadFileSingle(data).then(res => {
                this.ruleForm.imageUrl = res.data.urlPath;
            });
        },
      handleClose(tag) {
        this.dynamicTags.splice(this.dynamicTags.indexOf(tag), 1);
      },
      getData() {
            fetchData(this.query).then(res => {
                console.log(res);
                this.tableData = res.list;
                this.pageTotal = res.pageTotal || 50;
            });
        },
    }
  
}
</script>
<style>
.speciaEdit  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
 .speciaEdit .avatar-uploader .el-upload:hover {
    border-color: #eef6fd;
  }
 .speciaEdit .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100%;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
 .speciaEdit .avatar {
    width: 100%;
    height: 178px;
    display: block;
  }
  .speciaEdit  .el-select{
    /* display:block; */
  }

  .el-upload--text {
    margin: 10px 0 0 0;
    width: 86px;
    height: 33px;
    border: none;
}
.el-icon-upload:before {
    width: 20px;
    height: 20px;
}
</style>
<style  scoped>
.speciaEdit .table{
width: 400px;
}
.speciaEdit .tables{
/* width: 400px; */
}
 .speciaEdit .boder-wd{
/* width: 100%; */
padding: 10px;
border: 1px solid #DCDFE6;
border-radius:6px ;
margin-top: 6px;
display: flex;
flex-wrap: wrap;
flex-direction:row ;
justify-content: flex-start;
}
.speciaEdit .boder-tag{
    margin: 4px ;
}
.speciaEdit .clearfix{
    height: 16px;
}


.content-upload {
    min-width: 250px;
    height: 166px;
    display: flex;
    flex-wrap: nowrap;
    justify-content: space-between;
}
.button-upload {
    color: #fff;
    background-color: #409eff;
    border-color: #409eff;
    font-size: 12px;
    /* position: absolute;
    left: 36px; */
    width: 80px;
    height: 33px;
    border-radius: 3px;
    line-height: 18px;
}
.content-upload .uploadTip {
    width: calc(100% - 160px);
    height: 148px;
    float: right;
    color: #c0c4cc;
    line-height: 22px;
    font-size: 10px;
}
.imgbox {
    display: inline-block;
    border: 1px dashed #dcdfe6;
    width: 148px;
    height: 148px;
    border-radius: 6px;
}
.imgbox-v {
    width: 148px;
    height: 148px;
}
.imgbox img {
    display: block;
    width: 150px;
    height: 148px;
}
</style>
