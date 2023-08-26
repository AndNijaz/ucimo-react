import { useState } from "react";

export default function AddFriend({ onSetFriends, onSetFormOpen }) {
  const [friendName, setFriendName] = useState("");
  const [friendImg, setFriendImg] = useState(
    `https://i.pravatar.cc/${Math.round(Date.now() / 10000000000)}`
  );

  function handleSubmit(e) {
    e.preventDefault();
    onSetFriends({ id: 999, name: friendName, debt: 0, imgUrl: friendImg });
    setFriendName("");
    onSetFormOpen(false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmit}>
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
