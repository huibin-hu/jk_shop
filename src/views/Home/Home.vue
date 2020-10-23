<!--
 * @Author: 胡小汇
 * @Date: 2020-10-17 13:57:45
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-20 15:34:58
 * @Description: file content
-->
<template>
  <div class="home">
    <van-search placeholder="请输入搜索关键词" @click="fn"/>
    <swiper :slides = "slides"></swiper>
    <category :category = "category"></category>
    <recommend :recommend = "recommend"></recommend>
    <floor1 :floor1 = "floor1"></floor1>
    <floor2 :floor2 = "floor2"></floor2>
    <floor3 :floor3 = "floor3"></floor3>
    <hotGoods :hotGoods = "hotGoods"></hotGoods>
  </div>
</template>

<script>
import swiper from './components/swiper'
import category from './components/category'
import recommend from './components/recommend'
import floor1 from './components/floor1'
import floor2 from './components/floor2'
import floor3 from './components/floor3'
import hotGoods from './components/hotGoods'
import { getIndex } from '@/api'
export default {
  data(){
    return{
      slides: [],
      category: [],
      recommend: [],
      floor1: [],
      floor2: [],
      floor3: [],
      hotGoods: []
    }
  },
  components: {
    swiper,
    category,
    recommend,
    floor1,
    floor2,
    floor3,
    hotGoods
  },
  methods: {
    fn(){
      console.log(this.slides)
    }
  },
  async created(){
    let res = await getIndex()
    console.log(res.data)
    this.slides = res.data.data.slides
    this.category = res.data.data.category
    this.recommend = res.data.data.recommend
    this.floor1 = res.data.data.floor1
    this.floor2 = res.data.data.floor2
    this.floor3 = res.data.data.floor3
    this.hotGoods = res.data.data.hotGoods
    
  }
}
</script>

<style scoped lang = 'scss' >
.home{
  padding-bottom: 50px;
}
</style>