import classNames from 'classnames';
import React, { useState } from 'react';
import ChartCustomTooltip from '../ChartCustomTooltip';
import styles from './index.module.scss';

const VerticalChartItem = ({ label, value, percentage, variant }) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div
      className={classNames(styles.root, {
        [styles.root_active]: isActive,
        [styles.root_variant2]: variant === 2
      })}
      onMouseEnter={() => setIsActive(true)}
      onMouseLeave={() => setIsActive(false)}>
      <div className={styles.scale} style={{ maxHeight: `${percentage}%` }}>
        <div className={styles.planc}>
          <ChartCustomTooltip value={value} />
        </div>
      </div>
      <h4 className={styles.label}>{label}</h4>
    </div>
  );
};

export default VerticalChartItem;
