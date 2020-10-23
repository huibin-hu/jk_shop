<!--
 * @Author: 胡小汇
 * @Date: 2020-10-17 13:57:45
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-22 19:31:03
 * @Description: file content
-->
<template>
  <div class="prefile">
    <div class="title">
      <van-nav-bar
        title="中心"
      />
    </div>
    <div class="avatar">

    </div>
    <div class="btn">
      <van-button type="info" @click="goTo('/login')">登录</van-button>
      <van-button type="primary" @click="goTo('/regsiter')">注册</van-button>
    </div>
  </div>
</template>

<script>
export default {
  methods:{
    goTo(path){
      this.$router.push(path)
    }
  }
}
</script>

<style scoped lang = 'scss'>
.prefile{
  .avatar{
    height: 100px;
    width: 100%;
  }
  .btn{
    text-align: center;
    padding: 0 50px;
    button{
      width: 45%;
    }
  }
}
</style>