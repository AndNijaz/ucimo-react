import { useState } from "react";

export default function Bill({ friend, onUpdateFriends, setSelectedFriend }) {
  const [billValue, setBillValue] = useState("");
  const [userExpense, setUserExpense] = useState("");
  const [whoPays, setWhoPays] = useState("user");

  const friendExpense = billValue - userExpense;

  function handleSubmit(e) {
    e.preventDefault();

    const debt =
      whoPays === "user"
        ? friend.debt - friendExpense
        : friend.debt + userExpense;

    console.log(debt);

    const updatedFriend = { ...friend, debt: debt };
    onUpdateFriends(updatedFriend);

    resetForm();
    setSelectedFriend(null);
  }

  function resetForm() {
    setBillValue("");
    setUserExpense("");
    setWhoPays("user");
  }

  return (
    <form className="form-split-bill" onSubmit={handleSubmit}>
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <label htmlFor="bill-value">💰 Bill Value</label>
      <input
        type="text"
        id="bill-value"
        value={billValue}
        onChange={(e) => {
          setBillValue(Number(e.target.value));
        }}
      />
      <label htmlFor="your-expense">🧍‍♀️ Your Expense</label>
      <input
        type="text"
        id="your-expense"
        value={userExpense}
        onChange={(e) => {
          setUserExpense(Number(e.target.value));
        }}
      />
      <label htmlFor="friend-expense">👫 {friend.name} expense</label>
      <input type="text" id="friend-expense" disabled value={friendExpense} />
      <label htmlFor="who-pays">🤑 Who is paying the bill</label>
      <select
        id="who-pays"
        onChange={(e) => {
          setWhoPays(e.target.value);
        }}
      >
        <option value="user">You</option>
        <option value="friend">{friend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
