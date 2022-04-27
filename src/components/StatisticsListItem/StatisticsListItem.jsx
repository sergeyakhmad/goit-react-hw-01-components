import s from './StatisticsListItem.module.css';
import PropTypes from 'prop-types';

const StatisticsListItem = ({ label, percentage }) => {
  return (
    <li
      className={s.item}
      style={{
        backgroundColor: `#${Math.floor(Math.random() * 16777215).toString(
          16
        )}`,
      }}
    >
      <span className={s.label}>{label}</span>
      <span className={s.percentage}>{`${percentage}%`}</span>
    </li>
  );
};

StatisticsListItem.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatisticsListItem;
