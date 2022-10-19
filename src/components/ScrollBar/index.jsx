import { Scrollbars } from 'react-custom-scrollbars-2';
import styles from './index.module.scss';

export function CustomScrollbar({ maxHeight, ...props }) {

  return (
    <Scrollbars
      renderTrackHorizontal={(props) => <div {...props} className='track-horizontal' />}
      renderTrackVertical={(props) => <div {...props} className={styles.track} />}
      renderThumbHorizontal={(props) => <div {...props} className='thumb-horizontal' />}
      renderThumbVertical={(props) => <div {...props} className={styles.thumb} />}
      renderView={(props) => (
        <div {...props} className={styles.container} style={{ maxHeight: maxHeight }} id="no-scrollbar"/>
      )}>
      {props.children}
    </Scrollbars>
  );
}
