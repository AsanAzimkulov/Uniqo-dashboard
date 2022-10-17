import classNames from 'classnames';
import React, { useRef, useEffect, useState } from 'react';
import { LinearChart } from '../../components/LinearChart';
import { MainLayout } from '../../layouts/MainLayout';
import VerticalChartItem from '../../components/VerticalChartColumn';
import styles from './index.module.scss';
import ChartModesPanel from '../../components/ChartModesPanel';
import { Check } from '../../components/Check';

function randomIntFromInterval(min, max) {
  // min and max included
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const Home = () => {
  const labels = new Array(7).fill(null).map((a, index) => `Jul ${18 + index}`);

  const data = labels.map((x) => randomIntFromInterval(20000, 23000));

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
    <div className={styles.page}>
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
        <div className={styles.left}>
          <div className={styles.top}>
            <h2>Price Chart</h2>
            <ChartModesPanel
              modes={['1h', '3h', '5h', '1d', '1m', '1w']}
              onClick={() => {}}
              activeIndex={3}
            />
          </div>
          <div className={styles.down}>
            <LinearChart data={data} labels={labels} width={495} height={223} />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h2>Burned Token Chart</h2>
            <ChartModesPanel
              modes={['3y', '5y', '10y', '15y', '20y']}
              onClick={() => {}}
              activeIndex={3}
            />
          </div>
          <div className={styles.bottom}>
            <div className={styles.ver}>
              <p className={styles.ver__item}>$23,000</p>
              <p className={styles.ver__item}>$22,000</p>
              <p className={styles.ver__item}>$21,000</p>
              <p className={styles.ver__item}>$20,000</p>
              <p className={styles.ver__item}>0</p>
            </div>
            <div className={styles.hor}>
              {Array(9)
                .fill(null)
                .map((x, i) => `Jul ${15 + i}`)
                .map((label) => (
                  <VerticalChartItem
                    value={'$21500'}
                    percentage={randomIntFromInterval(30, 100)}
                    label={label}
                    variant={3}
                  />
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className={styles.third}>
        <div className={styles.left}>
          <div className={styles.top}>
            <h2>Recent transactions</h2>
            <div className={styles.filter}>
              <p className={styles.text}>Filter</p>
              <img src='./icons/filter.svg' alt='Filter icon' className={styles.icon} />
            </div>
          </div>
          <div className={styles.checks}>
            <Check date={'25 min ago'} unqValue={'0.24 UNQ'} altValue={'$1440'} value={'$56,47'} />
            <Check
              date={'25 min ago'}
              unqValue={'0.24 UNQ'}
              altValue={'$1440'}
              value={'$56,47'}
              send
            />
            <Check date={'25 min ago'} unqValue={'0.24 UNQ'} altValue={'$1440'} value={'$56,47'} />
            <Check
              date={'25 min ago'}
              unqValue={'0.24 UNQ'}
              altValue={'$1440'}
              value={'$56,47'}
              send
            />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.top}>
            <h2>Rebound Effect</h2>
          </div>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.top}>
                <img src='./icons/rebound-dollars.svg' alt='dollars icon' className={styles.icon} />
                <h3 className={styles.title}>Last ATH Price</h3>
              </div>
              <strong className={styles.value}>$19,82</strong>
            </li>
            <li className={styles.item}>
              <div className={styles.top}>
                <img src='./icons/dollar-circle.svg' alt='dollar icon' className={styles.icon} />
                <h3 className={styles.title}>Current Price</h3>
              </div>
              <strong className={styles.value}>$19,82</strong>
            </li>
            <li className={classNames(styles.item, styles.item_withButton)}>
              <div className={styles.top}>
                <h3 className={styles.title}>Rebound Trigger Percentage</h3>
                <strong className={styles.value}>56%</strong>
              </div>
              <button className={styles.button}>
                <img
                  src='./icons/dollar-circle-alt.svg'
                  alt='dollar icon'
                  className={styles.icon}
                />
                $8,82
              </button>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export { Home };
