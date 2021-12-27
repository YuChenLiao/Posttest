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