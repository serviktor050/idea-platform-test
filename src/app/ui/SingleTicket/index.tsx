import React from 'react';
import classNames from 'classnames/bind';

import styles from './styles.module.css';
import { ITicket } from '../../../shared/intefaces';

const cx = classNames.bind(styles);

interface SingleTicketProps {
  ticket: ITicket
}

function SingleTicket({ ticket }: SingleTicketProps) {
  const { origin } = ticket;
  return (
    <div className={cx('single-ticket')}>
      {origin}
    </div>
  );
}

export default SingleTicket;