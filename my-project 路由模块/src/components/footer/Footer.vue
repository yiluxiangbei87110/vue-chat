<template>
  <div class="footer">
   <h1>{{msg}}</h1>
   <span>这是footer部分的内容</span>
   <h1>获取参数的值</h1>
    <div><button @click="getPara">获取参数的值</button></div>
    <img src="../../assets/logo.png" alt="">
  </div>
</template>

<script>
export default{
  name:'footer',
  data(){
    return{
      msg:'footer'
    }
  },methods:{
    getPara:function(){
      console.log(this.$route.params);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.footer{
  background-color: lightblue;
  position: absolute;
  bottom: 0;
  left: 0;
  width:100%;
}
h1, h2 {
  font-weight: normal;
}
</style>
