<!--
 * @Author: 胡小汇
 * @Date: 2020-10-17 13:57:45
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-21 16:42:40
 * @Description: file content
-->
<template>
  <div class="shopcart">
    <div class="title">
      <van-nav-bar title="购物车"/>
    </div>
    <template v-if="shopCartList.length">
      <div class="shopCartList">
        <van-checkbox v-model="Allchecked">全选</van-checkbox>
        <div class="shopCartItem" v-for="(item, index) in shopCartList" :key="item.id">
          <van-checkbox v-model="item.checked"></van-checkbox>
          <van-image width="100" height="100" :src="item.img" />
          <div>
            <p>{{item.name}}</p>
            <van-stepper v-model="item.num" />
          </div>
          <div>
            <p>{{item.price}}</p>
            <van-button type="danger" @click="del(index, item.checked)">删除</van-button>
          </div>
        </div>
        <div class="total">商品总价: {{Alltotal}}</div>
        <van-button type="danger" @click="empty">清空购物车</van-button>
      </div>
    </template>
    <template v-else>空空如也</template>
  </div>
</template>

<script>
export default {
  data(){
    return{
      shopCartList: []
    }
  },
  methods: {
    del(index, checked){
      console.log(index)
      if(checked){
        this.$dialog.confirm({
          title: '删除',
          message: '确认删除此商品',
        })
        .then(() => {
          // on confirm
          this.shopCartList.splice(index, 1)
          localStorage.setItem('shopCartList', JSON.stringify(this.shopCartList))
        })
        .catch(() => {
          // on cancel
        });
      }else{
        this.$dialog.alert({
          message: '请勾选checked',
        })
      }
    },
    empty(){
      this.$dialog.confirm({
        title: '删除',
        message: '确认删除此商品',
      })
      .then(() => {
        // on confirm
        this.shopCartList = []
      localStorage.removeItem('shopCartList')
      })
      .catch(() => {
        // on cancel
      });
    }
  },
  created(){
    if(localStorage.getItem('shopCartList') != null){
      this.shopCartList = JSON.parse(localStorage.getItem('shopCartList'))
    }
  },
  computed:{
    Alltotal(){
      let sum = 0
      this.shopCartList.forEach((item) => {
        if(item.checked){
          sum += item.price * item.num
        }
      })
      return sum
    },
    Allchecked:{
      get(){
        return this.shopCartList.every((item) => {
          return item.checked
        })
      },
      set(val){
        this.shopCartList.forEach((item) => {
          item.checked = val
        })
      }
    }
  }
}
</script>

<style scoped lang = 'scss'>
.shopcart{
  .shopCartList{
    .shopCartItem{
      display: flex;
      justify-content: space-around;
    }
  }
}
</style>