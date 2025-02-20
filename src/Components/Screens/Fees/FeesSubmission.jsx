import { FormControl, InputLabel, MenuItem, Paper, Select, Typography } from '@mui/material'
import React from 'react'
import Input from '../../MostUsuageComponent/Input/Input'
import RadioBtn from '../../MostUsuageComponent/RadioBtn/Radiobtn'
import Buttons from '../../MostUsuageComponent/Buttons/Buttons'

const FeesSubmission = () => {
  return (
    <>
        <Paper elevation={20} sx={{display:'flex',flexDirection:'column',justifyContent:'center',padding:'20px',rowGap:'15px',width:'50%',margin:'auto'}}>

<Typography variant='h5' sx={{width:'49%',letterSpacing:'1px',color:'#0f7978',fontWeight:'bold',fontFamily:'initial',borderBottom:'1px solid #0f7978'}}>Fees Submission...</Typography>
<Input placeholder='Enter Name'/>
<Input placeholder='Enter Class'/>
<Input placeholder='Enter Amount'/>
<FormControl fullWidth>
        <InputLabel id="class-select-label">Payment Method</InputLabel>
        <Select
          labelId="class-select-label"
          id="class-select"
value='class'
          label="Payment Method"
        >
          <MenuItem value={10}>Debit</MenuItem>
          <MenuItem value={11}>Cash</MenuItem>
          <MenuItem value={12}>Credit</MenuItem>
        </Select>
      </FormControl>
<Buttons name='Submit' color="white"/>

</Paper>
    </>
  )
}

export default FeesSubmission