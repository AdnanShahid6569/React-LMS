import { TextField } from '@mui/material'
import React from 'react'

const Input = ({placeholder,type,onChang}) => {
  return (
    <> 
    <TextField label={placeholder} type={type} onChange={onChang}/>
    </>
  )
}

export default Input