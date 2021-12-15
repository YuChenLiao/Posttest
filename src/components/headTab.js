import React from 'react';
import style from './headTab.css';

const HeadTab = (any) => {
  const {changePage} = any;
  return (
    <div className={style.sheader}>
      <div className={style.tabContent}>
        <span onClick={() => changePage('1')}>1</span>
        <span onClick={() => changePage('2')}>2</span>
        <span onClick={() => changePage('3')}>3</span>
        <span className={style.tRight} onClick={() => changePage('4')}>4</span>
      </div>
    </div>
  )
}

export default HeadTab;