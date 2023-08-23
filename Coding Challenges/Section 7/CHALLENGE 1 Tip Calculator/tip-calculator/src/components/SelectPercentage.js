export default function SelectPercentage({ children, tip, onSetTip }) {
  return (
    <div>
      {children}
      <select value={tip} onChange={(e) => onSetTip(Number(e.target.value))}>
        <option value={0}>Dissatisfied (0%)</option>
        <option value={5}>It was okay (5%)</option>
        <option value={10}>It was good (10%)</option>
        <option value={20}>Absolutely Amazing (20%)</option>
      </select>
    </div>
  );
}
