import SideBar from "./SideBar";
import Bill from "./Bill";
import { useState } from "react";

const f1 = {
  id: 1,
  name: "Clark",
  debt: 7,
};
const f2 = {
  id: 2,
  name: "Sarah",
  debt: -20,
};
const f3 = {
  id: 3,
  name: "Anthony",
  debt: 0,
};

const friends = [f1, f2, f3];

export default function EatAndSplit() {
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleSelectedFriends(friend) {
    setSelectedFriend(friend);
  }

  return (
    <div className="app">
      <SideBar friends={friends} onSelectFriend={handleSelectedFriends} />
      {selectedFriend && <Bill friend={selectedFriend} />}
    </div>
  );
}
