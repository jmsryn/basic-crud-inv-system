import './App.css';
import Cellphones from './components/Cellphones/Cellphones';
import NewItem from './components/NewItem/NewItem';
import EditItem from './components/EditItem/EditItem';
import { useState, useEffect } from 'react';
import firebase from './util/firebase';

function App() {
  const [phones, setPhones] = useState([]);
  const [index, setIndex] = useState(0);

  const editHandler = (editIndex) => {
    setIndex(editIndex);
  };

  useEffect(() => {
    const fetchData = async () => {
      const db = firebase.firestore();
      const data = await db.collection('products').get();
      const phoneData = data.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }));
      setPhones(phoneData);
    };
    fetchData();
  }, []);

  const editData = phones.filter((item) => {
    return item.id === index;
  });

  return (
    <div className='App'>
      <NewItem onLatestId={phones[phones.length - 1]} />
      {index === 0 ? <EditItem onIndex={0} /> : <EditItem onIndex={editData} />}

      <Cellphones item={phones} onEditItems={editHandler} />
    </div>
  );
}

export default App;
