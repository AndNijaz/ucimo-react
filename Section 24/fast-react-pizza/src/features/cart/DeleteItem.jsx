import React from 'react';
import { useDispatch } from 'react-redux';
import { removeItem } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ pizzaID }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    console.log(pizzaID);
    dispatch(removeItem(pizzaID));
    console.log('aa');
  }

  return (
    <Button type="small" onClick={handleDeleteItem}>
      Delete
    </Button>
  );
}

export default DeleteItem;
