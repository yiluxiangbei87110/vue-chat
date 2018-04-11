<template>
    <div class="header">
        <div class="header-left" >下载App</div>
         <div class="header-right" >
            <a href="#">登录</a>
            <a href="#">退出</a>
            <a href="#">关于</a>
            <a href="#">招聘</a>
         </div>
    </div>
</template>

<script>
import {getNewsList,getFocus} from './../api/api.js'
export default {
//   name: "Header",
//   created(){
//       this.getData();
//       this._getFocus();
//   },
//   data() {
//     return {
//       msg: "it's Header"
//     };
//   },
//   methods: {
//     getData() {
//  getNewsList().then((res)=>{
//         console.log(res.data)
//       })
//     },
//     _getFocus(){
//           getFocus().then((res)=>{
//       console.log(res.data)
//     })
//     }

//   }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.header {
  display: flex;
  height: 34px;
  line-height: 34px;
  background: #222;
  font-size: 14px;
  color: #fff;
}
.header-left {
  flex: 1;
  justify-content: start;
}
.header-right {
  width: 280px;
  display: flex;
  justify-content: space-around;
}
.header-right a {
  color: #fff;
  text-decoration: none;
}
</style>
