import React from 'react';
import classNames from 'classnames/bind';
import { SingleTicket } from '../index';
import { TICKETS } from '../../../shared/config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

function TicketsList() {
  return (
    <div className={cx('tickets-list')}>
      {TICKETS.map((ticket) => {
        const { id } = ticket;
        return (
          <SingleTicket key={id} ticket={ticket} />
        );
      })}
    </div>
  );
}

export default TicketsList;