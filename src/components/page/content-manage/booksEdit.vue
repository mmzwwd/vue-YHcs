<template>
  <div class='booksEdit' ref="main_content"> 
    <sticky-slot class="stickyTop" >
                <div class="stickyTop-head">
                    <el-button size="small"  type="primary" >保存</el-button>
                    <el-button size="small"  style="margin-left:50px;" @click="cancel" type="primary" plain>返回</el-button>
                </div>
      </sticky-slot>
      <div class="container" style="padding-top:0;">
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
                        <el-form-item label="图书名称：" prop="title">
                          <el-input v-model="ruleForm.title"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="更新日期：" prop="updateTime">
                           <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.updateTime" style="width: 100%;"></el-date-picker>
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
                        <el-form-item label="作者：" prop="shopItemAttribute.author">
                          <el-input v-model="ruleForm.shopItemAttribute.author"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="状态：" prop="onShelf">
                           <el-select v-model="ruleForm.onShelf" placeholder="请选择">
                              <el-option label="上架" :value="true"></el-option>
                              <el-option label="下架" :value="false"></el-option>
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
                        <el-form-item label="出版社：" prop="shopItemAttribute.publishHouse">
                          <el-input v-model="ruleForm.shopItemAttribute.publishHouse"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="是否预售：" prop="presell">
                           <el-select v-model="ruleForm.presell" placeholder="请选择">
                              <el-option label="是" :value="true"></el-option>
                              <el-option label="否" :value="false"></el-option>
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
                        <el-form-item label="出版日期：" prop="shopItemAttribute.publishDate">
                          <el-input v-model="ruleForm.shopItemAttribute.publishDate"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="文轩ID：" prop="shopItemPrice.itemId">
                        <el-input v-model="ruleForm.shopItemPrice.itemId"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="ISBN：" prop="barcode">
                          <el-input v-model="ruleForm.barcode"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="预售结束时间：" prop="presellTime">
                           <el-date-picker type="datetime" placeholder="选择日期" v-model="ruleForm.presellTime" style="width: 100%;"></el-date-picker>
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="中图分类法：" prop="clc">
                          <el-input v-model="ruleForm.clc"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="库存数：" prop="stock">
                        <el-input v-model="ruleForm.stock"></el-input>                  
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
                        <el-form-item label="码洋：" prop="listPrice">
                        <el-input v-model="ruleForm.listPrice"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="营销分类：" prop="ocName">
                          <el-input v-model="ruleForm.ocName"></el-input>
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
                        <el-form-item label="字数：" prop="shopItemAttribute.wordsNum">
                          <el-input v-model="ruleForm.shopItemAttribute.wordsNum"></el-input>
                        </el-form-item>
                      </el-col>
                      <el-col :span="6" :offset="3">
                        <el-form-item label="售价：" prop="shopItemPrice.sellPrice">
                        <el-input v-model="ruleForm.shopItemPrice.sellPrice"></el-input>                  
                        </el-form-item>
                      </el-col>
                  </el-row>
                   <el-row>
                      <el-col :span="6">
                        <el-form-item label="页数：" prop="pageNum">
                          <el-input v-model="ruleForm.pageNum"></el-input>
                        </el-form-item>
                      </el-col>
                  </el-row>
                  <div class="head">
                      <div class="infon_text">
                          <span class="infon_shu"></span>
                          <span class="infon_text_t">内容信息</span>
                      </div>
                  </div>
                  <el-row v-for="(item,index) in ruleForm.shopItemImages" :key="index">
                      <el-col :span="10" >
                        <el-form-item :label="item.imageType=='HOME_IMAGE'? '首图：': item.imageType=='ATTACHED_IMAGE' ?'副图：' :item.imageType=='EXCERPT_FIGURE'?  '书摘插图：':item.imageType=='LARGE_IMAGE'?'大拉页图：':''" prop="name">
                          <!-- <el-input v-model="item.winxuanImageUrl"></el-input> -->
                          <el-button type="text" disabled>{{item.winxuanImageUrl}}</el-button>
                        </el-form-item>
                      </el-col>
                      <el-col :span="3" :offset="1">
                        <el-button type="primary" @click="preview(item.winxuanImageUrl)"><i class="el-icon-view el-icon--left"></i>预览</el-button>
                      </el-col>
                  </el-row>
                  <el-row style="margin-top: 40px;">
                      <el-col :span="11">
                        <el-form-item label="目录信息：">
                            <quill-editor ref="myTextEditor1" style="width:100%;height:520px;" v-model="ruleForm.shopItemAttribute.catalog"  :options="editorOption"></quill-editor>
                        </el-form-item>
                      </el-col>
                      <el-col :span="11" :offset="1">
                          <el-form-item label="主编推荐：" >
                            <quill-editor ref="myTextEditor2" style="width:100%;height:520px;" v-model="ruleForm.shopItemAttribute.editorRecommendation" :options="editorOption"></quill-editor>
                         </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row style="margin-top: 40px;">
                      <el-col :span="11">
                        <el-form-item label="作者简介：" >
                            <quill-editor ref="myTextEditor3" style="width:100%;height:520px;" v-model="ruleForm.shopItemAttribute.authorIntroduce" :options="editorOption"></quill-editor>
                        </el-form-item>
                      </el-col>
                      <el-col :span="11" :offset="1">
                          <el-form-item label="内容简介：" >
                            <quill-editor ref="myTextEditor4" style="width:100%;height:520px;" v-model="ruleForm.shopItemAttribute.contentIntroduce" :options="editorOption"></quill-editor>
                         </el-form-item>
                      </el-col>
                  </el-row>
                  <el-row style="margin-top: 40px;">
                      <el-col :span="11">
                        <el-form-item label="精彩内容：">
                            <quill-editor ref="myTextEditor5" style="width:100%;height:520px;" v-model="ruleForm.shopItemAttribute.preface" :options="editorOption"></quill-editor>
                        </el-form-item>
                      </el-col>
                      <el-col :span="11" :offset="1">
                          <el-form-item label="媒体评论：" >
                            <quill-editor ref="myTextEditor6" style="width:100%;height:520px;" v-model="ruleForm.shopItemAttribute.mediaComment" :options="editorOption"></quill-editor>
                         </el-form-item>
                      </el-col>
                  </el-row>
              </el-form>
          </div>
      </div>
      <el-dialog title="预览" :visible.sync="dialogPreview">
         <el-image
          style="width:100%;"
          :src="imgScreen"
          fit="contain"></el-image>
      </el-dialog>
  </div>
</template>

<script>
import 'quill/dist/quill.core.css';
    import 'quill/dist/quill.snow.css';
    import 'quill/dist/quill.bubble.css';
    import { quillEditor } from 'vue-quill-editor';
import stickySlot from '../commonest/stickySlot.vue'
import { wenxuanBook } from '../../../api/index';
export default {
  name: 'booksEdit',
  components: { quillEditor,stickySlot},
  data(){
    return {
      dialogPreview:false,
      editorOption: {
        placeholder: 'Hello World'
      },
      imgScreen:"",
      ruleForm: {
      temId: 10026077,
      outItemId: null,
      title: "男人和女人的故事:日本古典文学鉴赏/[日)山口仲美 ",
      sellingPoints: null,
      freightFree: false,
      freight: null,
      presell: false,
      presellTime: null,
      onShelf: true,
      stock: 3,
      listPrice: 21.0,
      complexType: "SKU",
      barcode: "9787100036849",
      ocCode: "MC130501",
      ocName: "外国现当代文学",
      scCode: null,
      scName: null,
      shopItemImages: [{
        winxuanImageUrl: "http://img2.winxuancdn.com/6077/10026077_800x800.jpg?1605494702923",
        imageType: "HOME_IMAGE",
        index: "0",
        createTime: "2020-11-19 11:28:19",
        updateTime: "2020-11-19 11:28:19",
        itemId: 10026077
      }],
      shopItemAttribute: {
        editorRecommendation: null,
        contentIntroduce: null,
        catalog: null,
        digest: null,
        authorIntroduce: null,
        preface: null,
        mediaComment: null,
        description: null,
        author: "[日]山口仲美",
        edition: 1,
        impression: 1,
        publishHouse: "商务印书馆",
        publishDate: "2004-12-01T00:00:00.000+08:00",
        printingDate: "2004-12-01T00:00:00.000+08:00",
        size: "大32开",
        binding: "平装",
        wordsNum: null,
        pageNum: null,
        clc: null
      },
      shopItemPrice: {
        itemId: 10026077,
        settlePrice: 14.7,
        sellPrice: 16.8
      },
        createTime: "2020-11-19 11:28:19",
        updateTime:"2020-11-19 11:28:19"
    
      },
      rules: {
        // name: [
        //   { required: true, message: '请输入活动名称', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
        // 'shopItemAttribute.publishHouse':[
        //   { required: true, message: '请输入出版社', trigger: 'blur' },
        //   { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        // ],
      }
    }
    
  },
  created(){},
  mounted(){
    this.Edit()
    console.log(this.$route.query.id)
  },
  methods: {
          onEditorBlur(){//失去焦点事件
          console.log('失去焦点事件')
          // window.scrollTo(0,0);
      },
      onEditorFocus(){//获得焦点事件
                console.log('获得焦点事件')
      },
      onEditorChange(){//内容改变事件
                console.log('内容改变事件')
      },
     cancel(){
       this.$router.go(-1);
      },
      Edit(){
        window.scrollTo(0,0);
        let data=this.$route.query.id
        wenxuanBook(data).then(res => {
          this.ruleForm=res.res
          //解决自动获取焦点，页面自动滚动
          this.$refs.myTextEditor1.quill.enable(false);  
          this.$refs.myTextEditor2.quill.enable(false);   
          this.$refs.myTextEditor3.quill.enable(false);   
          this.$refs.myTextEditor4.quill.enable(false);   
          this.$refs.myTextEditor5.quill.enable(false);   
          this.$refs.myTextEditor6.quill.enable(false);   
         setTimeout(()=>{
              this.$refs.myTextEditor1.quill.enable(true);
              this.$refs.myTextEditor2.quill.enable(true);
              this.$refs.myTextEditor3.quill.enable(true);
              this.$refs.myTextEditor4.quill.enable(true);
              this.$refs.myTextEditor5.quill.enable(true);
              this.$refs.myTextEditor6.quill.enable(true);
            },1000);


        })
      },
    preview(imgs){
    this.imgScreen=imgs
    this.dialogPreview=true
  }
  }
  
}
</script>
<style>
.booksEdit  .el-select{
    display:block;
  }
    .edit_container {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
    .ql-editor{
         height:400px;
     }
     .ql-container{
      height:402px;
     }
</style>
<style  scoped>
.booksEdit{
  position: relative;
}
</style>
