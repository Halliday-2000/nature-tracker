import Header from './Header';
import SearchRecord from './SearchRecord';
import AddRecord from './AddRecord';
import MainBody from './MainBody';
import Footer from './Footer';

import { useState, useEffect } from 'react';
// import EditRecord from './EditRecord';

function App() {
  const [records, setRecords] = useState(JSON.parse(localStorage.getItem('natureevents')) || []);
  const [newRecord, setNewRecord] = useState('')
  const [search, setSearch] = useState('')
  //const [isEditing, setIsEditing] = useState(false);
  //const [currentRecord, setCurrentRecord] = useState({});

  useEffect(() => {
    localStorage.setItem('natureevents', JSON.stringify(records));
  }, [records])
  
  const addRecord = (record) => {
    const id = records.length ? records[records.length - 1].id + 1 : 1;
    const MyNewRecord = { id, checked: false, record };
    const listRecords = [...records, MyNewRecord];
    setRecords(listRecords);
  }

  /* failed editing
  
  function editRecord(id, updatedRecord) {
    const updatedItem = records.map((records) => {
      return records.id === id ? updatedRecord : records;
    });
    setIsEditing(false);
    setRecords(updatedItem);
  }

  function handleEditInputChange(e) {
    setCurrentRecord({ ...currentRecord, text: e.target.value });
    console.log(currentRecord);
  }

  function handleEditClick(records) {
    setIsEditing(true);
    setCurrentRecord({ ...records });
  }

  */

  const handleCheck = (id) => {
    const listRecords = records.map((record) => record.id === id? { ...record,
    checked: !record.checked } : record);
    setRecords(listRecords);
  }

  const handleDelete = (id) => {
    const listRecords = records.filter((record) => record.id !== id);
    setRecords(listRecords);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newRecord) return;
    addRecord(newRecord);
    setNewRecord('');
  }  

  return (
    <div className="App"> 
      <Header title="Nature Tracker"/>
      <SearchRecord
        search={search}
        setSearch={setSearch}
      />
      <AddRecord
        newRecord={newRecord}
        setNewRecord={setNewRecord}
        handleSubmit={handleSubmit}
      />
      <MainBody
        records={records.filter(record => ((record.record).toLowerCase()).includes
          (search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={records.length} />
    </div>
  );
}

export default App;
