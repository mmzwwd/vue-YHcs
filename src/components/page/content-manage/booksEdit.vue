<template>
  <div class='booksEdit'>
      <v-crumbs :list='crumbsList'></v-crumbs>
      <div class="container">
          <div class="head">
                <div class="infon_text">
                    <span class="infon_shu"></span>
                    <span class="infon_text_t">基础信息</span>
                </div>
          </div>
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
                      <el-col :span="4" :offset="1">
                         <el-form-item label="热门图书">
                            <el-checkbox v-model="ruleForm.type"></el-checkbox>
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="作者：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="状态：" prop="date1">
                           <el-select v-model="ruleForm.region" placeholder="请选择">
                              <el-option label="上架" value="shanghai"></el-option>
                              <el-option label="下架" value="beijing"></el-option>
                            </el-select>                           
                        </el-form-item>
                      </el-col>
                      <el-col :span="4" :offset="1">
                         <el-form-item label="新书速递">
                            <el-checkbox v-model="ruleForm.type"></el-checkbox>
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="出版社：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="是否预售：" prop="date1">
                           <el-select v-model="ruleForm.region" placeholder="请选择">
                              <el-option label="是" value="shanghai"></el-option>
                              <el-option label="否" value="beijing"></el-option>
                            </el-select>                       
                        </el-form-item>
                      </el-col>
                      <el-col :span="4" :offset="1">
                         <el-form-item label="好书推荐">
                            <el-checkbox v-model="ruleForm.type"></el-checkbox>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row>
                      <el-col :span="6">
                        <el-form-item label="出版日期：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="文轩ID：" prop="date1">
                        <el-input v-model="ruleForm.name"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="ISBN：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="预售结束时间：" prop="date1">
                           <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.date1" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="中图分类法：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="库存数：" prop="date1">
                        <el-input v-model="ruleForm.name"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="中图分法类名称：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="码洋：" prop="date1">
                        <el-input v-model="ruleForm.name"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="营销分类：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="底价：" prop="date1">
                        <el-input v-model="ruleForm.name"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="字数：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="售价：" prop="date1">
                        <el-input v-model="ruleForm.name"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="页数：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <div class="head">
                      <div class="infon_text">
                          <span class="infon_shu"></span>
                          <span class="infon_text_t">内容信息</span>
                      </div>
                  </div>
                   <el-row>
                      <el-col :span="16">
                        <el-form-item label="封面URL：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button type="primary"><i class="el-icon-view el-icon--left"></i>预览</el-button>
                      </el-col>
                  </el-row>
                  <el-row>
                      <el-col :span="16">
                        <el-form-item label="配图1URL：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button type="primary"><i class="el-icon-view el-icon--left"></i>预览</el-button>
                      </el-col>
                  </el-row>
                  <el-row>
                      <el-col :span="16">
                        <el-form-item label="配图2URL：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button type="primary"><i class="el-icon-view el-icon--left"></i>预览</el-button>
                      </el-col>
                  </el-row>
                  <el-row>
                      <el-col :span="16">
                        <el-form-item label="配图3URL：" prop="name">
                          <el-input v-model="ruleForm.name"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button type="primary"><i class="el-icon-view el-icon--left"></i>预览</el-button>
                      </el-col>
                  </el-row>
                  <el-row>
                      <el-col :span="16">
                        <el-form-item label="配图4URL：" prop="name">
                          <el-input v-model="ruleForm.img"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button type="primary" @click="preview()"><i class="el-icon-view el-icon--left"></i>预览</el-button>
                      </el-col>
                  </el-row>
                  <el-row style="margin-top: 40px;">
                      <el-col :span="11">
                        <el-form-item label="目录信息：" prop="name">
                            <quill-editor ref="myTextEditor" style="width:100%;" v-model="ruleForm.content" :options="editorOption"></quill-editor>
                        </el-form-item>
                      </el-col>
                      <el-col :span="11" :offset="1">
                          <el-form-item label="主编推荐：" prop="name">
                            <quill-editor ref="myTextEditor" v-model="ruleForm.content1" :options="editorOption"></quill-editor>
                         </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row style="margin-top: 40px;">
                      <el-col :span="11">
                        <el-form-item label="作者简介：" prop="name">
                            <quill-editor ref="myTextEditor" style="width:100%;" v-model="ruleForm.content2" :options="editorOption"></quill-editor>
                        </el-form-item>
                      </el-col>
                      <el-col :span="11" :offset="1">
                          <el-form-item label="内容简介：" prop="name">
                            <quill-editor ref="myTextEditor" v-model="ruleForm.content3" :options="editorOption"></quill-editor>
                         </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row style="margin-top: 40px;">
                      <el-col :span="11">
                        <el-form-item label="精彩内容：" prop="name">
                            <quill-editor ref="myTextEditor" style="width:100%;" v-model="ruleForm.content4" :options="editorOption"></quill-editor>
                        </el-form-item>
                      </el-col>
                      <el-col :span="11" :offset="1">
                          <el-form-item label="媒体评论：" prop="name">
                            <quill-editor ref="myTextEditor" v-model="ruleForm.content5" :options="editorOption"></quill-editor>
                         </el-form-item>
                      </el-col>
                  </el-row>
              </el-form>
          </div>
      </div>
      <el-dialog title="预览" :visible.sync="dialogPreview">
         <el-image
          style="width:100%;"
          :src="ruleForm.img"
          fit="contain"></el-image>
      </el-dialog>
  </div>
</template>

<script>
import vCrumbs from '../commonest/crumbs.vue';
import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
export default {
  name: 'booksEdit',
  components: { vCrumbs,quillEditor},
  data(){
    return {
      dialogPreview:false,
      editorOption: {
                    placeholder: 'Hello World'
      },
      crumbsList:[
                {
                    icon:"el-icon-collection",
                    title:"内容管理"
                },{
                    icon:"",
                    title:"图书编辑"
                }
      ],
      ruleForm: {
          name: '',
          date1: '',
          type: '',
          region: '',
          content:'',
          content1:'',
          content2:'',
          content3:'',
          content4:'',
          content5:'',
          img:"https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3889399148,3701279943&fm=26&gp=0.jpg"

      },
      rules: {
        name: [
          { required: true, message: '请输入活动名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
      }
    }
    
  },
  created(){},
  mounted(){},
  methods: {
    preview(){
    this.dialogPreview=true
  }
  }
  
}
</script>
<style>
.booksEdit  .el-select{
    display:block;
  }
</style>
<style  scoped>
.booksEdit{
  position: relative;
}
</style>
