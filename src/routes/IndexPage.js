import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import HeadTab from '../components/headTab';
import SearchTab from '../components/searchTab';
import MainPage from '../components/mainPages';

function IndexPage() {
  const [page, setPage] = useState('1');
  
  const changePage = (value) => {
    setPage(value);
  }

  return (
    <div className={styles.back}>
      <SearchTab changePage={changePage}></SearchTab>
      <HeadTab></HeadTab>
      <MainPage page={page}></MainPage>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
