import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function TicketsFilter() {
  return (
    <div className={cx('tickets-filter')}>
      Компонент фильтра
    </div>
  );
}

export default TicketsFilter;