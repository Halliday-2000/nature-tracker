import React from 'react'
import RecordList from './RecordList';

const MainBody = ({ records, handleDelete, handleEdit, handlePhoto }) => {

    return (
        <main>
            <br></br>
            <h2>
                All Records
            </h2>
            {records.length ? (
                <RecordList
                    records={records}
                    handleDelete={handleDelete}
                    handleEdit={handleEdit}
                    handlePhoto={handlePhoto}
                />
                ) : (
                    <p style={{ marginTop: '2rem' }}>No Nature Events Logged</p>
                )}
        </main>
    )
}

export default MainBody