import React from 'react';
import classNames from 'classnames/bind';
import { FILTERS } from '../../shared/config/constants';

import styles from './styles.module.css';

const cx = classNames.bind(styles);

interface TicketsListProps {
  selectedStop: number[],
  setSelectedStop: (numbers: number[]) => void,
}

function TicketsFilter({ selectedStop, setSelectedStop }: TicketsListProps) {
  const handleChange = (option: number) => {
    if (selectedStop.includes(option)) {
      setSelectedStop(selectedStop.filter(o => o !== option));
    } else {
      setSelectedStop([ ...selectedStop, option ]);
    }
  };

  return (
    <div className={cx('container')}>
      <div className={cx('tickets-filter')}>
        <h2>Количество пересадок</h2>
        {FILTERS.map((filter) => (
          <label key={filter.id}>
            <input
              type="checkbox"
              checked={selectedStop.includes(filter.count)}
              onChange={() => handleChange(filter.count)}
            />
            {filter.name}
          </label>
        ))}
      </div>
    </div>
  );
}

export default TicketsFilter;
