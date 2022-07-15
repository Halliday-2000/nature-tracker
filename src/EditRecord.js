import React from 'react'
import { useRef, useState} from 'react'
import { CgAdd } from 'react-icons/cg'

const EditRecord = ({ record, onEdit }) => {
    const inputRef = useRef();
    const [recordValue, setRecordValue] = useState(record);

    return (
        <form 
            className='addForm' 
            onSubmit={(e) => {
                e.preventDefault();
                onEdit(recordValue);
            }}
        >
            <label htmlFor='editRecord'>Edit Nature Event</label>
            <input
                autoFocus
                ref={inputRef}
                id='editRecord'
                type='text'
                placeholder='Edit Record'
                required
                value={recordValue}
                onChange={(e) => setRecordValue(e.target.value)}
            />
            <button
                type='submit'
                aria-label='Edit Record'
            >
                <CgAdd />
            </button>

        </form>
    )
}

export default EditRecord
