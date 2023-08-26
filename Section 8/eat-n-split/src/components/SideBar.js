import { useState } from "react";
import Friend from "./Friend";
import AddFriend from "./AddFriend";

export default function SideBar({
  friends,
  onSelectFriend,
  onSetFriends,
  selectedFriend,
}) {
  const [formOpen, setFormOpen] = useState(false);

  return (
    <div className="sidebar">
      <ul>
        {friends.map((friend) => (
          <Friend
            friend={friend}
            onSelectFriend={onSelectFriend}
            key={friend.id}
            onSetFormOpen={(condition) => setFormOpen(condition)}
          />
        ))}
      </ul>
      {formOpen && (
        <AddFriend
          onSetFriends={onSetFriends}
          onSetFormOpen={(condition) => setFormOpen(condition)}
        />
      )}
      <button
        className="button"
        onClick={() => {
          setFormOpen((fO) => !fO);
          onSelectFriend(null);
        }}
      >
        {formOpen ? "Close" : "Add friend"}
      </button>
    </div>
  );
}
