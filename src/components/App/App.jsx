import { username, tag, location, avatar, stats } from '../../userData.json';
// import friends from '../../friends.json'

import Profile from '../Profile/Profile';

const App = () => {
  return (
    <>
      <Profile
        name={username}
        tag={tag}
        location={location}
        image={avatar}
        stats={stats}
      />
      
      <FriendList friends={friends} />
    </>
  );
};

export default App;
