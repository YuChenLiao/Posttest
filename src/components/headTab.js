import React from 'react';
import style from './headTab.css'

const HeadTab = (any) => {

  const { changePage } = any;

  const change = (value) => {
    changePage(value);
  }

  return (
    <div className={style.tab}>
      导航栏区域
      <button onClick={change}></button>
    </div>
  )
}

export default HeadTab;