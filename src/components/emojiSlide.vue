<!--废弃了-->



<template>
<!-- emoji组件 -->
<div v-show="isShow" class="xw-window-text xw-face-emoji-ul">
    <div class="xw-chat-ul-box">
          <swiper :options="swiperOption" ref="mySwiper">
            <swiper-slide v-for="(item,index) in EXPS" :key="index">
                <img :src="item.file" :data="item.code" @click="sendEmoji(item.code)">
                 <img :src="item.file" :data="item.code" @click="sendEmoji(item.code)">
                  <img :src="item.file" :data="item.code" @click="sendEmoji(item.code)">
                   <img :src="item.file" :data="item.code" @click="sendEmoji(item.code)">
                    <img :src="item.file" :data="item.code" @click="sendEmoji(item.code)">
                     <img :src="item.file" :data="item.code" @click="sendEmoji(item.code)">
            </swiper-slide>
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</div>
</template>

<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
 name: 'emojiSlider',
   props:{
    EXPS:{
      type:Array,
      default:[]
    },
    isShow: {
      type: Boolean,
      default: true
    }
  },
 data() {
   return {
      swiperOption: {
      notNextTick: true,
      autoplay: 3000,
      grabCursor : true,
      setWrapperSize :true,
      pagination : '.swiper-pagination',
      paginationClickable :true,
      prevButton:'.swiper-button-prev',
      nextButton:'.swiper-button-next',
      mousewheelControl : true,
      observeParents:true
       }
   }
 },
 components: {
    swiper,
    swiperSlide
},
methods:{
sendEmoji(src){
    this.$emit('sendEmoji',src);
  }
},
 computed: {
     swiper() {
       this.$emit('click');
       return this.$refs.mySwiper.swiper
     }
  }
}
</script>

