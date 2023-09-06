import React from 'react';
import { TICKETS } from '../../../shared/config/constants';
import classNames from 'classnames/bind';
import styles from './styles.module.css';
import { SingleTicket } from '../index';

const cx = classNames.bind(styles);

interface TicketsListProps {
  selectTicketStop: number[],
}

function TicketsList({ selectTicketStop }: TicketsListProps) {
  const filteredData = TICKETS.filter(item =>
    selectTicketStop.includes(item.stops)
  );

  return (
    <div className={cx('tickets-list')}>
      {filteredData.map((ticket) => {
        const { id } = ticket;
        return (
          <SingleTicket key={id} ticket={ticket} />
        );
      })}
    </div>
  );
}

export default TicketsList;