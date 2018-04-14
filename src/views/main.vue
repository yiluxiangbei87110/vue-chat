<template>
	<div class="app">
		<div class="xw-header">
		   	<div class="xw-ring-wrap">
		      <a :class="[bellStatus ? '' : 'xw-ring-icon-toggle', 'xw-ring-icon']" @touchstart="hint('checkStaus')"></a>
		    </div>
	          <div class="xw-header-content" @touchstart="showInfo">
	              <div v-if="!toShowMaskInfo" :class="[toShowMaskInfo ? '' : 'bounceInRight' , 'animated']">
	                <img src="static/images/logo.jpg" class="xw-header-avatar">
	                <div class="xw-header-title-wrap">
	                  <div class="xw-header-title">小薇客服</div>
	                </div>
	              </div>
	          </div>
	          <!-- 小薇客服弹出的具体信息 -->
	          <div v-show="toShowMaskInfo" :class="[toShowMaskInfo ? 'bounceInDown' : '' , 'xw-show-info-box', 'animated']">
	            <div class="xw-logo">
	              <img src="static/images/logo.jpg">
	              <h4>小薇客服</h4>
	            </div>
	            <div class="xw-header-info">
	              <p class="animated bounceInLeft">
	                小薇客服产品，集成了电话呼叫中心、IM在线客服、移动在线客服、微信、微博、移动APP SDK、邮件等全客服渠道，用工单系统承载售后服务，配合帮助中心、智能机器人等自助服务。
	              </p>
	            </div>
	          </div>
		</div>

		<div class="xw-content"  @touchstart="toShowMaskInfo=false"  ref="xwBody">    
        <div class="xw-chat-wrap" >
            <ul>
              <li v-for="messageList in records">
                <div v-if="messageList.type==1">
                  <div class="xw-chat-time">{{messageList.time}}</div>
                  <div class="xw-chat-servicer">
                    <div class="xw-servicer-avantar-wrap">
                      <img
                        src="/static/images/logo.jpg" class="xw-servicer-avantar">
                    </div>
                    <div class="xw-chat-msg">
                      <span v-html="replaceFace(messageList.content)"></span>
                    </div>
                  </div>
                </div>

                <!-- 用户发送的消息模板-->
                <div v-else>
                  <div class="xw-chat-time">{{messageList.time}}</div>
                  <div class="xw-chat-customer">
                    <div class="xw-customer-avantar-wrap">
                      <img src="/static/images/female.jpg" class="xw-customer-avantar">
                    </div>
                    <div class="xw-chat-msg" style="display:inline-block">
                      <span v-html="replaceFace(messageList.content)"></span>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
        </div>
		</div>



        <div class="xw-footer-wrap" @touchstart="toShowMaskInfo=false">
          <div class="xw-footer-content">
            <div class="xw-vmodel-wrap">
               <textarea class="xw-content-textarea" placeholder="请输入您的问题" v-model="content" @focus="onFocusText"></textarea>
            </div>
            <div class="xw-chat-tool">
              <div class="xw-chat-tool-item">
                  <transition  name="fade">
                      <a href="javascript:void(0)" class="xw-send-btn-text" v-if="content.trim().length" @click="sendMsg">发送</a>
                  </transition >
              </div>
              <div class="xw-chat-tool-item" >
                <a href="javascript:;" :class="[showEmoji ? 'xw-face' :'xw-face-close','xw-chat-tool-btn']" @click="emojiFuc"></a>
              </div>
              <div class="xw-chat-tool-item">
                <a :class="[showMoreOpratin ? 'xw-hide-operation-close' :'xw-hide-operation','xw-chat-tool-btn']" @click="showMoreOpratin=!showMoreOpratin"></a>
                <transition name="fade">
                <div class="xw-window-text" v-if="showMoreOpratin">
                  <label for="uploadImg">
                   <span>
	                  <input type="file" name="image"  accept="image/*"  multiple style="display:none;" id="uploadImg">图片
                  </span>
                </label>
                  <span @click="videoFuc">视频</span>
                  <span @touchstart="showEvaluateFuc">评价</span>
                  <span>结束</span>
                </div>
               </transition>
              </div>
            </div>
          </div>

          <!--  <emojiSlider :isShow="showEmoji" :EXPS="EXPS"></emojiSlider> -->
          <!-- 表情开始 -->
	        <transition name="slide-fade" style="display:none">
	          <div class="xw-window-text xw-face-emoji-ul" v-if="showEmoji">
	            <div class="xw-chat-ul-box">
	              <mt-swipe :auto="0">
	                <mt-swipe-item v-for="n in Math.ceil(EXPS.length/15)" :key="n">
	                  <li v-for="(item, index) in getEmotionData(n,15)" class="xw-faceEmoji">
	                    <img :src="item.file" :data="item.code" v-on:click="content+=item.code">
	                  </li>
	                </mt-swipe-item>
	              </mt-swipe>
	            </div>
	          </div>
	        </transition>
        </div>
	 
		 <!-- 提示音 -->
		 <audio style="display:none"  preload="metadata" controls="controls" autoplay="autoplay" ref="hintAudio">
	        <source :src="myaudio" type="audio/mpeg"/>
	      </audio>

	    <!-- 右上角的通话小窗口 -->
	    <div class="xw-samll-pop-wrap animated bounceInUp" v-if="showNarrowPopVal">
	      <span class="xw-big-pop" @click="showBigPopFuc">显示大窗</span>
	    </div>

	    <!-- 客服窗口 -->
	    <div class="xw-pop-server animated bounceInRight" v-if="videoVal">
	      <h5>客服</h5>
	      <span class="xw-narrow-pop" @click="showNarrowPopFuc">显示小窗</span>
	    </div>

	    <!-- 顾客窗口 -->
	    <div class="xw-pop-customer animated bounceInLeft" v-if="videoVal">
	      顾客
	      <div>
	        <a class="xw-hang-up" href="#"><img src="/static/images/hang-up.png" class="xw-hang-up-icon"></a>
	      </div>
	    </div>

	    <!--客服评分-->
	    <evaluate :ScoreDB="ScoreDB" :showScore="showScore" @on-star="selectStar" @confirm-star="confrmStar"> 
      </evaluate>

      <Toast :showToast="showToast">{{toastText}}</Toast>
	</div>
</template>

<script>
    import evaluate from '../components/evaluate.vue'
    import Toast from '../components/toast'
    import {getEmojiData} from '../api/api.js'
    // import emojiSlider from '.././components/emojiSlide.vue'
  export default {
		components: {
		evaluate,
    Toast,
		// emojiSlider
},
    data() {
return {
	comment:{},
	showEmoji: true,//是否显示表情
  showToast:false,//显示提示框
  toastText:'',
	showMoreOpratin:false,//是否显示更多操作
	toShowMaskInfo: false,//点击头部是否显示相信信息
	bellStatus: true,//头部区域铃声图标
	myaudio: '../../static/audio/msg.mp3',//铃音
	videoVal: false,//点击视频文字时候
	showNarrowPopVal: false,//点击切换成小窗口
	testContents: ["今天天气不错", '这个问题还没遇到过', '你说什么，我听不明白', '今天周五了', '请稍后--', '当前客服忙', '您还有什么咨询的吗', '正在查询', 'gone with the wind'],
	content: '',
	//聊天记录
	records: [{
		type: 1,
		time: new Date().toLocaleTimeString(),
		content: '您好！欢迎来到小薇客服，请问有什么能帮到您？如有疑问请在线咨询或者拨打400-926-2012咨询！感谢您的支持! '
		}, 
		{
		type: 2,
		time: new Date().toLocaleTimeString(),
		content: '谢谢您的帮助'
}],
showScore: false,//显示评分
        ScoreDB: {
      scoreDatas: [
            {
        scoreTitle: '服务指数',
        scoreFlag: 0,
        scoreArr: [1, 2, 3, 4, 5]
      },
            {
        scoreTitle: '接通速度',
        scoreFlag: 1,
        scoreArr: [1, 2, 3, 4, 5]
},
            {
      scoreTitle: '办事效率',
      scoreFlag: 2,
      scoreArr: [1, 2, 3, 4, 5]
}
],
maxVal: [0, 0, 0]
},
imgFile :{},
EXPS: [],
      }
    },
created(){
  this._loadEmojiData();
},
methods: {
  showInfo(){
    this.toShowMaskInfo = true;
  },
  //点击控制表情切换（显示和隐藏）
  emojiFuc(){
    this.showEmoji = !this.showEmoji;
  },
  videoFuc(){
    this.videoVal = true;
    this.showNarrowPopVal = false;
  },
  //提示音
  hint(staus){
    if (staus != undefined) {
      this.bellStatus = !this.bellStatus;
    }
    this.bellStatus ? this.$refs.hintAudio.play() : this.$refs.hintAudio.pause();
  },
  showNarrowPopFuc(){
    this.showNarrowPopVal = true;
    this.videoVal = false;
  }, showBigPopFuc(){
    this.showNarrowPopVal = false;
    this.videoVal = true;
  }, showEvaluateFuc(){
    this.showScore = !this.showScore;
  },
  sendMsg(){
    var content = this.content.trim();
      this.records.push({
        time: new Date().toLocaleTimeString(),
        content: content,
        type: 2
      });
      this.content = "";
      setTimeout(() => {
        this.hint();
        this.records.push({
          time: new Date().toLocaleTimeString(),
          content: this.testContents[Math.floor(Math.random() * 9)],
          type: 1
        });
        this.scrollToBottom();
      }, 800);
  },
  getEmotionData(pageNow, pageSize) {
    return this.EXPS.slice((pageNow - 1) * pageSize, pageSize * pageNow)
  },
  replaceFace(con) {
    if (!con) {
      return;
    }
    if (con.toString().indexOf('/:') > -1) {
      var exps = this.EXPS;
      for (var i = 0; i < exps.length; i++) {
        con = con.replace(exps[i].reg, '<img src="' + exps[i].file + '"  alt="" />');
      }
    }
    return con;
  },
  //点击星星进行星星评分
  selectStar(msg){
    let index = msg[0];
    let scoreFlag = msg[1];
    let scoreArr = msg[2];
    var Target = [1, 2, 3, 4, 5];
    for (var i = 0; i < index; i++) {
      Target[i] = i;
    }
    //方便确定星星选中的个数，将不亮的星星数组设置为-1
    for (var j = index; j < Target.length; j++) {
      Target[j] = -1;
    }

    //评分结果数
    var tempArr = [];
    tempArr = this.ScoreDB.maxVal.slice(0);
    tempArr[scoreFlag] = index;
    this.ScoreDB.maxVal = tempArr.concat();
    this.ScoreDB.scoreDatas[scoreFlag].scoreArr = Target;
  },
  //点击确定关闭星星评价
  confrmStar(msg){
    this.showToast=true;
    this.toastText='您的评分依次是 '+msg;
    this.showScore = false;
    setTimeout(()=>{
    this.showToast=false;

  },2000)
  },

  //滚动到底
  scrollToBottom(){
    setTimeout(()=>{
      //滚动条长度
      var currentDistance=this.$refs.xwBody.scrollHeight-this.$refs.xwBody.clientHeight;
      //当前滚动条距离顶部的距离
      var currentScroll_y=this.$refs.xwBody.scrollTop;
      if(currentDistance>0 && currentDistance>currentScroll_y){
          currentScroll_y=Math.ceil((currentDistance-currentScroll_y)/10)+currentScroll_y;
          currentScroll_y=currentScroll_y>currentDistance ? currentDistance: currentScroll_y;
          //微信和qq浏览器不支持 scrollTo？
          //this.$refs.xwBody.scrollTo(0,currentScroll_y);
          this.$refs.xwBody.scrollTop = currentScroll_y;
          this.scrollToBottom();
      }
    },13);
  },
  onFocusText(){
    this.scrollToBottom();
  },
   _loadEmojiData(){
   		getEmojiData().then((res)=>{
   			var json = eval('('+res+')');
   			this.EXPS=json.EXPS.slice(0);
   		});
   }
}
  }
</script>
<style>
#app{
	position: absolute;
	height: 100%;
	width: 100%;
	overflow: hidden;
}
.app{
	display: flex;
	flex-direction:column;
	width: 100%;
	height: 100%;
}
.xw-content{
	flex:1;
	position: relative;
	overflow: auto;
	transition: height .8s;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
.animated {
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.animated.bounceIn,
.animated.bounceOut {
  -webkit-animation-duration: .75s;
  animation-duration: .75s;
}

@-webkit-keyframes bounceInDown {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -3000px, 0);
    transform: translate3d(0, -3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, 25px, 0);
    transform: translate3d(0, 25px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, -10px, 0);
    transform: translate3d(0, -10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, 5px, 0);
    transform: translate3d(0, 5px, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInDown {
  -webkit-animation-name: bounceInDown;
  animation-name: bounceInDown;
}

@keyframes bounceInLeft {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  0% {
    opacity: 0;
    -webkit-transform: translate3d(-3000px, 0, 0);
    transform: translate3d(-3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(25px, 0, 0);
    transform: translate3d(25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(-10px, 0, 0);
    transform: translate3d(-10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(5px, 0, 0);
    transform: translate3d(5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInLeft {
  -webkit-animation-name: bounceInLeft;
  animation-name: bounceInLeft;
}

@-webkit-keyframes bounceInRight {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(3000px, 0, 0);
    transform: translate3d(3000px, 0, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(-25px, 0, 0);
    transform: translate3d(-25px, 0, 0);
  }

  75% {
    -webkit-transform: translate3d(10px, 0, 0);
    transform: translate3d(10px, 0, 0);
  }

  90% {
    -webkit-transform: translate3d(-5px, 0, 0);
    transform: translate3d(-5px, 0, 0);
  }

  to {
    -webkit-transform: none;
    transform: none;
  }
}

.bounceInRight {
  -webkit-animation-name: bounceInRight;
  animation-name: bounceInRight;
}

@keyframes bounceInUp {
  from, 60%, 75%, 90%, to {
    -webkit-animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
    animation-timing-function: cubic-bezier(0.215, 0.610, 0.355, 1.000);
  }

  from {
    opacity: 0;
    -webkit-transform: translate3d(0, 3000px, 0);
    transform: translate3d(0, 3000px, 0);
  }

  60% {
    opacity: 1;
    -webkit-transform: translate3d(0, -20px, 0);
    transform: translate3d(0, -20px, 0);
  }

  75% {
    -webkit-transform: translate3d(0, 10px, 0);
    transform: translate3d(0, 10px, 0);
  }

  90% {
    -webkit-transform: translate3d(0, -5px, 0);
    transform: translate3d(0, -5px, 0);
  }

  to {
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
}

.bounceInUp {
  -webkit-animation-name: bounceInUp;
  animation-name: bounceInUp;
}
</style>