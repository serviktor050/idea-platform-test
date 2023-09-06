import React from 'react';
import classNames from 'classnames/bind';
import { ITicket } from '../../../shared/intefaces';
import airplane from '../../assets/png/airplane.png';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

interface SingleTicketProps {
  ticket: ITicket
}

function SingleTicket({ ticket }: SingleTicketProps) {
  const {
    origin,
    origin_name,
    destination,
    destination_name,
    departure_date,
    departure_time,
    arrival_date,
    arrival_time,
    carrier,
    stops,
    price
  } = ticket;

  return (
    <div className={cx('single-ticket')}>
      <div className={cx('single-ticket__order')}>
        {`Перевозчик: ${carrier}`}
        <button
          type="submit"
          className={cx('single-ticket__order__btn')}
        >
          {`Купить за ${price}₽`}
        </button>
      </div>
      <div className={cx('single-ticket__info')}>
        <div className={cx('single-ticket__from-where')}>
          <div className={cx('single-ticket__from-where__time')}>
            {departure_time}
          </div>
          <div className={cx('single-ticket__from-where__city')}>
            {`${origin}, ${origin_name}`}
          </div>
          <div className={cx('single-ticket__from-where__date')}>
            {departure_date}
          </div>
        </div>
        <div className={cx('single-ticket__transfer')}>
          {`Количество пересадок: ${stops}`}
        </div>
        <img src={airplane} alt='airplane'/>
        <div className={cx('single-ticket__to-where')}>
          <div className={cx('single-ticket__to-where__time')}>
            {arrival_time}
          </div>
          <div className={cx('single-ticket__to-where__city')}>
            {`${destination_name}, ${destination}`}
          </div>
          <div className={cx('single-ticket__to-where__date')}>
            {arrival_date}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleTicket;
