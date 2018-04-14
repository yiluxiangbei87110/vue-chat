
<template>
  <div id="app">
    <Main></Main>
  </div>
</template>

<script>
import Main from './views/main'
export default {
  name: 'app',
  components: {
    Main
  }
}
</script>

<style>

html,body,a,button,input,textarea,img,ul,li,p,dl,dd,h1,h2,h3,h4,h5,h6{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
a,button,input,textarea,img{
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  outline: none;
}
body {
  height: 100%;
  width: 100vw;
  overflow: hidden;
  font-family: Helvetica Neue, Helvetica, PingFang SC, Hiragino Sans GB, Microsoft YaHei, 微软雅黑, Arial, sans-serif;
  font-size: 14px;
  line-height: 1.43;
  color: #333;
  word-wrap: break-word;
  word-break: normal;
  hyphens: auto;
  transition:.5s;
}

a {
  text-decoration: none;
  color: #4078c0;
}

img {
  border-style: none;
}

ul{
  list-style: none;
}

::-webkit-scrollbar-track {
  border-radius: 0;
  padding: 0;
  background-color: transparent;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  padding: 0;
  background-color: rgba(0, 0, 0, .2);
}

::-webkit-scrollbar {
  width: 7px;
  height: 7px;
  background-color: transparent;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to{
  opacity: 0;
}

.xw-ring-wrap{
  position: absolute;
  right: 5px;
  top: 3px;
  padding: 0 2px;
  z-index: 4;
}

.xw-ring-icon {
  background: url(/static/images/soundOn.svg) no-repeat 50%;
}

 .xw-ring-icon-toggle{
   background: url(/static/images/soundClose.svg) no-repeat 50%;
}

.xw-ring-icon {
  float: right;
  padding: 5px;
  margin-right: 3px;
  height: 30px;
  width: 30px;
  opacity: .6;
  cursor: pointer;
  text-indent: -9999px;
  overflow: visible;
}

.xw-body-wrap-scroll,.xw-body-wrap-scroll-main{
   position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: auto;
}


.xw-header {
  z-index: 2;
  max-height: 360px;
  background: #ed4858;
  box-shadow: 0 1px 3px rgba(0, 0, 0, .2);
}

.xw-header-content {
  position: relative;
  overflow: hidden;
  padding: 0px 16px;
  min-height: 50px;
}


.xw-chat-servicer:after,
.xw-chat-servicer:before,
.xw-chat-customer:after,
.xw-chat-customer:before,
.xw-chat-wrap:after,
.xw-chat-wrap:before,
.xw-chat-tool:after,
.xw-chat-tool:before,
.xw-chat-ul-box:after,
.xw-chat-ul-box:before {
  display: table;
  content: "";
}

.xw-header-avatar {
  float: left;
  height: 40px;
  width: 40px;
  border-radius: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .1);
  margin-right: 8px;
  margin-top: 5px;
}

.xw-header-title-wrap {
  padding: 3px 0;
  float: left;
  width: 200px;
}

.xw-header-title {
  font-size: 14px;
  color: #fff;
  margin-top: 8px;
}


.xw-chat-wrap {
  overflow: auto;
  padding-left: 16px;
  padding-bottom: 20px;
}

.xw-chat-wrap .xw-chat-time,
.xw-chat-wrap time {
  line-height: 1;
  text-align: center;
  display: block;
  margin-bottom: 8px;
  margin-top: 8px;
  font-size: 12px;
  color: #999;
  text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
}

.xw-chat-servicer,
.xw-chat-customer {
  position: relative;
  margin-bottom: 16px;
  padding: 0 10px 0 45px;
}

.xw-servicer-avantar-wrap {
  position: absolute;
  bottom: 0;
  line-height: 0;
}
.xw-send-btn-text{
  padding: 4px 8px;
  background-color:#ed4858;
  color: #fff;
  border-radius: 5px;
}
.xw-customer-avantar-wrap {
  position: absolute;
  bottom: 0;
  right: 8px;
  line-height: 0;
}

.xw-chat-servicer .xw-servicer-avantar-wrap,.xw-customer-avantar-wrap{
  left: 0;
}

.xw-servicer-avantar {
  border-radius: 100%;
}

.xw-servicer-avantar-wrap img,.xw-customer-avantar-wrap img {
  height: 34px;
  width: 34px;
}

.xw-chat-msg {
  -webkit-font-smoothing: antialiased;
  hyphens: auto;
  word-wrap: break-word;
  word-break: normal;
  position: relative;
  clear: both;
  padding: 8px 16px;
  border: 1px solid transparent;
  max-width: 100%;
  min-width: 50px;
  min-height: 22px;
  line-height: 1.6em;
  max-width: 70%;
}

.xw-chat-servicer .xw-chat-msg {
  background: #fff;
  border-color: #efefef;
  float: left;
}

.xw-chat-msg :last-child {
  margin-bottom: 0;
}

.xw-chat-msg span{
  white-space: pre-line;
}
.xw-chat-servicer,
.xw-chat-customer {
  position: relative;
  margin-bottom: 16px;
  padding: 0 10px 0 45px;
}

.xw-chat-customer {
  text-align: right;
}

.xw-chat-customer .xw-chat-msg {
  float: right;
  text-align: left;
  background: #ed4858;
  border-color: #ed4858;
  color: #fff;
  margin-right: 45px;
}
.xw-customer-avantar{
  border-radius: 50%;
}
.xw-chat-msg :last-child {
  margin-bottom: 0;
}

.xw-chat-wrap .xw-system-info-time,
.xw-chat-wrap time {
  line-height: 1;
  text-align: center;
  display: block;
  margin-bottom: 8px;
  font-size: 12px;
  color: #999;
  text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
}

.xw-system-info{
  margin-bottom: 8px;
}

.xw-chat-wrap>:last-child {
  margin-bottom: 16px;
}

.xw-system-info {
  text-align: center;
  font-size: 12px;
}

.xw-system-info span {
  display: inline-block;
  background: rgba(0, 0, 0, .08);
  padding: 4px 8px;
  line-height: 1;
  color: #7c7c7c;
  border-radius: 2px;
  text-shadow: 1px 1px 1px hsla(0, 0%, 100%, .6);
}

.xw-footer-wrap {
  justify-content:flex-end;
  width: 100%;
  box-shadow: 0 -1px 4px rgba(0, 0, 0, .05);
  background: #fff;
  z-index: 2;
}

.xw-footer-content {
  position: relative;
  height: 52px;
  display: flex;
 box-shadow: rgba(0, 0, 0, 0.05) 0px -1px 4px;
}
.xw-vmodel-wrap{
  flex:1;
}
.xw-content-textarea{
  box-sizing: border-box;
  z-index: 1;
  overflow-y: auto;
  font-size: 14px;
  line-height: 14px;
  border: none;
  resize: none;
  padding: 16px 85px 16px 14px;
  font-family: inherit;
  white-space: pre;
  white-space: pre-wrap;
  word-wrap: break-word;
}

.xw-chat-tool {
  position: absolute;
  right: 0px;
  bottom: 0;
  z-index: 2;
}

.xw-chat-tool-item {
  height: 52px;
  line-height: 52px;
  position: relative;
  float: left;
  background: #fff;
}


.xw-chat-tool-btn {
  display: block;
}

.xw-chat-tool-btn {
  margin-top: 7px;
  height: 38px;
  width: 38px;
  border-radius: 100%;
  text-indent: -9999px;
  opacity: .5;
  overflow: hidden;
  transform: translateZ(0);
  margin-left: 10px;
}

.xw-chat-tool-btn.xw-face {
   background: url(/static/images/smileOn.svg) no-repeat 50%;
}
.xw-chat-tool-btn.xw-face-close {
   background: url(/static/images/smileClose.svg) no-repeat 50%;
}

.xw-chat-tool-item .xw-window-text {
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-bottom: -3px;
  -webkit-transform: translateX(-60%);
  transform: translateX(-60%);
  white-space: nowrap;
  box-shadow: 0 3px 18px 2px rgba(0, 0, 0, .1), 0 0 1px rgba(0, 0, 0, .05);
  font-size: 12px;
  background: #fff;
  line-height: 1em;
}

.xw-chat-tool-item .xw-window-text.xw-face-emoji-ul {
  right: -23px;
  left: auto;
  -webkit-transform: none;
  transform: none;
}

.xw-chat-tool-item .xw-window-text h4 {
  font-size: 12px;
  margin: 0;
  font-weight: 400;
  padding: 12px 8px;
  padding-bottom: 0;
}


.xw-chat-ul-box{
  list-style: none;
  margin: 0;
  padding: 0;
}

.xw-chat-ul-box {
  position: relative;
  z-index: 1;
  background: #fff;
  padding: 8px;
  height: 130px;
  overflow: hidden;
  width: 340px;
  margin: 0px auto;
}

.xw-chat-tool-item .xw-window-text .xw-chat-ul-box {
  padding: 8px;
}
.swiper-slide{
  float: left;
}

.xw-chat-ul-box a {
  display: block;
  height: 40px;
  width: 40px;
}
.swiper-pagination{
  display: flex;
  width: 100%;
  justify-content:center;
}
.swiper-pagination-bullet{
  width: 8px;
  height: 8px;
  display: inline-block;
  background: #ccc;
  border-radius: 10px;
  margin-left:5px;
  margin-right: 5px;
}
.swiper-pagination-bullet-active{
  background: #007aff;
}

.xw-chat-tool-item {
  height: 52px;
  position: relative;
  float: left;
}

.xw-hide-operation{
  background: url(/static/images/addOn.svg) no-repeat 50%;
  width: 38px;
  height: 38px;
  margin-right:10px;
  transform:scale(.7);
}

.xw-hide-operation-close{
  background: url(/static/images/addClose.svg) no-repeat 50%;
  width: 38px;
  height: 38px;
  margin-right:10px;
  transform:scale(.7);
}

.xw-chat-tool-item .xw-window-text span {
  display: block;
  padding: 10px 12px;
  background: #fff;
  position: relative;
  z-index: 1;
  font-size: 17px;
  line-height: 16px;
}


.xw-chat-servicer:after,
.xw-chat-customer:after,
.xw-chat-wrap:after,
.xw-chat-tool:after,
.xw-chat-ul-box:after{
  clear: both;
}

.xw-chat-msg:last-child:before {
  bottom: -1px;
}

.xw-chat-msg:last-child:after,
.xw-chat-msg:last-child:before {
  content: "";
  position: absolute;
  height: 0;
  width: 0;
  display: block;
}

.xw-chat-customer .xw-chat-msg:last-child:before {
  display: inline-block;
  height: 0;
  width: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #ed4858;
  right: -10px;
  border-left-width: 9px;
}

.xw-chat-servicer .xw-chat-msg:last-child:before {
  display: inline-block;
  height: 0;
  width: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #efefef;
  left: -10px;
  border-left-width: 9px;
}

.xw-chat-servicer .xw-chat-msg:last-child:after {
  display: inline-block;
  height: 0;
  width: 0;
  border: 10px solid transparent;
  border-bottom: 10px solid #fff;
  left: -8px;
  border-left-width: 9px;
  bottom: 0px;
}

.xw-show-info-box{
  height: 200px;
  margin-top: -50px;
  z-index: 1000;
  background: #ed4858;
  color:#fff;
}

.xw-logo{
  text-align: center;
}

.xw-logo img{
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-top: 20px;
}

.xw-header-info p{
  height: 110px;
  padding:0 16px;
  line-height: 1.6rem;
  word-wrap: break-word;
  text-align: left;
  overflow: auto;
}


.xw-faceEmoji{
  margin-bottom: 7px;
  width:20%;
  float: left;
}

.xw-faceEmoji-main{
  text-align: center;
}

.xw-samll-pop-wrap{
  position: absolute;
  height: 160px;
  width: 30%;
  top: 0;
  right: 0;
 background-size: 100% 100%;
 background: url(/static/images/s.jpg) no-repeat;
  z-index: 1000;
}
.xw-pop-server{
 background: url(/static/images/s.jpg) no-repeat;
  position: absolute;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 100;
}
.xw-pop-customer{
  position:absolute;
  bottom: 20px;
  width: 80%;
  height: 200px;
  background: url(/static/images/c.jpg) no-repeat;
  z-index: 101;
  left:50%;
  margin-left: -40%;
  text-align: center;
}
.xw-narrow-pop{
  width: 40px;
  height: 40px;
  position: absolute;
  right: 5px;
  top: 5px;
  display: inline-block;
  background: red;
  color: #fff;
  text-align: center;
}
.xw-big-pop{
  display:block;
  background: red;
  color: #fff;
  line-height: 40px;
  text-align: center;
}
.xw-hang-up{
  background: red;
  width: 100px;
  height: 34px;
  display: inline-block;
  border-radius: 20%;
  position: absolute;
  bottom: 10px;
  transform:translateX(-50%);
}
.xw-hang-up-icon{
  position: relative;
  z-index: 1290;
  width: 40px;
  height: 34px;

}
.xw-chat-msg span img{
  vertical-align: middle;
}
.mint-swipe-items-wrap > div{
  text-align: center;
}
.xw-scroll-ul{
  min-height: 340px;
}
.mint-swipe-indicator.is-active {
  background: #ed4858;
  opacity: 1;
}
</style>





