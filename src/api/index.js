/*
 * @Author: 胡小汇
 * @Date: 2020-10-19 11:29:29
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-23 14:51:58
 * @Description: 封装数据接口
 */
import axios from 'axios'
import router from '@/router'

const baseUrl = 'http://vt.ossjk.com/'
const getIndexInfo = 'goods/getIndexInfo'
const getDetailGoodsInfo = 'goods/getDetailGoodsInfo'
const getCategoryList = 'goods/getCategoryList'
const getCategorySubList = 'goods/getCategorySubList'
const getGoodsListByCategorySubID = 'goods/getGoodsListByCategorySubID'
const sendEmails = 'sendCode'
const register = 'register'
const login = 'login'

function getIndex (config) {
  return axios.get(baseUrl + getIndexInfo, config)
}

function getCategory (config) {
  return axios.get(baseUrl + getCategoryList, config)
}

function getDetailGoods (data, config) {
  return axios({
    url: baseUrl + getDetailGoodsInfo,
    method: 'post',
    headers: {
      "Content-Type": 'application/json'
    },
    data: {
      ...data
    }
  },config)
}

function getCategorySub (data, config) {
  return axios({
    url: baseUrl + getCategorySubList,
    method: 'post',
    headers: {
      "Content-Type": 'application/json'
    },
    data: {
      ...data
    }
  },config)
}

function getGoodsListByCategorySub (data, config) {
  return axios({
    url: baseUrl + getGoodsListByCategorySubID,
    method: 'post',
    headers: {
      "Content-Type": 'application/json'
    },
    data: {
      categorySubId: data.categorySubId
    }
  },config)
}

function sendEmail (data, config) {
  return axios({
    url: baseUrl + sendEmails,
    method: 'post',
    headers: {
      "Content-Type": 'application/json'
    },
    data: {
      email: data.email
    }
  },config)
}

function userRegister (data, config) {
  return axios({
    url: baseUrl + register,
    method: 'post',
    headers: {
      "Content-Type": 'application/json'
    },
    data: {
      ...data
    }
  },config)
}

function userLogin (data, config) {
  return axios({
    url: baseUrl + login,
    method: 'post',
    data: {
      ...data
    }
  },config)
}

axios.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  let token = localStorage.getItem('token')
  if(token){
    config.headers.token = token
  }
  // console.log(config)
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if(response.data.code === 1006){
      router.replace('/login')
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

export {
  getIndex,
  getDetailGoods,
  getGoodsListByCategorySub,
  getCategorySub,
  getCategory,
  sendEmail,
  userRegister,
  userLogin
}