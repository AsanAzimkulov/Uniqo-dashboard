import React, { useContext, useState } from 'react';
import styles from './index.module.scss';
import { Header } from '../../components/header';
import classNames from 'classnames';
import { Sidebar } from '../../components/sidebar';
import { AppContext } from '../../contexts/AppContext';

const MainLayout = ({ pageTitle, children, className }) => {
  const { isSidebarOpened, setIsSidebarOpened } = useContext(AppContext);
  return (
    <div className={classNames(styles.layout, className)}>
      <div className={styles.left}>
        <Sidebar isOpened={isSidebarOpened} onToggle={() => setIsSidebarOpened((prev) => !prev)} />
      </div>
      <div className={styles.right}>
        <Header title={pageTitle} />
        <main className={styles.pageContent}>{children}</main>
      </div>
    </div>
  );
};

export { MainLayout };
