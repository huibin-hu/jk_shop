<!--
 * @Author: 胡小汇
 * @Date: 2020-10-19 15:55:09
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-20 15:41:50
 * @Description: file content
-->
<template>
  <div class="category">
    <van-grid :border="false" :column-num="5">
      <van-grid-item v-for="(item, index) in category" :key="index" :to = "{path: '/list', query: {index: index}}">
        <van-image :src="$filterUrl(item.image)" />
        <span class="name">{{item.mallCategoryName}}</span>
      </van-grid-item>
    </van-grid>
  </div>
</template>

<script>
export default {
  props: {
    category: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang = 'scss' scoped>
.name{
  font-size: 14px;
  padding: 10px 0;
}
</style>