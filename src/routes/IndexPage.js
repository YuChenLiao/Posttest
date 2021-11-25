import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import SearchInput from '../components/search';
import HeadTab from '../components/headTab';
import MainPage from '../components/mainPages';

function IndexPage() {
  return (
    <div className={styles.back}>
      <HeadTab></HeadTab>
      <SearchInput></SearchInput>
      <MainPage></MainPage>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
