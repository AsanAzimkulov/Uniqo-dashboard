import React, { useContext } from 'react';
import styles from './index.module.scss';
import classNames from 'classnames';
import { useLocation } from 'react-router';
import { AppContext } from '../../contexts/AppContext';
import { Link } from 'react-router-dom';

const Header = ({ onToggleMenu }) => {
  const isMobile = window.innerWidth <= 767.5;

  const { pageNames } = useContext(AppContext);
  const { pathname: location } = useLocation();
  const title = pageNames[location];

  return (
    <header className={styles.root}>
      <h1 className={styles.title}>
        <button className={styles.open_mobile} onClick={onToggleMenu}>
          <img src='./icons/menu-icon-m.svg' alt='open menu' className={styles.icon} />
        </button>
        <Link to={'/'} className={styles.logo}>
          <img src='./images/logo.png' alt='Logotype' className={styles.logo_mobile} />
        </Link>
        {title}
      </h1>
      <div className={styles.middle} id='c-scrollbar-down-m'>
        <div className={styles.middle__block}>
          <img
            src='./icons/dollar-circle.svg'
            alt='Dollar icon'
            className={styles.middle__block__icon}
          />
          <p className={styles.middle__block__title}>Price</p>
          <strong className={styles.middle__block__value}>$46,541.04</strong>
        </div>

        <div className={styles.middle__block}>
          <img
            src='./icons/dollar-circle.svg'
            alt='Dollar icon'
            className={styles.middle__block__icon}
          />
          <p className={styles.middle__block__title}>Ath</p>
          <strong className={styles.middle__block__value}>$50,541.04</strong>
        </div>

        <div className={classNames(styles.middle__block, styles.middle__block_time)}>
          <img src='./icons/clock.svg' alt='Clock icon' className={styles.middle__block__icon} />
          <strong className={styles.middle__block__value}>29 : 48</strong>
          <p className={styles.middle__block__title}>min</p>
        </div>
      </div>
      <button className={styles.button}>
        <img
          src='./icons/connect-wallet.svg'
          alt='Connect Wallet icon'
          className={styles.button__icon}
        />
        Connect Wallet
      </button>
    </header>
  );
};

export { Header };
