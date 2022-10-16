import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './index.module.scss';

const VerticalChartItem = ({ label, value, percentage }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={classNames(styles.root, {
        [styles.root_active]: isActive,
      })}
      onClick={() => setIsActive((prev) => !prev)}>
      <div className={styles.scale} style={{ maxHeight: `${percentage}%` }}>
        <div className={styles.planc}>
          <img src="./icons/verticalChartItemPlancIcon.svg" alt="Arrow up direction icon" className={styles.icon} />
          <p className={styles.planc__value}>{value}</p>
        </div>
      </div>
      <h4 className={styles.label}>{label}</h4>
    </div>
  );
};

export default VerticalChartItem;
