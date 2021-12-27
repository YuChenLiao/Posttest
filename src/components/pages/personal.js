import React, { useState, useEffect } from "react";
import { Avatar, Modal, Input } from 'antd';
import 'antd/dist/antd.css';
import style from './personal.css'

const Personal = () => {
  const [isManager, setManager] = useState(false);
  
  useEffect(() => {
    if (isManager) 
      //showManager();
    return () => {}
  },[])

  const showManager = () => {
    const token = localStorage.getItem('token')
    if(token)
      setManager(true);
    else
      alert("请先登录！")
  }

  const login = () => {
    Modal.confirm({
      title: "登录",
      okText: "登录",
      cancelText: "取消",
      closable: true,
      centered: true,
      maskClosable: true,
      onOk: ()=>alert("后端出现问题"),
      content: (
        <div className={style.login}>
          <Input placeholder="用户名" disabled></Input>
          <br></br>
          <Input.Password placeholder="密码" disabled></Input.Password>
        </div>
      )
    })
  }

  const addItem = () => {
    Modal.confirm({
      title: "添加商品",
      okText: "添加",
      cancelText: "取消",
      closable: true,
      centered: true,
      maskClosable: true,
      onOk: ()=>alert("后端出现问题"),
      content: (
        <div className={style.login}>
          <Input placeholder="商品名称" disabled></Input>
          <br></br>
          <Input placeholder="商品价格" disabled></Input>
        </div>
      )
    })
  }

  const deleteItem = () => {
    Modal.confirm({
      title: "下架商品",
      okText: "确定下架",
      cancelText: "取消",
      closable: true,
      centered: true,
      maskClosable: true,
      onOk: ()=>alert("后端出现问题"),
      content: (
        <div className={style.login}>
          后端出现问题，暂不支持该功能
        </div>
      )
    })
  }

  const itemManage = () => {
    Modal.confirm({
      title: "管理订单",
      okText: "全部发货",
      cancelText: "取消",
      closable: true,
      centered: true,
      maskClosable: true,
      onOk: ()=>alert("后端出现问题"),
      content: (
        <div className={style.login}>
          后端出现问题，暂不支持该功能
        </div>
      )
    })
  }

  const ShopManager = () => {
    return(
      <div className={style.apply}>
        <div style={{border: 'none'}}>我的物流</div>
        <div>个人信息</div>
        <div onClick={() => addItem()}>添加商品</div>
        <div onClick={() => deleteItem()}>下架商品</div>
        <div onClick={() => itemManage()}>订单管理</div>
      </div>
    )
  }

  const ApllyShop = () => {
    return(
      <div className={style.apply}>
        <div style={{border: 'none'}}>我的物流</div>
        <div>个人信息</div>
        <div onClick={() => showManager()}>申请成为商家</div>
      </div>
    )
  }

  const ClickGroup = (any) => {
    const {isManager} = any;
    if(!isManager)
      return <ApllyShop></ApllyShop>
    else
      return <ShopManager></ShopManager>
  }

  return (
    <div className={style.content}>
      <div className={style.avatar} onClick={() => login()}>
        <Avatar size={150}/>
        <span>点击登录</span>
      </div>
      <ClickGroup isManager={isManager}></ClickGroup>
    </div>
  )
}

export default Personal;