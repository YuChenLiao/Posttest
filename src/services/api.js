import request from '../utils/request';

export function query() {
  return request('/api/users');
}

export function getTrade() {
  // 获取商品列表
  return request();
}

export function searchTrade() {
  // 搜索商品
  return request();
}

export function getMessage() {
  // 获取信息列表
  return request();
}

export function login() {
  // 获取 token 和用户信息并登录
  return request();
}

export function getCart() {
  // 获取购物车列表
  return request();
}

export function removeCartItem() {
  // 移除购物车内商品
  return request();
}

export function pay() {
  // 模拟付款
  return request();
}

export function toMerchant() {
  // 申请成为商家
  return request();
}

export function removeTrade() {
  // 商家删除商品
  return request();
}

export function addTrade() {
  // 商家添加新商品
  return request();
}
