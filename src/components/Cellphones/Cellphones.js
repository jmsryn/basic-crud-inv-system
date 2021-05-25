import React from 'react';
import Card from '../UI/Card';
import CellphoneList from './CellphoneList';
import './Cellphones.css';
// import { useState } from 'react';

const Cellphones = (props) => {
  const onEditHandlers = (indexs) => {
    props.onEditItems(indexs);
  };

  return (
    <Card className='new-phones'>
      <CellphoneList item={props.item} onEditIndex={onEditHandlers} />
    </Card>
  );
};

export default Cellphones;
