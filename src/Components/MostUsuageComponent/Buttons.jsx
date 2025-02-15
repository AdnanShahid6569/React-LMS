import { Button } from '@mui/material'
import React from 'react'

const Buttons = ({name}) => {
  return (
    <>
    <Button variant='contained' sx={{background:'none',color:'black'}}>{name}</Button>
    </>
  )
}

export default Buttons