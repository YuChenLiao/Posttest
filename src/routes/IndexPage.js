import React from 'react';
import { connect } from 'dva';
import styles from './IndexPage.css';

function IndexPage() {
  return (
    <div className={styles.back}>
    </div>
  );
}

IndexPage.propTypes = {
};

export default connect()(IndexPage);
