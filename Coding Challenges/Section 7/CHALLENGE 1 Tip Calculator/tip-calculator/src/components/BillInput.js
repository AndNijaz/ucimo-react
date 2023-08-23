export default function BillInput({ bill, onSetBill }) {
  return (
    <div>
      How much was the bill?
      <input
        type="number"
        value={bill}
        onChange={(e) => onSetBill(Number(e.target.value))}
      />
    </div>
  );
}
