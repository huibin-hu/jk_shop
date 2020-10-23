<!--
 * @Author: 胡小汇
 * @Date: 2020-10-17 14:21:07
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-21 14:15:40
 * @Description: file content
-->
<template>
  <div class="swiper">
    <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
      <van-swipe-item v-for="(item, index) in slides" :key="index">
        <router-link :to = '{path: "/details", query: {goodsId: item.goodsId}}'>
          <van-image  :src="$filterUrl(item.image)" alt=""/>
        </router-link>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  props: ['slides'],
  methods: {
    
  }
}
</script>

<style>
</style>