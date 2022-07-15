import React from 'react'
import { useRef } from 'react';
import { AiOutlinePlus } from 'react-icons/ai'

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
                <AiOutlinePlus size={36} />
            </button>
        </form>
    )
}

export default AddRecord