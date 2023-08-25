import SideBar from "./SideBar";
import Bill from "./Bill";
import { useState } from "react";

const f1 = {
  id: 1,
  name: "Clark",
  debt: 7,
  imgUrl: `https://i.pravatar.cc/${100}`,
};
const f2 = {
  id: 2,
  name: "Sarah",
  debt: -20,
  imgUrl: `https://i.pravatar.cc/${200}`,
};
const f3 = {
  id: 3,
  name: "Anthony",
  debt: 0,
  imgUrl: `https://i.pravatar.cc/${300}`,
};

const friendss = [f1, f2, f3];

export default function EatAndSplit() {
  const [friends, setFriends] = useState(friendss);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriends(friend) {
    setSelectedFriend(friend);
  }

  function handleSetFriends(friend) {
    const friendsArr = [
      ...friends,
      {
        ...friend,
        id: friends.length,
        imgUrl: `https://i.pravatar.cc/${friends.length * 100}`,
      },
    ];
    setFriends(friendsArr);
  }

  return (
    <div className="app">
      <SideBar
        friends={friends}
        onSelectFriend={handleSelectedFriends}
        onSetFriends={handleSetFriends}
      />
      {selectedFriend && <Bill friend={selectedFriend} />}
    </div>
  );
}
