import React, { useState } from "react";
import "./index.css";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: true },
  { id: 3, description: "Charger", quantity: 1, packed: false },
  { id: 4, description: "T-shirts", quantity: 12, packed: false },
];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItem(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleUpdateItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
      />
      <Stats items={items} />
    </div>
  );
}

function Logo() {
  return <h1>🌴 Far Away 💼</h1>;
}
function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  function clearForm() {
    setDescription("");
    setQuantity(1);
  }

  function submitHandler(e) {
    e.preventDefault();

    if (!description) return;

    const newItem = {
      id: Date.now(),
      description: description,
      quantity: quantity,
      packed: false,
    };

    onAddItem(newItem);

    clearForm();
  }

  return (
    <form className="add-form" onSubmit={submitHandler}>
      <h3>What do you need for your 😍 trip? </h3>
      <select
        value={quantity}
        onChange={(e) => setQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
function PackingList({ items, onDeleteItem, onUpdateItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((item) => (
          <Item
            item={item}
            key={item.id}
            onDeleteItem={onDeleteItem}
            onUpdateItem={onUpdateItem}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({ item, onDeleteItem, onUpdateItem }) {
  function onChangeHandler(id) {
    onUpdateItem(id);
  }

  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onChangeHandler(item.id)}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : {}}>
        {item.quantity} {item.description}
      </span>
      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}

function Stats() {
  return (
    <footer className="stats">
      <em>👜 You have X items on your list, and you already packed X (X%);</em>
    </footer>
  );
}
