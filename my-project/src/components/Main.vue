<template>
    <div class="main">

      <div class="left">
        <ul class="chanel-wrap">
          <li v-for="(item,index) in chanel" :key="item.id">
            <a href="javscript:void(0)" :class="[{'active':index==activeItemIndex},'chanel-item']" 
             @click="activeItemIndex=index">{{item.text}}</a>
          </li>
        </ul>
      </div>

      <div class="right">
          <li v-for="item in feedData" :key="item.group_id">
              <div ga_event="article_item_click" class="bui-box single-mode">
                  <div ga_event="article_img_click" class="bui-left single-mode-lbox">
                      <a href="/group/6543149117575528963/" target="_blank" class="img-wrap">
                          <img class="lazy-load-img" :src="item.image_url" lazy="loaded">
                          </a>
                  </div>
                  <div class="single-mode-rbox">
                      <div class="single-mode-rbox-inner">
                          <div ga_event="article_title_click" class="title-box">
                              <a href="/group/6543149117575528963/" target="_blank" class="link">{{item.title}}</a></div>
                          <div class="bui-box footer-bar">
                              <div class="bui-left footer-bar-left">
                                  <a href="news_military" target="_blank" ga_event="article_tag_click" class="footer-bar-action tag tag-style-other">{{item.chinese_tag}}</a> 
                                  <a href="/c/user/3242684112/" target="_blank" ga_event="article_avatar_click" class="footer-bar-action media-avatar">
                                    <img :src="item.media_avatar_url" lazy="loaded">
                                  </a> 
                                  <a href="/c/user/3242684112/" target="_blank" ga_event="article_name_click" class="footer-bar-action source">&nbsp;{{item.source}}&nbsp;⋅</a> 
                                  <a href="/group/6543149117575528963//#comment_area" target="_blank" ga_event="article_comment_click" class="footer-bar-action source">&nbsp;{{item.comments_count}}&nbsp;⋅</a> <span class="footer-bar-action">&nbsp;{{1523458344}}毫秒前</span>
                              </div>
                              <div class="bui-right">
                                  <div ga_event="dislike_click" class="action-dislike" dislikeurl="/api/dislike/"><i class="bui-icon icon-close_small" style="font-size: 16px; color: rgb(221, 221, 221);"></i> 不感兴趣
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </li>
      </div>



    </div>
</template>

<script>
import {getNewsList,getFocus,getFeed} from './../api/api.js'
export default {
  name: "Main",
  data() {
    return {
      activeItemIndex: 0,
      feedData:[],
      chanel: [
        { text: "推荐", id: 0 },
        { text: "热点", id: 1 },
        { text: "图片", id: 2 },
        { text: "科技", id: 3 },
        { text: "娱乐", id: 4 }
      ]
    };
  },
  created(){
      // this.getData();
      // this._getFocus();
      this._getFeed();
  },
  methods:{
      getData() {
        getNewsList().then((res)=>{
        console.log(res.data)
      })
      },
      _getFocus(){
        getFocus().then((res)=>{
        console.log(res.data)
      })
    },
      _getFeed(){
        getFeed().then((res)=>{
        this.feedData=res.data.slice(0);
        console.log(this.feedData)
      })
    },
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.main {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 10px;
  flex-direction: row;
}
.left {
  position: fixed;
  width: 160px;
  display: flex;
  justify-content: center;
}
.right {
  height: 100%;
  margin-left: 180px;
}
.chanel-item {
  display: block;
  width: 110px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  color: #444;
  border-radius: 4px;
  margin-bottom: 2px;
  -webkit-transition-property: color, background-color;
  transition-property: color, background-color;
}
.active {
  background-color: #ed4040;
  color: #fff;
}
.chanel-wrap li {
  text-align: center;
}
.single-mode {
    height: 123px;
    position: relative;
    padding: 10px 0;
    border-bottom: 1px solid #e8e8e8;
}
.single-mode-lbox {
    width: 158px;
    height: 102px;
    margin-right: 16px;
}
.img-wrap {
    position: relative;
    cursor: pointer;
    width: 100%;
    text-align: center;
    border: 1px solid #e8e8e8;
    background: #e8e8e8;
    background-color: rgb(232, 232, 232);
    overflow: hidden;
    transform-style: preserve-3d;
}
img-wrap>img {
    display: inline-block;
    max-width: 100%;
    height: auto;
    vertical-align: middle;
    transition: all .5s ease-out .1s;
    transition-property: all;
    transition-duration: 0.5s;
    transition-timing-function: ease-out;
    transition-delay: 0.1s;
}
.single-mode-rbox {
    height: 100%;
    overflow: hidden;
}
.single-mode-rbox-inner {
    display: inline-block;
    width: 100%;
    vertical-align: middle;
}
.title-box {
    display: block;
    font-size: 20px;
    line-height: 1.3;
    margin-bottom: 4px;
    font-weight: 700;
    max-height: 52px;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    overflow: hidden;
    text-overflow: ellipsis;
}
.footer-bar {
    font-size: 12px;
    color: #999;
    margin-top: 10px;
}

.bui-box {
    display: block;
    zoom: 1;
}
.footer-bar-action, .footer-bar-left {
    display: inline-block;
    vertical-align: middle;
}


.footer-bar-left {
    font-size: 0;
    line-height: 20px;
}
.bui-left {
    float: left;
}
.action-dislike {
    position: relative;
    color: transparent;
    cursor: pointer;
    width: 20px;
    height: 20px;
    line-height: 20px;
    overflow: hidden;
    padding-right: 20px;
    padding-left: 8px;
    transition: width .3s ease;
    white-space: nowrap;
    z-index: 2;
}

.action-dislike>i {
    position: absolute;
    top: 2px;
    right: 0;
}

.bui-icon {
    font-family: tticons!important;
    font-size: 12px;
    display: inline-block;
    line-height: 1;
    speak: none;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon-close_small:before {
    content: "\E61E";
}
.footer-bar-action.media-avatar>img {
    width: 100%;
    height: 100%;
}
.footer-bar-action.media-avatar {
    color: #fff;
    margin-right: 2px;
    width: 18px;
    height: 18px;
    line-height: 18px;
    text-align: center;
    font-size: 12px;
    border-radius: 50%;
    background-color: #eee;
    overflow: hidden;
}
.avatar>img {
    width: 100%;
    height: 100%;
}
</style>
