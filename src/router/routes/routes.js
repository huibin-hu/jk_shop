/*
 * @Author: 胡小汇
 * @Date: 2020-10-17 13:55:38
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-21 16:53:45
 * @Description: file content
 */
export const routes = [
  {
    name: 'Home',
    path: '/Home',
    alias: '/',
    component: () => import('@/views/Home/Home'),
    meta: {
      ShowFooter: true
    }
  },
  {
    name: 'List',
    path: '/List',
    props: (route) => {
      return{
        index: route.query.index
      }
    },
    component: () => import('@/views/List/List'),
    meta: {
      ShowFooter: true
    }
  },
  {
    name: 'ShopCart',
    path: '/ShopCart',
    component: () => import('@/views/ShopCart/ShopCart'),
    meta: {
      ShowFooter: true
    }
  },
  {
    name: 'Prefile',
    path: '/Prefile',
    component: () => import('@/views/Prefile/Prefile'),
    meta: {
      ShowFooter: true
    }
  },
  {
    name: 'Details',
    path: '/Details',
    props: (route) => {
      return{
        goodsId: route.query.goodsId
      }
    },
    beforeEnter: (to, from, next) => {
      if(Object.keys(to.query).length && Object.keys(to.query)[0] === 'goodsId'){
        next()
      }else{
        next(false)
      }
    },
    component: () => import('@/views/Details/Details')
  },
  {
    name: 'Login',
    path: '/Login',
    component: () => import('@/views/Login/Login')
  },
  {
    name: 'Regsiter',
    path: '/Regsiter',
    component: () => import('@/views/Regsiter/Regsiter'),
  },
  {
    name: '404',
    path: '*',
    component: () => import('@/views/404/404'),
  }
]