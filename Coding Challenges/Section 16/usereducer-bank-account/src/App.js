import { act, useReducer } from "react";
import "./styles.css";

/*
INSTRUCTIONS / CONSIDERATIONS:



7. Customer can only close an account if there is no loan, AND if the balance is zero. If this condition is not met, just return the state. If the condition is met, the account is deactivated and all money is withdrawn. The account basically gets back to the initial state
*/

const initialState = {
  balance: 0,
  loan: 0,
  isActive: false,
};

function reducer(state, action) {
  if (!state.isActive && action.type !== "openAccount") return { ...state };

  switch (action.type) {
    case "openAccount": {
      return { ...state, isActive: true, balance: 500 };
    }
    case "deposit": {
      return { ...state, balance: state.balance + action.payload };
    }
    case "withdraw": {
      return { ...state, balance: state.balance - action.payload };
    }
    case "requestLoan": {
      return { ...state, loan: state.loan === 0 ? action.payload : state.loan };
    }
    case "payLoan": {
      return { ...state, loan: 0, balance: state.balance - action.payload };
    }
    case "closeAccount": {
      return state.loan === 0 && state.balance === 0 ? initialState : state;
    }

    default:
      throw new Error("Unknown");
  }
}

export default function App() {
  const [{ balance, loan, isActive }, dispatch] = useReducer(
    reducer,
    initialState
  );

  return (
    <div className="App">
      <h1>useReducer Bank Account</h1>
      <p>Balance: {balance === 0 ? "X" : balance}</p>
      {loan !== 0 ? <p>Loan: {loan}</p> : ""}

      <p>
        <button
          onClick={() => {
            dispatch({ type: "openAccount" });
          }}
          disabled={isActive}
        >
          Open account
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "deposit", payload: 150 });
          }}
          disabled={false}
        >
          Deposit 150
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "withdraw", payload: 50 });
          }}
          disabled={false}
        >
          Withdraw 50
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "requestLoan", payload: 5000 });
          }}
          disabled={loan > 0}
        >
          Request a loan of 5000
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "payLoan", payload: 5000 });
          }}
          disabled={loan === 0}
        >
          Pay loan
        </button>
      </p>
      <p>
        <button
          onClick={() => {
            dispatch({ type: "closeAccount" });
          }}
          disabled={!isActive}
        >
          Close account
        </button>
      </p>
    </div>
  );
}
