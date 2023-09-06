import React from 'react';
import classNames from 'classnames/bind';
import { TICKETS } from '../../../shared/config/constants';
import { SingleTicket } from '../index';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

interface TicketsListProps {
  selectedStop: number[],
}

function TicketsList({ selectedStop }: TicketsListProps) {
  const sortedTickets = TICKETS.sort((a,b) => a.price - b.price);

  const filteredTickets = TICKETS.filter(ticket =>
    selectedStop.includes(ticket.stops)
  ).sort((a,b) => a.price - b.price);

  return (
    <div className={cx('tickets-list')}>
      {(filteredTickets.length ? filteredTickets : sortedTickets).map((ticket) => {
        const { id } = ticket;
        return (
          <SingleTicket key={id} ticket={ticket} />
        );
      })}
    </div>
  );
}

export default TicketsList;
