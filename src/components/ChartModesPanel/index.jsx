import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './index.module.scss';

const ChartModesPanel = ({ modes, onClick, activeIndex }) => {
  const [active, setActive] = useState(activeIndex);
  const onToggle = (index) => {
    setActive(index);
    onClick(index);
  };

  return (
    <ul className={styles.list}>
      {modes.map((mode, i) => (
        <button
          key={mode}
          className={classNames(styles.item, {
            [styles.item_active]: active === i,
          })}
          onClick={() => onToggle(i)}>
          {mode}
        </button>
      ))}
    </ul>
  );
};

export default ChartModesPanel;
