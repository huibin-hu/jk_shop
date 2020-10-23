<!--
 * @Author: 胡小汇
 * @Date: 2020-10-17 14:07:59
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-20 16:37:51
 * @Description: file content
-->
<template>
  <div class="footer">
    <van-tabbar v-model="active">
      <van-tabbar-item to = '/home' icon="home-o">首页</van-tabbar-item>
      <van-tabbar-item to = '/list' icon="search">列表</van-tabbar-item>
      <van-tabbar-item to = '/shopcart' icon="friends-o">购物车</van-tabbar-item>
      <van-tabbar-item to = '/prefile' icon="setting-o">个人</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  
  data(){
    return{
      active: 0
    }
  }
}
</script>

<style>
</style>