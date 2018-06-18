<!--客服评分-->
<template>
    <div class="xw-evaluate-wrap  animated bounceInLeft" v-if="showScore">
        <div class="xw-evaluate-content">
            <ul class="xw-score-list">
            <li v-for="items in ScoreDB.scoreDatas">
                <span>{{items.scoreTitle}}</span>
                <nav>     
                    <a href="javascript:;"  v-for="(item ,index) in items.scoreArr"
                     @click="scoreFuc(index+1, items.scoreFlag,items.scoreArr)" :class="[item==index ? 'xw-score-active' : 'xw-score-notActiv']"></a>
                </nav>
                <input type="hidden" :value="Math.max.apply(null,items.scoreArr)+1" />
            </li>
        </ul>
          <div class="xw-evaluate-submit" :value="ScoreDB.maxVal" @click="confirmScore(ScoreDB.maxVal)">确 定</div>
        </div>
</div>
</template>

<script>

export default {
 name: 'evaluate',
 props:{
    ScoreDB:{
      type:Object,
      default:{}
    },
    showScore:{
      type:Boolean,
      default:true
    }
 },
 data() {
   return {
       }
 },
 methods:{
    scoreFuc(index,scoreFlag,scoreArr){
       this.$emit('on-star',[index,scoreFlag,scoreArr]);
    },confirmScore(score){
      this.$emit('confirm-star',score);
    }
  }
}
</script>

<style scoped>
.xw-evaluate-wrap{
      background: rgba(0,0,0,.5);
      position: absolute;
      width: 100%;
      height: 100%;
      z-index: 1002;
}
.xw-evaluate-content{
      position: absolute;
      bottom: 80px;
      width: 94%;
      background: #fff;
      z-index: 1003;
      transform: translate(-50%,-50%);
      left: 50%;
      top: 50%;
      height: 230px;
      border-radius: 10px;
}
.xw-evaluate-submit{
    position: absolute;
    bottom: 10px;
    text-align: center;
    width: 100%;
    font-size: 18px;
    background: #ed4858;
    width: 50%;
    border-radius:5px;
    color: #fff;
    left: 50%;
    transform: translateX(-50%);
    line-height: 40px;
}
.xw-score-list{
      height: 140px;
      margin-top: 15px;
}
.xw-score-list li{
      height: 40px;
      padding-left:9px;
      margin-top: 8px;
      display: flex;
      align-items:center;
      justify-content:space-between;
}

.xw-score-list li span{
  font-size: 18px;
  line-height: 36px;
}

 nav a{
      float: left;
      background: url(/static/images/star.png) no-repeat -38px 0;
      width: 38px;
      height: 36px;
      margin-right: 10px;
      transition: .3s;
}
nav a:first-child{
  margin-right: 16px;
}
.xw-score-active{
  background-position: 0 0;
}
.xw-score-notActiv{
  background: url(/static/images/star.png) no-repeat -38px 0;
}
</style>