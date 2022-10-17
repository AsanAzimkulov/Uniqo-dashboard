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
    <div className={styles.layout}>
      <div className={styles.left}>
        <Sidebar isOpened={isSidebarOpened} onToggle={() => setIsSidebarOpened((prev) => !prev)} />
      </div>
      <div className={styles.right}>
        <Header />
        <main className={styles.pageContent}>{<Outlet />}</main>
      </div>
    </div>
  );
};

export { MainLayout };
