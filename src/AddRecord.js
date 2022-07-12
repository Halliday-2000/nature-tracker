import React from 'react'
import { useRef } from 'react';
import { CgAdd } from 'react-icons/cg'

/*function geoFindMe() {
    console.log("geoFindMe" , lastInsertedID)
    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      //mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      console.log(`Latitude: ${latitude} °, Longitude: ${longitude} °`);
      locateTask(lastInsertedID, {latitude: latitude, longitude: longitude, error: ""});
    }
  
    function error() {
      console.log('Unable to retrieve your location');
    }
  
    if(!navigator.geolocation) {
      console.log('Geolocation is not supported by your browser');
    } else {
      console.log('Locating…');
      navigator.geolocation.getCurrentPosition(success, error);
    }
  
  }
*/
const AddRecord = ({ newRecord, setNewRecord, handleSubmit }) => {
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addRecord'>Create New Nature Event</label>
            <input
                autoFocus
                ref={inputRef}
                id='addRecord'
                type='text'
                placeholder='Add Record'
                required
                value={newRecord}
                onChange={(e) => setNewRecord(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Add Record'
                onClick={() => inputRef.current.focus()}
            >
                <CgAdd />
            </button>
        </form>
    )
}

export default AddRecord