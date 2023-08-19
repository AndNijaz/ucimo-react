import React from "react";
// import ReactDOM from "react-dom/client";
import { useState } from "react";

import "./App.css";

const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "Mai",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function calcDate(count) {
  const date = new Date();
  return new Date(date.getFullYear(), date.getMonth(), date.getDate() + count);
}

function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handlePreviousStep() {
    setStep((s) => s - 1);
  }
  function handleNextStep() {
    setStep((s) => s + 1);
  }
  function handlePreviousCount() {
    setCount((c) => c - step);
  }
  function handleNextCount() {
    setCount((c) => c + step);
  }

  return (
    <div className="App">
      <div className="row">
        <button onClick={handlePreviousStep}>-</button>
        <p>
          Step: <span>{step}</span>
        </p>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="row">
        <button onClick={handlePreviousCount}>-</button>
        <p>
          Count: <span>{count}</span>
        </p>
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        {count === 0
          ? `Today is ${new Date().toDateString()}`
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}

        <span>{calcDate(count).toDateString()}</span>
      </p>
    </div>
  );
}

export default App;
