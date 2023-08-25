import { useState } from "react";

export default function SideBar({ friends, onSelectFriend }) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend friend={friend} onSelectFriend={onSelectFriend} />
        ))}
      </ul>
      {formOpen && <AddFriend />}
      <button className="button" onClick={() => setFormOpen((fO) => !fO)}>
        {formOpen ? "Close" : "Add friend"}
      </button>
    </div>
  );
}

function Friend({ friend, onSelectFriend }) {
  return (
    <li>
      <img src={`https://i.pravatar.cc/${friend.id * 100}`} alt="human" />
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

function AddFriend() {
  return (
    <form className="form-add-friend">
      <label htmlFor="friend-name">👫 Friend name</label>
      <input type="text" id="friend-name" />
      <label htmlFor="friend-img">🌄 Image Url</label>
      <input type="text" id="friend-img" />
      <button className="button">Add</button>
    </form>
  );
}
