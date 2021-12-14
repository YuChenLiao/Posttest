import React from 'react';
import style from './headTab.css'

const HeadTab = (any) => {

  const { changePage } = any;

  const change = (value) => {
    changePage(value);
  }

  return (
    <div className={style.htab}>
      <div className={style.test}></div>
    </div>
  )
}

export default HeadTab;