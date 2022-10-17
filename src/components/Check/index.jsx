import classNames from 'classnames';
import React from 'react';
import styles from './index.module.scss';

const Check = ({ send = false, date, value, unqValue, altValue }) => {
  return (
    <div
      className={classNames(styles.item, {
        [styles.item_send]: send,
      })}>
      <div className={styles.first}>
        {send ? (
          <img src='./icons/money-out.svg' alt='Money send icon' className={styles.icon} />
        ) : (
          <img src='./icons/money-in.svg' alt='Money receive icon' className={styles.icon} />
        )}

        <p className={styles.text}>{date}</p>
      </div>
      <p className={styles.second}>{value}</p>
      <p className={styles.third}>{unqValue}</p>
      <p className={styles.fouth}>{altValue}</p>
    </div>
  );
};

export { Check };
