import React from 'react'
import { CgRemove } from 'react-icons/cg';

const LineRecord = ({ record, handleCheck, handleDelete }) => {
    return (
        <li className="record">
            <input
                type="checkbox"
                onChange={() => handleCheck(record.id)}
                checked={record.checked}
            />
            <label
                //</li>style={(record.checked) ? {textDecoration:
                //'line-through'} : null}
                onDoubleClick={() => handleCheck(record.id)}
            >{record.record}</label>
            <CgRemove
                onClick={() => handleDelete(record.id)}
                role="button" 
                tabIndex="0"
                aria-label={`Delete ${record.record}`}
            />
        </li>
    )
}

export default LineRecord