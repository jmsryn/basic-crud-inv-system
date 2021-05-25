import React from 'react';
import './NewItem.css';
import ItemForm from './ItemForm';
import Card from '../UI/Card';

const NewItem = (props) => {
  return (
    <Card className='new-item'>
      <ItemForm onLatestId={props.onLatestId} />
    </Card>
  );
};

export default NewItem;
