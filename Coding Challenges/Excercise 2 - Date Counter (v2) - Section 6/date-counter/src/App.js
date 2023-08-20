import React from "react";
import { useState } from "react";
import "./App.css";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function calcDate(count) {
    const date = new Date();
    return new Date(
      date.getFullYear(),
      date.getMonth(),
      date.getDate() + count
    );
  }

  return (
    <div className="date-counter">
      <div className="row">
        <input
          value={step}
          type="range"
          min="1"
          max="10"
          onChange={(e) => setStep(Number(e.target.value))}
        />
        <span>{step}</span>
      </div>
      <div className="row">
        <button onClick={() => setCount((c) => c - step)}>-</button>
        <input
          type="text"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}

        <span>{calcDate(count).toDateString()}</span>
      </p>
    </div>
  );
}
