<!--
 * @Author: 胡小汇
 * @Date: 2020-10-22 10:45:12
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-22 15:38:22
 * @Description: file content
-->
<template>
  <div class="regsiter">
    <div class="title">
      <van-nav-bar
        title="注册页面"
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
        <!-- phone -->
        <van-field
          v-model="phone"
          type="text"
          name="phone"
          label="电话"
          :rules="[{ required: true, message: '请填写电话' }]"
        />
        <!-- email -->
        <van-field
          v-model="email"
          type="text"
          name="email"
          label="邮箱"
          :rules="[{ required: true, message: '请填写邮箱' }]"
        >
          <template #button>
            <van-button v-if="isdisabled" size="small" type="primary" @click.prevent="sendEmail">发送验证码</van-button>
            <van-button v-else size="small" type="primary" disabled>{{countDown}}s</van-button>
          </template>
        </van-field>
        <!-- 性别 -->
        <van-field name="radio" label="性别">
          <template #input>
            <van-radio-group v-model="sex" direction="horizontal">
              <van-radio name="男">男</van-radio>
              <van-radio name="女">女</van-radio>
            </van-radio-group>
          </template>
        </van-field>
        <!-- 生日 -->
        <van-field
          readonly
          clickable
          name="datetimePicker"
          :value="value"
          label="生日"
          placeholder="点击选择时间"
          @click="showPicker = true"
        />
        <van-popup v-model="showPicker" position="bottom">
          <van-datetime-picker
            type="month-day"
            title="选择月日"
            @confirm="onConfirm"
            @cancel="showPicker = false"
            :formatter="formatter"
          />
        </van-popup>

        <!-- code -->
        <van-field
          v-model="code"
          type="text"
          name="code"
          label="验证码"
          :rules="[{ required: true, message: '请填写验证码' }]"
        />
        <div style="margin: 16px;">
          <van-button round block type="info" native-type="submit">
            提交
          </van-button>
        </div>
      </van-form>
    </div>
  </div>
</template>

<script>
import { sendEmail, userRegister } from '@/api'
export default {
  data(){
    return{
      username: '',
      password: '',
      email: '',
      phone: '',
      sex: '男',
      code: '',
      value: '',
      showPicker: false,
      isdisabled: true,
      countDown: 5
    }
  },
  methods: {
    onClickLeft(){
      this.$router.go(-1)
    },
    async onSubmit(){
      let res = await userRegister({
        name:this.username,
        pwd: this.password,
        email: this.email,
        phone: this.phone,
        sex: this.sex,
        birth: this.value,
        code: this.code
      })
      
      if(res.data.code === 1000){
        this.$toast.success('发送成功');
      }else if(res.data.code === 1001){
        this.$toast.fail('邮箱已注册');
      }else{
        this.$toast.fail(res.data.msg);
      }
    },
    onConfirm(time) {
      let month = time.getMonth() + 1 < 10 ? '0' + (time.getMonth() + 1) : time.getMonth() + 1
      let date = time.getDate() < 10 ? '0' + time.getDate() : time.getDate()
      this.value = month + '-' + date
      this.showPicker = false;
    },
    formatter(type, val) {
      if (type === 'month') {
        return `${val}月`;
      } else if (type === 'day') {
        return `${val}日`;
      }
      return val;
    },
    async sendEmail(){
      this.isdisabled = false
      console.log('email')
      
      let timer = setInterval(()=>{
        if(this.countDown){
          this.countDown--
        }else{
          clearInterval(timer)
          this.isdisabled = true
        }
      },1000)
      let res = await sendEmail({email: this.email})
      console.log(res)
      if(res.data.code === 1000){
        this.$toast.success('发送成功');
        this.$router.push('/login')
      }
    }
  }
}
</script>

<style>
</style>