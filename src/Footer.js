import React from 'react'

const Footer = ({ length }) => {

    return (
        <footer>
            <p>{length} Listed {length ===1 ? "record" : "records"}</p>
        </footer>
    )
}

export default Footer