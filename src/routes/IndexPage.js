import React, { useState } from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import SearchInput from '../components/search';
import HeadTab from '../components/headTab';
import MainPage from '../components/mainPages';

function IndexPage() {
  const [page, setPage] = useState('1');
  
  const changePage = (value) => {
    setPage(value);
  }

  return (
    <div className={styles.back}>
      <HeadTab changePage={changePage}></HeadTab>
      <SearchInput></SearchInput>
      <MainPage page={page}></MainPage>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
