import StatisticsListItem from 'components/StatisticsListItem';
import s from './StatisticsList.module.css';
import PropTypes from 'prop-types';

const StatisticsList = ({ title, stats }) => {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.stat__list}>
        {stats.map(item => (
          <StatisticsListItem
            key={item.id}
            label={item.label}
            percentage={item.percentage}
          />
        ))}
      </ul>
    </section>
  );
};

StatisticsList.propTypes = {
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};

export default StatisticsList;
