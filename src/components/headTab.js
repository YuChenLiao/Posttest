import React from 'react';
import style from './headTab.css';

const HeadTab = (any) => {
  const {changePage} = any;
  return (
    <div className={style.sheader}>
      <div className={style.tabContent}>
        <span onClick={() => changePage('1')}>首页</span>
        <span onClick={() => changePage('2')}>信息</span>
        <span onClick={() => changePage('3')}>购物车</span>
        <span 
          className={style.tRight} 
          onClick={() => changePage('4')}
        >个人空间</span>
      </div>
    </div>
  )
}

export default HeadTab;