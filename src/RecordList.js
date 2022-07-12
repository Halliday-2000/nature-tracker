import React from 'react'
import LineRecord from './LineRecord';

const RecordList = ({ records, handleCheck, handleDelete }) => {
    return (
        <ul>
            {records.map((record) => (
                <LineRecord
                    key={record.id}
                    record={record}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
            ))}
        </ul>
    )
}

export default RecordList