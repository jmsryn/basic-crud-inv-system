import React from 'react';
import { BsPencilSquare, BsXCircle } from 'react-icons/bs';
import { useState } from 'react';
import db from '../../util/db';

const EditForm = (props) => {
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

  const submitEditHandler = async (e) => {
    e.preventDefault();
    if (name === '' && price === '' && qty === '') {
      alert('Please select from the list');
      window.location.reload();
    } else {
      const editName = name === '' ? props.onEdit[0].name : name;
      const editPrice = price === '' ? props.onEdit[0].price : price;
      const editQty = qty === '' ? props.onEdit[0].quantity : qty;

      await db
        .doc(props.onEdit[0].id)
        .set({ name: editName, price: editPrice, quantity: editQty });
      window.location.reload();
    }
  };

  return (
    <form onSubmit={submitEditHandler}>
      <div className='new-item__controls'>
        <label>Cellphone Name</label>
        <input
          type='text'
          defaultValue={props.onEdit !== 0 ? props.onEdit[0].name : ''}
          onChange={nameHandler}
        />
      </div>
      <div className='new-item__controls'>
        <label>Price</label>
        <input
          type='number'
          min='0.01'
          step='0.01'
          defaultValue={props.onEdit !== 0 ? props.onEdit[0].price : ''}
          onChange={priceHandler}
        />
      </div>
      <div className='new-item__controls'>
        <label>Quantity</label>
        <input
          type='number'
          min='1'
          step='1'
          defaultValue={props.onEdit !== 0 ? props.onEdit[0].quantity : ''}
          onChange={qtyHandler}
        />
      </div>
      <div className='new-item__actions'>
        <button type='submit'>
          <BsPencilSquare />
          &nbsp; Edit Item
        </button>
        <button type='reset'>
          <BsXCircle />
          &nbsp; Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
