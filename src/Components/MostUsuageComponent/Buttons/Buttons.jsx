import React from 'react'

const Buttons = ({name,color,onclick}) => {
  const buttonStyle = {
    color:color,
    background:'green',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize:'20px'
  };
  return (
    <>
    <button style={buttonStyle} onClick={onclick}>{name}</button>
    
    </>
  )
}

export default Buttons