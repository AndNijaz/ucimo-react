import { useState } from "react";
import "./index.css";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

export default function App() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);

  function handlePrevious() {
    if (step > 1) setStep((s) => s - 1);
  }

  function handleNext() {
    if (step < 3) setStep((s) => s + 1);
  }

  function handleClose() {
    setIsOpen((iS) => !iS);
  }

  return (
    <>
      <button className="close" onClick={handleClose}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
          </div>
          {/* <p className="message">
            Step {step}: {messages[step - 1]}
          </p> */}
          <Message step={step}> {messages[step - 1]}</Message>
          <div className="buttons">
            {/* <button
              style={
                step !== 1 ? { backgroundColor: "#7950f2", color: "#fff" } : {}
              }
              onClick={handlePrevious}
            >
              Previous
            </button>
            <button
              style={
                step !== 3 ? { backgroundColor: "#7950f2", color: "#fff" } : {}
              }
              onClick={handleNext}
            >
              Next
            </button> */}
            <Button
              bgColor={step !== 1 ? "#7950f2" : ""}
              textColor="#fff"
              onClick={handlePrevious}
            >
              <span>👈</span> Previous
            </Button>
            <Button
              bgColor={step !== 3 ? "#7950f2" : ""}
              textColor="#fff"
              onClick={handleNext}
            >
              Next<span>👉</span>
            </Button>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ bgColor, textColor, onClick, children }) {
  return (
    <button
      style={{ backgroundColor: bgColor, color: textColor }}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Message({ step, children }) {
  return (
    <div className="message">
      <h3>Step {step}:</h3>
      {children}
    </div>
  );
}
