import "./App.css";
import { useState } from "react";

const faqs = [
  {
    title: "Where are these chairs assembled?",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium, quaerat temporibus quas dolore provident nisi ut aliquid ratione beatae sequi aspernatur veniam repellendus.",
  },
  {
    title: "How long do I have to return my chair?",
    text: "Pariatur recusandae dignissimos fuga voluptas unde optio nesciunt commodi beatae, explicabo natus.",
  },
  {
    title: "Do you ship to countries outside the EU?",
    text: "Excepturi velit laborum, perspiciatis nemo perferendis reiciendis aliquam possimus dolor sed! Dolore laborum ducimus veritatis facere molestias!",
  },
];

export default function App() {
  return (
    <div>
      <Accordion />
    </div>
  );
}

function Accordion() {
  const [active, setActive] = useState(null);

  function activeHandler(id) {
    setActive(id);
  }

  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Question
          item={item}
          index={i}
          active={active}
          onActive={activeHandler}
        />
      ))}
    </div>
  );
}

function Question({ item, index, active, onActive }) {
  const isActive = active === index;

  function activeHandler() {
    onActive(isActive ? null : index);
  }

  return (
    <div className={`item ${isActive ? "open" : ""}`} onClick={activeHandler}>
      <p className="number">
        {index < 9 ? "0" : null}
        {index + 1}
      </p>
      <p className="title">{item.title}</p>
      <p className="icon">{isActive ? "-" : "+"}</p>
      {isActive && <div className="content-box">{item.text}</div>}
    </div>
  );
}
