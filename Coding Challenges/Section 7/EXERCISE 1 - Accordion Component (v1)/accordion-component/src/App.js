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
  return (
    <div className="accordion">
      {faqs.map((item, i) => (
        <Question item={item} index={i} />
      ))}
    </div>
  );
}

function Question({ item, index }) {
  const [active, setActive] = useState(false);

  return (
    <div
      className={`item ${active ? "open" : ""}`}
      onClick={() => setActive(() => !active)}
    >
      <p className="number">
        {index < 9 ? "0" : null}
        {index + 1}
      </p>
      <p className="title">{item.title}</p>
      <p className="icon">{active ? "-" : "+"}</p>
      {active && <div className="content-box">{item.text}</div>}
    </div>
  );
}
