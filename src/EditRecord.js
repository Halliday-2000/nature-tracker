import React from 'react'
import { useRef } from 'react'

const EditRecord = ({ newRecord, setNewRecord, handleSubmit }) => {
    const inputRef = useRef();

    return (
        <form className='addForm' onSubmit={handleSubmit}>
            <label htmlFor='addRecord'>Create New Nature Event</label>
            <input
                autoFocus
                ref={inputRef}
                id='addRecord'
                typr='text'
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
            </button>

        </form>
    )
}

export default EditRecord
