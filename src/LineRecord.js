import React from 'react'
import { CgRemove, CgPen, CgPhotoscan } from 'react-icons/cg';

const LineRecord = ({ record, handleCheck, handleDelete, handleEdit, handlePhoto }) => {
    const latitude = record.coords.latitude && (
        <p>
            Latitude: {record.coords.latitude.toFixed(3)}
        </p>
    )

    const longitude = record.coords.longitude && (
        <p>
            Longitude: {record.coords.longitude?.toFixed(3)}
        </p>
    )

    return (
        <li className="record">
            <div>
                <label
                    onDoubleClick={() => handleCheck(record.id)}
                >{record.record}</label>
                <CgRemove size ={28} style = {{
                    width: '60px'
                    
                }}
                    onClick={() => handleDelete(record.id)}
                    role="button" 
                    tabIndex="0"
                    aria-label={`Delete ${record.record}`}
                />
                <CgPen size ={28} style = {{
                    width: '60px'
                    
                }}
                    onClick={() => handleEdit(record.id)}
                    role="button"
                    tabIndex="0"
                    aria-label={`Edit ${record.record}`}
                />

                <CgPhotoscan size ={28} style = {{
                    width: '60px'
                }}
                    onClick={() => handlePhoto(record.id)}
                    role="button"
                    tabIndex="0"
                />
            </div>

            <img alt="" src={record.photo} />

            {latitude}

            {longitude}
        </li>
    )
}

export default LineRecord