import Header from './Header';
import SearchRecord from './SearchRecord';
import AddRecord from './AddRecord';
import EditRecord from './EditRecord';
import PhotoRecord from './PhotoRecord';
import MainBody from './MainBody';
import Footer from './Footer';

import { useState, useEffect } from 'react';

function App() {
  const [records, setRecords] = useState(JSON.parse(localStorage.getItem('natureevents')) || []);
  console.log('records test:', records)
  const [newRecord, setNewRecord] = useState('')
  const [search, setSearch] = useState('')
  const [isEditing, setIsEditing] = useState(false);
  const [isPhoto, setIsPhoto] = useState(false);
  const [currentRecord, setCurrentRecord] = useState(null);

  useEffect(() => {
    localStorage.setItem('natureevents', JSON.stringify(records));
  }, [records])
  
  const addRecord = (record, coords) => {
    const id = records.length ? records[records.length - 1].id + 1 : 1;
    const MyNewRecord = { id, record, coords };
    const listRecords = [...records, MyNewRecord];
    setRecords(listRecords);
  }

  const handleDelete = (id) => {
    const listRecords = records.filter((record) => record.id !== id);
    setRecords(listRecords);
  }

  const handleEdit = (id) => {
    setIsEditing(true);
    setCurrentRecord(records.find((r) => r.id === id));
  }

  const handlePhoto = (id) => {
    setIsPhoto(true);
    setCurrentRecord(records.find((r) => r.id === id));
  }

  const onEditComplete = (newRecordValue) => {
    const newRecords  = records.map((r) => {
      if (r.id === currentRecord.id) {
        return { ...r, record: newRecordValue }
      }

      return r
    });
    setRecords(newRecords)
    
    setIsEditing(false);
    setCurrentRecord(null);
  };

  const locationSuccess = (position) => {
    const coords = { latitude: position.coords.latitude, longitude: position.coords.longitude }
    addRecord(newRecord, coords);
  }

  const locationFailure = () => {
    addRecord(newRecord, {})
  } 

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newRecord) return;

    navigator.geolocation.getCurrentPosition(locationSuccess, locationFailure);
   
    setNewRecord('');
  }

  const onPhotoComplete = (data) => {
    const newRecords = records.map((r) => {
      if (r.id === currentRecord.id) {
        console.log('data test:', data)
        const newRecord = { ...r, photo: data }

        return newRecord
      }

      return r
    });

    setRecords(newRecords);
    setIsPhoto(false);
    setCurrentRecord(null);
  };

  const list = (
    <>
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
        records={records.filter((record) => 
          record.record.toLowerCase().includes(search.toLowerCase())
        )}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
        handlePhoto={handlePhoto}
      />
      <Footer length={records.length} />
    </>
  )

  const content = currentRecord
    ? isEditing
      ? <EditRecord record={currentRecord.record} onEdit={onEditComplete} />
      : isPhoto
        ? <PhotoRecord record={currentRecord.record} onPhoto={onPhotoComplete} />
        : list
    : list

  return (
    <div className="App"> 
      <Header title="Nature Tracker"/>

      {content}
    </div>
  );
}

export default App;
