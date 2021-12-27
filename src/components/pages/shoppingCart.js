import React from "react";
import { List } from 'antd';
import 'antd/dist/antd.css';
import style from './message.css'

const data = []

const ShoppingCart = () => {
  return (
    <div className={style.mBox}>
      <div className={style.mContent}>
        <List
          bordered
          dataSource={data}
          header={<div>未送达</div>}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
        <br></br>
        <List
          bordered
          dataSource={data}
          header={<div>已送达</div>}
          renderItem={item => (
            <List.Item>
              {item}
            </List.Item>
          )}
        />
      </div>
    </div>
  )
}

export default ShoppingCart;