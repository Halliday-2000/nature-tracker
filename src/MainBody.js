import React from 'react'
import RecordList from './RecordList';

const MainBody = ({ records, handleCheck, handleDelete }) => {

    return (
        <main>
            {records.length ? (
                <RecordList
                    records={records}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                />
                ) : (
                    <p style={{ marginTop: '2rem' }}>No Nature Events Logged</p>
                )}
        </main>
    )
}

export default MainBody