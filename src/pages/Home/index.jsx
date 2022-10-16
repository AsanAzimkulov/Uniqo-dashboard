import classNames from 'classnames';
import React from 'react';
import VerticalChartItem from '../../components/VerticalChartColumn';
import { MainLayout } from '../../layouts/MainLayout';
import styles from './index.module.scss';

const Home = () => {
  const firstChartValues = [
    {
      label: 'Apr',
      percentage: 50,
      value: '200K',
    },
    {
      label: 'May',
      percentage: 50,
      value: '200K',
    },
    {
      label: 'Jun',
      percentage: 50,
      value: '200K',
    },
    {
      label: 'Jul',
      percentage: 50,
      value: '200K',
    },
    {
      label: 'Aug',
      percentage: 77.08,
      value: '200K',
    },
    {
      label: 'Sep',
      percentage: 100,
      value: '200K',
    },
  ];
  return (
    <MainLayout pageTitle={'Dashboard'} className={styles.page}>
      <div className={styles.first}>
        <div className={styles.left}>
          <div className={styles.blue}>
            <h3 className={styles.title}>APY</h3>
            <strong className={styles.value}>56%</strong>
            <h3 className={styles.title}>APR Daily</h3>
            <strong className={styles.value}>38%</strong>
          </div>
          <div className={styles.double}>
            <div className={styles.item}>
              <h3 className={styles.title}>Marketcap</h3>
              <strong className={styles.value}>$7.32M</strong>
            </div>
            <div className={styles.item}>
              <h3 className={styles.title}>Circulating Supply</h3>
              <strong className={styles.value}>3.41B</strong>
            </div>
          </div>
          <div className={styles.doubleMono}>
            <div>
              <h3 className={styles.title}>C. Supply</h3>
              <strong className={styles.value}>84.23%</strong>
            </div>
            <div>
              <h3 className={styles.title}>Burned</h3>
              <strong className={styles.value}>15.77%</strong>
            </div>
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.right__left}>
            <div className={styles.top}>
              <img src='./icons/holders.svg' alt='people icon' className={styles.top__icon} />
              <h3 className={styles.top__title}>Holders</h3>
            </div>
            <div className={styles.down}>
              <h4 className={styles.down__title}>Total</h4>
              <strong className={styles.down__value}>125.896</strong>
            </div>
          </div>
          <div className={styles.right__right}>
            {firstChartValues.map((props) => (
              <VerticalChartItem {...props} key={props.label} />
            ))}
          </div>
        </div>
      </div>
      <div className={styles.second}>
        <div className={styles.left}></div>
        <div className={styles.right}></div>
      </div>
    </MainLayout>
  );
};

export { Home };
