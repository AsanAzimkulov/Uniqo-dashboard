import classNames from 'classnames';
import React, { useState } from 'react';
import styles from './index.module.scss';

const InputButton = ({option, onClick, active}) => {

  return (
    <button
    type='button'
      className={classNames(styles.root, {
        [styles.root_active]: active,
      })}
      onClick={onClick}>
      {option}
    </button>
  );
};

export { InputButton };
