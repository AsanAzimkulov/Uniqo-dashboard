import classNames from 'classnames';
import React from 'react';
import styles from './index.module.scss';

const ChartCustomTooltip = ({ value, id, textId, absolute, variant = 1 }) => {
  return (
    <div
      className={classNames(styles.planc, {
        [styles.planc_absoluted]: absolute,
        [styles.planc_variant2]: variant === 2,
        [styles.planc_variant3]: variant === 3,
      })}
      id={id}>
      <img
        src={
          variant === 1 || variant === 2
            ? './icons/verticalChartItemPlancIcon.svg'
            : './icons/verticalChartItemPlancIcon2.svg'
        }
        alt='Arrow up direction icon'
        className={styles.icon}
      />
      <p className={styles.planc__value} id={textId}>
        {value}
      </p>
      <div className={styles.blur}></div>
    </div>
  );
};

export default ChartCustomTooltip;
