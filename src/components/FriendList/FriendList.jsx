import FriendListItem from '../FriendListItem/FriendListItem'

// import css from './FriendsList.module.css'



export default function FriendList({friends}) {
<ul>
	<li>
    {friends.map((friend) => 
      (
      <li key={friend.id}>
            <FriendListItem friend={friend} />
          </li>
    ) 
    )}
	</li>
</ul>
}