<template>
  <div class='bannerList container'>
      <div class="taiji">
      <div class="left"></div>
      <div class="right"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'bannerList',
  data(){
    return {}
  },
  components: {},
  created(){},
  mounted(){},
  methods: {}
}
</script>
<style  scoped>
.taiji{
    width: 400px;
    height: 400px;
    background: linear-gradient(#409EFF 50%,#67C23A 50%);
    border: 1px solid #000;
    border-radius: 50%;
    display:flex;
    align-items:center;
    animation: zhuan 50s infinite alternate linear;

}
 .left,
  .right {
    height: 50px;
    width: 50px;
    border-radius: 50%;
  }
  .right {
    border: 75px solid #000;
    animation: bian 1s infinite alternate linear; 
    /* infinite循环进行 alternate反复 linear匀速 */ 
    animation-delay: -1s; /*延迟*/
    transform-origin: 100% 50%;
    background-color: #fff;
  }
   .left {
    border: 75px solid #fff;
    animation: bian 1s infinite alternate linear;
    transform-origin: 0% 50%;
    background-color: #000;
  }
@keyframes bian {
  from {
    transform: scale(0.5);
  }
  to {
    transform: scale(1.5);
  }
}
@keyframes zhuan {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(3600deg);
  }
}
</style>
