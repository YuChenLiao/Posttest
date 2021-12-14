import React from 'react';
import style from './searchTab.css'

const SearchTab = (any) => {

  const { changePage } = any;

  const change = (value) => {
    changePage(value);
  }

  return (
    <div className={style.htab}>
      <div className={style.test}>
        <input></input>
      </div>
    </div>
  )
}

export default SearchTab;