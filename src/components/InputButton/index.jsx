import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './index.module.scss';

const InputButton = ({option, onClick}) => {
  const [isActive, setIsActive] = useState(false);
  const onToggle = (e) => {
    onClick();
    setIsActive(prev => !prev)
  }
  return (
    <button
    type='button'
      className={classNames(styles.root, {
        [styles.root_active]: isActive,
      })}
      onClick={onToggle}>
      {option}
    </button>
  );
};

export { InputButton };
