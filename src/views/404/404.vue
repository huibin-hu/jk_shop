<!--
 * @Author: 胡小汇
 * @Date: 2020-10-22 10:48:36
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-22 10:53:03
 * @Description: file content
-->
<template>
  <div class="notfound" @click="goBack">
    <img src="@/assets/404.gif">
  </div>
</template>

<script>
export default {
  name: '404',
  methods: {
    goBack(){
      this.$router.go(-1)
    }
  }

}
</script>

<style scoped>
  .notfound{
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .notfound img{
    width: 100%;
    background-size: cover;
  }
</style>