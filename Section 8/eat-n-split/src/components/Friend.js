export default function Friend({ friend, onSelectFriend }) {
  return (
    <li>
      <img src={friend.imgUrl} alt="human" />
      <div>
        <h3>{friend.name}</h3>

        {friend.debt === 0 ? (
          <p>You and {friend.name} are even</p>
        ) : friend.debt > 0 ? (
          <p className="red">
            You owe {friend.name} ${friend.debt} €
          </p>
        ) : (
          <p className="green">
            {friend.name} owes you {friend.debt * -1}€
          </p>
        )}
      </div>
      <button className="button" onClick={() => onSelectFriend(friend)}>
        Select
      </button>
    </li>
  );
}
