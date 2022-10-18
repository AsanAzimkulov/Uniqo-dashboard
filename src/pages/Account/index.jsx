import classNames from 'classnames';
import React, { useState } from 'react';
import { MainLayout } from '../../layouts/MainLayout';
import ChartModesPanel from '../../components/ChartModesPanel';
import styles from './index.module.scss';
import { LinearChart } from '../../components/LinearChart';
import { randomIntFromInterval } from '../../utils/random';
import { InputButton } from '../../components/InputButton';

const Account = () => {
  const CIRCLE_CHART_PERCENT = 2.73;

  const circleChartParams = `10000 ${273 - CIRCLE_CHART_PERCENT * 48}`;

  const labels = new Array(9).fill(null).map((a, index) => `Jul ${18 + index}`);

  const data = labels.map((x) => randomIntFromInterval(20000, 23000));

  const [isSelectExpanded, setIsSelectExpanded] = useState(false);

  const [activeInputMode, setActiveInputMode] = useState(0);

  return (
    <div className={styles.page}>
      <div className={styles.left}>
        <ul className={styles.list}>
          <li className={classNames(styles.item, styles.item_blue)}>
            <h3>Total Balance</h3>
            <strong>12,319</strong>
            <div className={styles.crypto}>
              <img
                src='./icons/eth-icon-alt.svg'
                alt='Crypto currency icon'
                className={styles.icon}
              />
              <p className={styles.crypto__value}>209,20 ETH</p>
            </div>
          </li>

          <li className={styles.item}>
            <div className={styles.top}>
              <img src='./icons/rebound-dollars.svg' alt='Dollars icon' className={styles.icon} />
              <h3 className={styles.title}>Daily Earnings</h3>
            </div>
            <div className={styles.down}>
              <strong className={styles.value}>$120,000</strong>
              <div className={styles.crypto}>
                <img
                  src='./icons/eth-icon.svg'
                  alt='Crypto currency icon'
                  className={styles.icon}
                />
                <p className={styles.crypto__value}>12,56 ETH</p>
              </div>
            </div>
          </li>
          <li className={styles.item}>
            <div className={styles.top}>
              <img src='./icons/rebound-dollars.svg' alt='Dollars icon' className={styles.icon} />
              <h3 className={styles.title}>Monthly Earnings</h3>
            </div>
            <div className={styles.down}>
              <strong className={styles.value}>$120,000</strong>
              <div className={styles.crypto}>
                <img
                  src='./icons/eth-icon.svg'
                  alt='Crypto currency icon'
                  className={styles.icon}
                />
                <p className={styles.crypto__value}>12,56 ETH</p>
              </div>
            </div>
          </li>
          <li className={classNames(styles.item, styles.item_withoutCrypto)}>
            <div className={styles.top}>
              <img src='./icons/rebound-dollars.svg' alt='Dollars icon' className={styles.icon} />
              <h3 className={styles.title}>Take Profit Token Amount</h3>
            </div>
            <div className={styles.down}>
              <strong className={styles.value}>12,56 ETH</strong>
            </div>
          </li>
          <li className={classNames(styles.item, styles.item_withoutCrypto)}>
            <div className={styles.top}>
              <img src='./icons/rebound-dollars.svg' alt='Dollars icon' className={styles.icon} />
              <h3 className={styles.title}>Take Profit Token Amount</h3>
            </div>
            <div className={styles.down}>
              <strong className={styles.value}>$12,56</strong>
            </div>
          </li>

          <li className={classNames(styles.item, styles.item_chart)}>
            <h2 className={styles.title}>Take Profit Rate</h2>
            <div className={styles.wrapper}>
              <div className={styles.params}>
                <strong>48%</strong>
                <p>ETH</p>
              </div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='99'
                height='99'
                viewBox='0 0 99 99'
                fill='none'>
                <circle cx='49.5' cy='49.5' r='44.5' stroke='#E0E2FE' stroke-width='10' />
                <circle
                  cx='49.5'
                  cy='49.5'
                  r='43.5'
                  stroke='url(#paint0_linear_261_1287)'
                  stroke-width='12'
                  stroke-linecap='round'
                  strokeDasharray={circleChartParams}
                  strokeDashoffset={10000}
                  style={{
                    transform: 'rotatey(180deg) rotateZ(270deg)',
                    transformOrigin: 'center',
                  }}
                />
                <defs>
                  <linearGradient
                    id='paint0_linear_261_1287'
                    x1='9.78488'
                    y1='63'
                    x2='99.8878'
                    y2='65.3793'
                    gradientUnits='userSpaceOnUse'>
                    <stop stop-color='#9FA5FD' />
                    <stop offset='1' stop-color='#303EF5' />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </li>
        </ul>
        <div className={styles.chart}>
          <div className={styles.top}>
            <h2>Price Chart</h2>
            <ChartModesPanel
              modes={['1h', '3h', '5h', '1d', '1m', '1w']}
              onClick={() => {}}
              activeIndex={3}
            />
          </div>
          <div className={styles.down}>
            <LinearChart data={data} labels={labels} width={672} height={250} fullWidth />
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.formBlock}>
          <h2 className={styles.title}>Calculator</h2>
          <p className={styles.desc}>Token for earning</p>
          <form action=''>
            <div
              className={classNames(styles.select, {
                [styles.select_expanded]: isSelectExpanded,
              })}
              onClick={() => setIsSelectExpanded((prev) => !prev)}>
              <div className={styles.option}>
                <img
                  className={styles.icon}
                  src='./icons/eth-icon-alt.svg'
                  alt='
                Token icon'
                />
                Ethereum
              </div>
              <img src='./icons/arrow-down.svg' alt='expand list' />

              <div className={styles.optionDown}>
                <img
                  className={styles.icon}
                  src='./icons/eth-icon-alt.svg'
                  alt='
                Token icon'
                />
                Ethereum
              </div>
            </div>
            <div className={styles.tokenInputWrapper}>
              <input type='text' defaultValue='4.00 ETH' className={styles.tokenInput} />
              <h4 className={styles.label}>Available</h4>
              <p className={styles.available}>17.288 ETH</p>
            </div>

            <label htmlFor='quantity' className={styles.quantity}>
              Loan term
            </label>
            <div className={styles.quantityInput}>
              <input type='text' id='quantity' placeholder='Enter quantity' />
              <div className={styles.options}>
                {['Day', 'Month'].map((option, i) => (
                  <div className={styles.option} key={option} >
                    <InputButton option={option} active={activeInputMode === i} onClick={() => setActiveInputMode(i)} />
                  </div>
                ))}
              </div>
            </div>
            <button type='submit' className={styles.submit}>
              <img src='./icons/calculate.svg' alt='Calculator icon' className={styles.icon} />
              Calculate
            </button>
          </form>
        </div>

        <div className={styles.earning}>
          <h2 className={styles.title}>Your possible earning</h2>
          <div className={styles.block}>
            <img src='./icons/eth-icon-alt-2.svg' alt='Tokenicon' className={styles.icon} />
            <p className={styles.text}>3.5 ETH</p>
          </div>
        </div>

        <div className={styles.apy}>
          <h2 className={styles.title}>APY</h2>
          <ul className={styles.list}>
            <li className={styles.item}>
              <div className={styles.planc}>
                <p className={styles.text}>5.6%</p>
              </div>
              <p className={styles.desc}>on first 0.25 ETH</p>
            </li>
            <li className={styles.item}>
              <div className={styles.planc}>
                <p className={styles.text}>2.8%</p>
              </div>
              <p className={styles.desc}>On all other 0.25 ETH</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export const AccountPage = React.memo(Account);
