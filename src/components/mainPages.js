import React from 'react';
import FirstPage from './pages/firstPage';
import MessagePage from './pages/message';
import Personal from './pages/personal';
import ShoppingCart from './pages/shoppingCart';
import style from './mainPages.css';

const MainPage = (any) => {

  const {page} = any

  const ShowPage = () => {
    console.log(page)
    switch(page) {
      case '1': return <FirstPage/>;
      case '2': return <MessagePage/>;
      case '3': return <ShoppingCart/>;
      case '4': return <Personal/>;
      default: return;
    }
  }

  return (
    <div className={style.main}>
      <ShowPage/>
    </div>
  )
}

export default MainPage;