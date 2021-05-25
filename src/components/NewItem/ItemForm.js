import React from 'react';
import './ItemForm.css';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { useState } from 'react';
import db from '../../util/db';

const ItemForm = (props) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [qty, setQty] = useState('');

  const nameHandler = (e) => {
    setName(e.target.value);
  };
  const priceHandler = (e) => {
    setPrice(e.target.value);
  };
  const qtyHandler = (e) => {
    setQty(e.target.value);
  };

  const onSaveItemHandler = async (e) => {
    e.preventDefault();
    const items = {
      name: name,
      price: price,
      quantity: qty,
    };

    const latestID = Number(props.onLatestId.id) + 1;
    await db.doc(latestID.toString()).set(items);
    window.location.reload();
  };

  return (
    <form onSubmit={onSaveItemHandler}>
      <div className='new-item__controls'>
        <label>Cellphone Name</label>
        <input type='text' onChange={nameHandler} />
      </div>
      <div className='new-item__controls'>
        <label>Price</label>
        <input type='number' min='0.01' step='0.01' onChange={priceHandler} />
      </div>
      <div className='new-item__controls'>
        <label>Quantity</label>
        <input type='number' min='1' step='1' onChange={qtyHandler} />
      </div>
      <div className='new-item__actions'>
        <button type='submit'>
          <BsFillPlusCircleFill />
          &nbsp; Add Item
        </button>
      </div>
    </form>
  );
};

export default ItemForm;
