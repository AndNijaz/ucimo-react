import { useState } from "react";

export default function SideBar({ friends, onSelectFriend, onSetFriends }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            onSelectFriend={onSelectFriend}
            key={friend.id}
          />
        ))}
      </ul>
      {formOpen && <AddFriend onSetFriends={onSetFriends} />}
      <button className="button" onClick={() => setFormOpen((fO) => !fO)}>
        {formOpen ? "Close" : "Add friend"}
      </button>
    </div>
  );
}

function Friend({ friend, onSelectFriend }) {
  return (
    <li>
      <img src={friend.imgUrl} alt="human" />
      <div>
        <h3>{friend.name}</h3>
        <p>
          {friend.debt === 0
            ? `You and ${friend.name} are even`
            : friend.debt > 0
            ? `You owe ${friend.name} ${friend.debt} €`
            : `${friend.name} owes you ${friend.debt * -1}€`}
        </p>
      </div>
      <button className="button" onClick={() => onSelectFriend(friend)}>
        Select
      </button>
    </li>
  );
}

function AddFriend({ onSetFriends }) {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState(
    `https://i.pravatar.cc/${Math.round(Date.now() / 10000000000)}`
  );

  function submitHandler(e) {
    e.preventDefault();
    onSetFriends({ id: 999, name: friendName, debt: 0, imgUrl: friendImg });
  }

  return (
    <form className="form-add-friend" onSubmit={submitHandler}>
      <label htmlFor="friend-name">👫 Friend name</label>
      <input
        type="text"
        id="friend-name"
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
      />
      <label htmlFor="friend-img">🌄 Image Url</label>
      <input
        type="text"
        id="friend-img"
        value={friendImg}
        onChange={(e) => setFriendImg(e.target.value)}
      />
      <button className="button">Add</button>
    </form>
  );
}
