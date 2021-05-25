import React from 'react';
import Card from '../UI/Card';
import EditForm from './EditForm';
import './EditItem.css';

const EditItem = (props) => {
  return (
    <Card className='edit-item'>
      <EditForm onEdit={props.onIndex} />
    </Card>
  );
};

export default EditItem;
