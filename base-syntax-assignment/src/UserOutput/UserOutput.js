import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
    
    <div className="userOutput">
        <p>Username: {props.username}</p>
        <p>Here is stuff of wonders.</p>
        <p>And that is all I have to say about that.</p>
    </div>
    )}

export default userOutput