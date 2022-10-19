import { useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import styles from './index.module.scss';

export function CustomScrollbar({ maxHeight, ...props }) {
  const target = useRef(null);

  // Activate scroll
  const [, setState] = useState(4);

  setTimeout(() => setState(7), 500);

  return (
    <Scrollbars
      renderTrackHorizontal={(props) => <div {...props} className='track-horizontal' />}
      renderTrackVertical={(props) => <div {...props} className={styles.track} />}
      renderThumbHorizontal={(props) => <div {...props} className='thumb-horizontal' />}
      renderThumbVertical={(props) => <div {...props} className={styles.thumb} />}
      renderView={(props) => (
        <div
          {...props}
          className={styles.container}
          style={{ maxHeight: maxHeight }}
          id='no-scrollbar'
          ref={target}
        />
      )}>
      {props.children}
    </Scrollbars>
  );
}
