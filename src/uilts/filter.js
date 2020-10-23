/*
 * @Author: 胡小汇
 * @Date: 2020-10-19 17:10:38
 * @LastEditors: 胡小汇
 * @LastEditTime: 2020-10-20 14:58:08
 * @Description: 过滤函数
 */

 
function toFixed (val) {
  try {
    return val.toFixed(2)
  } catch (error) {
    console.log(error)
  }
}

function rmb (val) {
  return '￥' + val
}

function filterNum (val, num) {
  return val.filter((item, index) => {
    return index < num
  })
}

export {
  toFixed,
  rmb,
  filterNum
}