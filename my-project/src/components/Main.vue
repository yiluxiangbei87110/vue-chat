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
          <li v-for="item in feedData" :key="item.group_id" @click="jump(item.group_id)">
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
                                  <a href="/c/user/3242684112/" target="_blank" ga_event="article_name_click" class="footer-bar-action source">{{item.source}}</a> 
                                  <a href="/group/6543149117575528963//#comment_area" target="_blank" ga_event="article_comment_click" class="footer-bar-action source">&nbsp;{{item.comments_count}}&nbsp;</a> <span class="footer-bar-action">&nbsp;{{1523458344}}毫秒前</span>
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
    jump(id){
        this.$router.push({
            path:`/hello/:${id}`
        })
    }
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
  margin-bottom: 40px;
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

</style>
