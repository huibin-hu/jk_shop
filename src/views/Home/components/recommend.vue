<!--
 * @Author: 胡小汇
 * @Date: 2020-10-19 17:01:23
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-21 17:05:27
 * @Description: file content
-->
<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide v-for="item in recommend" :key="item.goodsId">
      <router-link :to = '{path: "/details", query: {goodsId: item.goodsId}}'>
        <van-image width="100" height="100" :src="$filterUrl(item.image)" />
        <p class="name">{{item.goodsName}}</p>
        <p class="price">{{item.price | toFixed | rmb}}({{item.mallPrice | toFixed | rmb}})</p>
      </router-link>
    </swiper-slide>
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
import { Swiper, SwiperSlide, directive } from 'vue-awesome-swiper'
import 'swiper/swiper-bundle.css'
import { toFixed, rmb } from "@/uilts/filter.js"
export default {
  props: {
    recommend: {
      type: Array,
      required: true
    }
  },
  filters: {
    toFixed,
    rmb
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 3,
        spaceBetween: 10,
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        }
      }
    }
  },
  components: {
    Swiper,
    SwiperSlide
  },
  directives: {
    swiper: directive
  }
}
</script>

<style scoped lang = 'scss'>
.swiper{
  font-size: 16px;
  text-align: center;
  a{
    color: #000;
  }
  .name{
    height: 32px;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    line-clamp: 2;
    -webkit-box-orient: vertical;
    word-break: break-all; 
    white-space: normal;
  }
}
</style>