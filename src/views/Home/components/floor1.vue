<!--
 * @Author: 胡小汇
 * @Date: 2020-10-19 17:24:37
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-20 15:36:27
 * @Description: file content
-->
<template>
  <div class="floor">
    <p class="title">休闲食品</p>
    <div class="box">
      <div class="item" v-for="item in floor1" :key="item.goodsId">
        <van-image  :src="$filterUrl(item.image)" alt="" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    floor1: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped lang = 'scss'>
.floor{
  .title{
    text-align: center;
    font-size: 18px;
    padding: 10px 0;
  }
  .box{
    width: 100%;
    background: #fff;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(3, 1fr);
    .item:nth-child(1){
      grid-column-start: 1;
      grid-column-end: 2;
      grid-row-start: 1;
      grid-row-end: 3;
    }
  }
}
</style>