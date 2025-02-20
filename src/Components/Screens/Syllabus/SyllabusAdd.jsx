import { Paper, TextareaAutosize, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from '../../MostUsuageComponent/Input/Input'
import RadioBtn from '../../MostUsuageComponent/RadioBtn/Radiobtn'
import Buttons from '../../MostUsuageComponent/Buttons/Buttons'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const SyllabusAdd = () => {
  const [syllabus,setSyllabus] = useState();
  const [Class,setClass] = useState();
  const [ques,setques] = useState();
  const navigate = useNavigate();

  const syllabusObj = {
    name: syllabus,
    Question: ques,
    class: Class,
  }
  const syllval = async () => {
    try {
      const docRef = await addDoc(collection(db, "Syllabus"), syllabusObj);
      console.log("Document written with ID: ", docRef.id);
      navigate('/Dashboard/Syllabuslist')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }

  return (
    <>
     <Paper elevation={20} sx={{display:'flex',flexDirection:'column',justifyContent:'center',padding:'20px',rowGap:'15px',width:'50%',margin:'auto'}}>

<Typography variant='h5' sx={{width:'49%',letterSpacing:'1px',color:'#0f7978',fontWeight:'bold',fontFamily:'initial',borderBottom:'1px solid #0f7978'}}>Syllabus Form...</Typography>
<Input placeholder='Syllabus Name'onChang={(e) => { setSyllabus(e.target.value) }}/>
<Input placeholder='Class' type='number' onChang={(e) => { setClass(e.target.value) }}/>
<Typography variant='h5'>Syllabus</Typography>
<textarea rows={12} style={{resize:"none"}} onChange={(e)=>{setques(e.target.value)}}></textarea>
<Buttons name='Submit' color="white" onclick={syllval}/>
</Paper>
    </>
  )
}

export default SyllabusAdd