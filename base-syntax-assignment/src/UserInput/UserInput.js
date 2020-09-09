import React from 'react';

const userInput = (props) => {
const style =  {
    border: '1px dashed #AAA',
    backgroundColor: '#EEEEEF',
    padding: "1rem",
    fontSize: '.8rem',
    width: '20vw',
    minWidth: '105px',
    marginLeft: '2rem'
}

return <input type="text"
style = {style} 
onChange={props.click} 
value={props.currentName}/>
}



export default userInput