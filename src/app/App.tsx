import React from 'react';
import classNames from 'classnames/bind';
import { TicketsList } from './ui';
import { TicketsFilter } from '../features';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function App() {
  return (
    <div className={cx('App')}>
      <TicketsFilter />
      <TicketsList />
    </div>
  );
}

export default App;
