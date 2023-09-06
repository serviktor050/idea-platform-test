import React from 'react';
import classNames from 'classnames/bind';
import { FILTER } from '../../shared/config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

interface TicketsListProps {
  selectTicketStop: number[],
  setSelectTicketStop: (numbers: number[]) => void,
}

function TicketsFilter({ selectTicketStop, setSelectTicketStop }: TicketsListProps) {
  const handleChange = (option: number) => {
    if (selectTicketStop.includes(option)) {
      setSelectTicketStop(selectTicketStop.filter(o => o !== option));
    } else {
      setSelectTicketStop([ ...selectTicketStop, option ]);
    }
  };
  return (
    <div className={cx('container')}>
      <div className={cx('tickets-filter')}>
        {FILTER.map((item) => (
          <label key={item.id}>
            <input
              type="checkbox"
              checked={selectTicketStop.includes(item.count)}
              onChange={() => handleChange(item.count)}
            />
            {item.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default TicketsFilter;