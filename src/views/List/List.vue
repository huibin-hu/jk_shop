<!--
 * @Author: 胡小汇
 * @Date: 2020-10-17 13:57:45
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-20 15:52:18
 * @Description: file content
-->
<template>
  <div class="list">
     <van-nav-bar title="类别列表" />
    <div class="container">
      <!-- 侧导航 -->
      <div class="slideBar">
        <div
          :class="['slideBar-item',idx === slideBarCurrent? 'active' : null]"
          v-for="(item,idx) of siderList"
          :key="item.id"
          @click="slideBarSelect(item.id,idx)"
        >{{item.mallCateforyName}}</div>
      </div>

      <!-- 右边内容区 -->
      <div class="content">
        <!-- 标题 -->
        <div class="title">
          <div
            :class="['title-item',idx === titleCurrent? 'active' : null]"
            v-for="(item,idx) of topList"
            :key="item.id"
            @click="titleSelect(idx, item.id)"
          >{{item.mallSubName}}</div>
        </div>

        <!-- 列表 -->
        <div class="list">
          <div class="list-item" v-for="item of goodsList" :key="item.id">
            <van-image class="image" :src="item.pictureComperssPath">
              <template v-slot:error>加载失败</template>
            </van-image>
            <div class="info">
              <p>{{item.name}}</p>
              <p>{{item.oriPrice}}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import * as api from '@/api'
import { filterNum } from '@/uilts/filter'
export default {
  props: {
    index: {
      type: [Number, String],
      default: 0
    }
  },
  data(){
    return{
      siderList: [],  //侧列表
      topList: [],  //头列表
      goodsList: [],  //商品信息
      slideBarCurrent: 0,
      titleCurrent: 0
    }
  },
  filters: {
    filterNum
  },
  watch: {
     index: {
      async handler(newVal){
        let num = parseInt(newVal)
  
        let res = await this.API_getCategory()
        let res2 = await this.API_getCategorySub(res.data.data[num].id)
        let res3 = await this.API_getGoodsListByCategorySub(res2.data.data[0].id)
        
        this.slideBarCurrent = num
        this.titleCurrent = 0
        this.siderList = filterNum(res.data.data, 5)
        this.topList = filterNum(res2.data.data, 4)
        this.goodsList = res3.data.data
      },
      immediate: true
    }
  },
  methods: {
    async API_getCategory () {
      return await api.getCategory()
    },
    async API_getCategorySub (id) {
      return await api.getCategorySub({categoryId: id})
    },
    async API_getGoodsListByCategorySub (id) {
      return await api.getGoodsListByCategorySub({categorySubId: id})
    },
    async slideBarSelect(id, index){
      let res2 = await this.API_getCategorySub(id)
      let res3 = await this.API_getGoodsListByCategorySub(res2.data.data[0].id)
      
      this.slideBarCurrent = index
      this.titleCurrent = 0
      this.topList = filterNum(res2.data.data, 4)
      this.goodsList = res3.data.data
    },
    async titleSelect(index, id){
      let res3 = await this.API_getGoodsListByCategorySub(id)
      this.titleCurrent = index
      this.goodsList = res3.data.data
    }
  },
  async created(){
    
  }
}
</script>

<style scoped lang = 'scss'>
.list {
  .container {
    //内容区
    display: flex;

    .slideBar {
      //侧导航
      width: 95px;
      background: skyblue;
      .slideBar-item {
        height: 40px;
        border-bottom: 1px solid #ccc;
        text-align: center;
        line-height: 40px;
      }
      & .active {
        background: pink;
      }
    }

    .content {
      //内容区
      flex: 1;

      .title {
        //标题
        display: flex;
        height: 42px;
        align-items: center;
        justify-content: space-around;
        border-bottom: 1px solid #ccc;
        .title-item {
          text-align: center;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        & .active {
          color: red;
        }
      }

      .list {
        //列表
        .list-item {
          display: flex;
          justify-content: space-around;
          align-items: center;
          height: 100px;
          border-bottom: 1px solid #ccc;
          .image {
            width: 90px;
          }
        }
      }
    }
  }
}
</style>