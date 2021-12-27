import React from "react";
import { List } from 'antd';
import 'antd/dist/antd.css';
import style from './message.css'

const data = [
  '商品1',
  '商品2',
  '商品3',
  '商品4',
  '商品5',
  '商品6'
]

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