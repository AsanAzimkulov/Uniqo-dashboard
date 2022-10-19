import React, { useContext, useState } from 'react';
import styles from './index.module.scss';
import { Header } from '../../components/header';
import classNames from 'classnames';
import { Sidebar } from '../../components/sidebar';
import { AppContext } from '../../contexts/AppContext';
import { Outlet } from 'react-router';

const MainLayout = () => {
  const { isSidebarOpened, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div
      className={classNames(styles.layout, {
        [styles.layout_sidebarOpened]: isSidebarOpened,
      })}>
      <div className={styles.left} id='c-scrollbar-1'>
        <div className={styles.forceScroll}></div>
        <Sidebar isOpened={isSidebarOpened} onToggle={() => setIsSidebarOpened((prev) => !prev)} />
      </div>
      <div className={styles.right}>
        <Header onToggleMenu={() => setIsSidebarOpened((prev) => !prev)} />
        <main className={styles.pageContent}>{<Outlet />}</main>
      </div>
    </div>
  );
};

export { MainLayout };
