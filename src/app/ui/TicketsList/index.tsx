import React from 'react';
import { TICKETS } from '../../../shared/config/constants';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { SingleTicket } from '../index';

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