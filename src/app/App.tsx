import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { TicketsList } from './ui';
import { TicketsFilter } from '../features';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function App() {
  const [ selectTicketStop, setSelectTicketStop ] = useState<number[]>([]);
  return (
    <div className={cx('App')}>
      <TicketsFilter
        selectTicketStop={selectTicketStop}
        setSelectTicketStop={setSelectTicketStop}
      />
      <TicketsList selectTicketStop={selectTicketStop} />
    </div>
  );
}

export default App;
