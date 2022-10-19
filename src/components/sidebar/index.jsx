import React from 'react';
import styles from './index.module.scss';
import { Link, useLocation } from 'react-router-dom';
import classNames from 'classnames';

const Sidebar = ({ isOpened, onToggle }) => {
  const { pathname: location } = useLocation();
  return (
    <aside
      className={classNames(styles.root, {
        [styles.root_closed]: !isOpened,
      })}>
      <button className={styles.open}>
        <img src='./icons/menu-open-icon.svg' alt='Open icon' className={styles.icon} />
      </button>
      <div>
        <Link to={'/'} className={styles.logo} onClick={onToggle}>
            <img src='./images/logo.png' alt='Logotype image' className={styles.logo__image} />
            <p className={styles.logo__text}>Uniqo</p>
        </Link>
        <nav className={styles.menu}>
          <ul className={styles.list}>
            <li>
              <Link
                to={'/'}
                onClick={onToggle}
                className={classNames(styles.item, {
                  [styles.item_active]: location === '/',
                })}>
                <div className={styles.icon}>
                  <img
                    src='./icons/menu-dashboard.svg'
                    alt='Dashboard icon'
                    style={{ marginRight: -3, marginBottom: -3 }}
                  />
                </div>
                <p className={styles.text}>Dashboard</p>
              </Link>
            </li>
            <li>
              <Link
                onClick={onToggle}
                className={classNames(styles.item, {
                  [styles.item_active]: location === '/account',
                })}
                to={'/account'}>
                <div className={styles.icon}>
                  <img
                    src='./icons/menu-account.svg'
                    alt='Account icon'
                    style={{
                      marginLeft: -3,
                    }}
                  />
                </div>
                <p className={styles.text}>Account</p>
              </Link>
            </li>
            <li>
              <Link
                to={'/'}
                className={classNames(styles.item, {
                  [styles.item_active]: location === '/swap',
                })}>
                <div className={styles.icon}>
                  <img
                    src='./icons/menu-swap.svg'
                    alt='Swap icon'
                    style={{
                      marginLeft: -6,
                    }}
                  />
                </div>

                <p className={styles.text}>Swap</p>
              </Link>
            </li>
            <li>
              <Link
                to={'/'}
                className={classNames(styles.item, {
                  [styles.item_active]: location === '/docs',
                })}>
                <div className={styles.icon}>
                  <img
                    src='./icons/menu-docs.svg'
                    alt='Docs icon'
                    style={{ marginLeft: -3, marginTop: -6 }}
                  />
                </div>
                <p className={styles.text}>Docs</p>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.socials}>
        <a className={styles.item} href='#'>
          <img src='./icons/menu-twitter.svg' alt='Twitter Icon' className={styles.image} />
          <p className={styles.text}>Twitter</p>
        </a>
        <a className={styles.item} href='#'>
          <img src='./icons/menu-discord.svg' alt='Discord Icon' className={styles.image} />
          <p className={styles.text}>Discord</p>
        </a>
      </div>
    </aside>
  );
};

export { Sidebar };
