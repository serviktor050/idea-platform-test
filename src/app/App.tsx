import React, { useState } from 'react';
import classNames from 'classnames/bind';
import { TicketsList } from './ui';
import { TicketsFilter } from '../features';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function App() {
  const [ selectedStop, setSelectedStop ] = useState<number[]>([]);

  return (
    <div className={cx('App')}>
      <TicketsFilter
        selectedStop={selectedStop}
        setSelectedStop={setSelectedStop}
      />
      <TicketsList selectedStop={selectedStop} />
    </div>
  );
}

export default App;
