import React from 'react';
import './footer.css';

const Footer = (props) => {
    return (
        <div className="footer">
            <p>{props.text}</p>
        </div>
    )
}

export default Footer