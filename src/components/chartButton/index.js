import React from 'react';
import styles from './index.module.scss';

const chartButton = ({ value }) => {
  return (
    <button className={styles.root}>
      {value}
    </button>
  )
}

export { chartButton };