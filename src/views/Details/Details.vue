<!--
 * @Author: 胡小汇
 * @Date: 2020-10-19 10:11:15
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-21 16:06:06
 * @Description: file content
-->
<template>
  <div class="details">
    <van-nav-bar
      title="商品详情"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <van-image :src="information.image1" />
    <div>
      <p>{{information.name}}</p>
      <p>{{information.oriPrice}}</p>
    </div>
    <div v-html="information.detail"></div>
    <div class="addShopCart">
      <van-button type="danger" block @click="addShopCart">加入购物车</van-button>
    </div>
  </div>
</template>

<script>
import { getDetailGoods } from '@/api'
export default {
  props: {
    goodsId: {
      type: String,
      required: true
    }
  },
  data(){
    return{
      information: []
    }
  },
  async created(){
    let data = await getDetailGoods({goodsId: this.goodsId})
    console.log(data)
    this.information = data.data.data
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    addShopCart(){
      let shopCartItem = {
        id: this.information.id,
        name: this.information.name,
        img: this.information.pictureComperssPath,
        num: 1,
        checked: false,
        price: this.information.oriPrice
      }
      let shopCartList = []
      if(localStorage.getItem('shopCartList') === null){
        shopCartList.push(shopCartItem)
        localStorage.setItem('shopCartList', JSON.stringify(shopCartList))

      }else{
        console.log(localStorage.getItem('shopCartList'))
        shopCartList = JSON.parse(localStorage.getItem('shopCartList'))
        let bool = false
        // console.log(shopCartList)
        shopCartList.forEach((item) => {
          if(item.id === this.information.id){
            item.num++
            bool = true
            localStorage.setItem('shopCartList', JSON.stringify(shopCartList))
          }
        })
        if(!bool){
          shopCartList.push(shopCartItem)
          localStorage.setItem('shopCartList', JSON.stringify(shopCartList))
        }
      }
      
      this.$toast.success('加购成功')
    }
  }
}
</script>

<style scoped lang = 'scss'>
.details{
  width: 100%;
  height: 100%;
  .addShopCart{
    width: 100%;
    position: fixed;
    bottom: 0;
  }
}
</style>