import React from 'react';
import PropTypes from 'prop-types';

import UpcomingDayForecastItem from '../UpcomingDayForecastItem';

import styles from './UpcomingDayForecast.module.css';

const UpcomingDayForecast = ({ days }) => (
    <ul className={`${styles.weekList} d-flex justify-content-between p-0`}>
        {days.map(day => (
            <UpcomingDayForecastItem {...day} key={day.weekday} />
        ))}
    </ul>
);

UpcomingDayForecast.propTypes = {
    days: PropTypes.array.isRequired,
};

export default UpcomingDayForecast;
