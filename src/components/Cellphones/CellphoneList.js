import React from 'react';
import './CellphoneList.css';
import { BsFillTrashFill, BsPencilSquare } from 'react-icons/bs';
import db from '../../util/db';

const CellphoneList = (props) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Cellphone Name</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {props.item.map((wew) => (
          <tr key={wew.id}>
            <td>{wew.id}</td>
            <td>{wew.name}</td>
            <td>{wew.price}</td>
            <td>{wew.quantity}</td>
            <td className='table-actions'>
              <button
                className='btn-edit'
                onClick={() => {
                  props.onEditIndex(wew.id);
                }}
              >
                <BsPencilSquare /> Edit
              </button>
              &nbsp;
              <button
                className='btn-del'
                onClick={async () => {
                  await db.doc(wew.id).delete();
                  window.location.reload();
                }}
              >
                <BsFillTrashFill /> Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default CellphoneList;
