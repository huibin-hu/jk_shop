<!--
 * @Author: 胡小汇
 * @Date: 2020-10-22 10:45:00
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-22 19:52:41
 * @Description: file content
-->
<template>
  <div class="regsiter">
    <div class="title">
      <van-nav-bar
        title="登录页面"
        left-text="返回"
        left-arrow
        @click-left="onClickLeft"
      />
    </div>
    <div class="from">
      <van-form @submit="onSubmit">
        <!-- 用户名 -->
        <van-field
          v-model="username"
          name="username"
          label="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <!-- 密码 -->
        <van-field
          v-model="password"
          type="password"
          name="password"
          label="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div style="margin: 16px">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { userLogin } from '@/api'
export default {
  data(){
    return{
      username: '',
      password: ''
    }
  },
  methods:{
    async onSubmit(){
      let res = await userLogin({
        name: this.username,
        pwd: this.password
      })
      if(res.data.code === 1000){
        localStorage.setItem('token', res.data.data)
        this.$toast.success('登录成功');
        this.$router.push('/')
      }else{
        this.$toast.fail(res.data.msg)
      }
    },
    onClickLeft(){
      this.$router.go(-1)
    }
  }
}

</script>

<style>
</style>