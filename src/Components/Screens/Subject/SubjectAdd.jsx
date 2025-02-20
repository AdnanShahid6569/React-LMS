import { Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import RadioBtn from '../../MostUsuageComponent/RadioBtn/Radiobtn'
import Buttons from '../../MostUsuageComponent/Buttons/Buttons'
import Input from '../../MostUsuageComponent/Input/Input'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'
import { useNavigate } from 'react-router-dom'

const SubjectAdd = () => {

  const [subject,setSubject] = useState();
  const [Class,setClass] = useState();
  // const [group,setGroup] = useState();

  const genderOptions = [
    { value: 'General Science', label: 'General Science' },
    { value: 'Pre Engineering', label: 'Pre Engineering' },
  ];

  const navigate = useNavigate();

  const subjectObj = {
    name: subject,
    class: Class,
  }
  const subval = async () => {
    try {
      const docRef = await addDoc(collection(db, "Subject"), subjectObj);
      console.log("Document written with ID: ", docRef.id);
      navigate('/Dashboard/Subjectlist')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }


  return (
    <>
       <Paper elevation={20} sx={{display:'flex',flexDirection:'column',justifyContent:'center',padding:'20px',rowGap:'15px',width:'50%',margin:'auto'}}>

<Typography variant='h5' sx={{width:'49%',letterSpacing:'1px',color:'#0f7978',fontWeight:'bold',fontFamily:'initial',borderBottom:'1px solid #0f7978'}}>Registeration Form...</Typography>
<Input placeholder='Subject Name'  onChang={(e) => { setSubject(e.target.value) }} />
<Input placeholder='Class' type='number' onChang={(e) => { setClass(e.target.value) }}/>
<Typography variant='h5'>Group</Typography>
<RadioBtn options={genderOptions} groupName="Group"/>
<Buttons name='Submit' color="white" onclick={subval}/>
</Paper>
    </>
  )
}

export default SubjectAdd