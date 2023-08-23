import BillInput from "./BillInput";
import SelectPercentage from "./SelectPercentage";
import { useState } from "react";

function App() {
  const [bill, setBill] = useState(0);
  const [tipOne, setTipOne] = useState(0);
  const [tipTwo, setTipTwp] = useState(0);

  function handleSetTipOne(value) {
    setTipOne(value);
  }
  function handleSetTipTwo(value) {
    setTipTwp(value);
  }

  function handleSetBill(value) {
    setBill(value);
  }

  function resetHandler() {
    setBill(0);
    setTipOne(0);
    setTipTwp(0);
  }

  const tip = ((tipOne / 100) * bill + (tipTwo / 100) * bill) / 2;
  const totalBill = bill + tip;

  return (
    <div className="">
      {/* Komponenta BillInput */}
      <BillInput bill={bill} onSetBill={handleSetBill} />
      {/* Komponenta SelectPercentagee 2x */}
      <SelectPercentage tip={tipOne} onSetTip={handleSetTipOne}>
        How did you like the service?
      </SelectPercentage>
      <SelectPercentage tip={tipTwo} onSetTip={handleSetTipTwo}>
        How did your friend like the service?
      </SelectPercentage>
      {/* Output  za text */}
      {totalBill > 0 && (
        <p>{`You pay $${totalBill} ($${bill} + $${tip}) tip`}</p>
      )}
      {/* Reset komponenta */}
      <button onClick={resetHandler}>Reset</button>
    </div>
  );
}

export default App;
