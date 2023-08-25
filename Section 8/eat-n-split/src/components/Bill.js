export default function Bill({ friend }) {
  return (
    <form className="form-split-bill">
      <h2>SPLIT A BILL WITH {friend.name}</h2>
      <label htmlFor="bill-value">💰 Bill Value</label>
      <input type="text" id="bill-value" />
      <label htmlFor="your-expense">🧍‍♀️ Your Expense</label>
      <input type="text" id="your-expense" />
      <label htmlFor="friend-expense">👫 {friend.name} expense</label>
      <input type="text" id="friend-expense" />
      <label htmlFor="who-pays">🤑 Who is paying the bill</label>
      <select id="who-pays">
        <option>You</option>
        <option>{friend.name}</option>
      </select>
      <button className="button">Split bill</button>
    </form>
  );
}
