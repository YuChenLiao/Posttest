import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';
import SearchInput from '../components/search';

function IndexPage() {
  return (
    <div className={styles.back}>
      <SearchInput></SearchInput>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
