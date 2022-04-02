import FriendListItem from 'components/FriendListItem';
import s from './FriendList.module.css';
import PropTypes from 'prop-types';

function FriendList({ friends }) {
  return (
    <ul className={s.friend__list}>
      {friends.map(friend => (
        <li className={s.item} key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
