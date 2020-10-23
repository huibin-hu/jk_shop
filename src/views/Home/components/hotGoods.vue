<!--
 * @Author: 胡小汇
 * @Date: 2020-10-19 18:26:41
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-21 17:02:10
 * @Description: file content
-->
<template>
  <div class="hotGoods">
    <p class="title">休闲食品</p>
    <div class="box">
      <div class="item" v-for="item in hotGoods" :key="item.goodsId">
        <router-link :to = '{path: "/details", query: {goodsId: item.goodsId}}'>
          <img class="goodsImg"  :src="$filterUrl(item.image)" />
          <p class="name">{{item.name}}</p>
          <p class="price">{{item.price | toFixed | rmb}}</p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { toFixed, rmb } from "@/uilts/filter.js"
export default {
  props: {
    hotGoods:{
      type: Array,
      required: true
    }
  },
  filters: {
    toFixed,
    rmb
  }
}
</script>

<style scoped lang = 'scss'>
.hotGoods{
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
    .item{
      text-align: center;
      a{
        color: #000;
      }
      .goodsImg{
        width: 100%;
        height: 100%;
      }
      .name{
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 1;
        line-clamp: 1;
        -webkit-box-orient: vertical;
        word-break: break-all; 
        white-space: normal;
      }
      .price{
        padding: 20px 0;
      }
    }
  }
  
}
</style>