import React from "react";
import { List } from 'antd'
import 'antd/dist/antd.css';
import style from "./message.css"

const data = [
  '消息1',
  '消息2',
  '消息3',
  '消息4',
  '消息5',
  '消息6'
]

const MessagePage = () => {
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

export default MessagePage;