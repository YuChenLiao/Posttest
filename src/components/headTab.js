import React from 'react';
import style from './headTab.css';

const HeadTab = () => {
  return (
    <div className={style.sheader}>
      <div className={style.tabContent}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span className={style.tRight}>4</span>
      </div>
    </div>
  )
}

export default HeadTab;