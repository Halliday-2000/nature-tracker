import React from 'react'
import LineRecord from './LineRecord';

const RecordList = ({ records, handleDelete, handleEdit, handlePhoto }) => {
    return (
        <ul>
            {records.map((record) => (
                <LineRecord
                    key={record.id}
                    record={record}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handlePhoto={handlePhoto}
                />
            ))}
        </ul>
    )
}

export default RecordList