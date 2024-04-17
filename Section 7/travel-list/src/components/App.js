import React, { useState } from "react";
import "./index.css";
import Stats from "./Stats";
import PackingList from "./PackingList";
import Logo from "./Logo";
import Form from "./Form";

export default function App() {
  const [items, setItems] = useState([]);

  // function handleSort() {
  //   if (sort === 2) setItems(() => items.sort((a, b) => a - b));
  // }

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
  function deleteHandler() {
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAddItem} />
      <PackingList
        items={items}
        onUpdateItem={handleUpdateItem}
        onDeleteItem={handleDeleteItem}
        onDelete={deleteHandler}
      />
      <Stats items={items} />
    </div>
  );
}
