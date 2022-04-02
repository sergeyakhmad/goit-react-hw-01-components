import Profile from 'components/Profile';
import StatisticsList from 'components/StatisticsList';
import FriendList from 'components/FriendList';
import TransactionHistory from 'components/TransactionHistory';

import user from './json/user.json';
import data from './json/data.json';
import friends from './json/friends.json';
import transactions from './json/transactions.json';


export const App = () => {
  return (
    <div style={{
        color: '#000',
        backgroundColor: '#e2dfdf',
      }}>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <StatisticsList title="Upload stats" stats={data} />
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions} />
    </div>
  );
};
