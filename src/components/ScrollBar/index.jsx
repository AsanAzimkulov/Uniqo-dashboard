import React, { Component, useRef, useState } from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import styles from './index.module.scss';

export class CustomScrollbar extends Component {
  constructor(props, context) {
    super(props, context);
    this.props = props;
    this.maxHeight = props.maxHeight;
    this.state = { top: 0, activateBar: false };
    this.handleScrollFrame = this.handleScrollFrame.bind(this);
    this.renderView = this.renderView.bind(this);
    this.targetRef = React.createRef();
    this.mounted = React.createRef(false);
  }

  handleScrollFrame(values) {
    const { top } = values;
    // this.targetRef.current.style.height = top * this.maxHeight;
    this.setState({ top });
  }

  renderView({ style, ...props }) {
    const { top } = this.state;

    return (
      <div
        {...props}
        className={styles.container}
        style={{ maxHeight: this.maxHeight }}
        id='c-scrollbar-2'
      />
    );
  }

  render() {
    const isMobile = window.innerWidth <= 767.5;

    const { maxHeight, thumbHeight, ...props } = this.props;

    const top = (maxHeight - thumbHeight) * (this.state.top || 0);
    if (isMobile) {
      return (
        <Scrollbars
          // ref={target}
          renderView={this.renderView}
          onScrollFrame={this.handleScrollFrame}
          {...this.props}
          renderTrackHorizontal={(props) => <div {...props} className='track-horizontal' />}
          renderTrackVertical={(props) => <div {...props} className={styles.track} />}
          renderThumbHorizontal={(props) => (
            <div {...props} className='thumb-horizontal' ref={(ref) => (this.targetRef = ref)} />
          )}
          renderThumbVertical={(props) => (
            <div
              {...props}
              className={styles.thumb}
              style={{
                height: thumbHeight,
                top,
              }}
            />
          )}>
          {props.children}
        </Scrollbars>
      );
    } else {
      if (!this.mounted.current) {
        setTimeout(() => this.setState({ activateBar: true }), 1000);
        this.mounted.current = true;
      }
      return (
        <Scrollbars
          // ref={target}
          renderView={this.renderView}
          onScrollFrame={this.handleScrollFrame}
          {...this.props}
          renderTrackHorizontal={(props) => <div {...props} className='track-horizontal' />}
          renderTrackVertical={(props) => <div {...props} className={styles.track} />}
          renderThumbHorizontal={(props) => (
            <div {...props} className='thumb-horizontal' ref={(ref) => (this.targetRef = ref)} />
          )}
          renderThumbVertical={(props) => <div {...props} className={styles.thumb} />}>
          {props.children}
        </Scrollbars>
      );
    }
  }
}
