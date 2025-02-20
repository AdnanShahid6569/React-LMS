import { Paper, Typography } from '@mui/material'
import React, { useState } from 'react'
import Input from '../../MostUsuageComponent/Input/Input'
import Buttons from '../../MostUsuageComponent/Buttons/Buttons'
import RadioBtn from '../../MostUsuageComponent/RadioBtn/Radiobtn'
import { useNavigate } from 'react-router-dom'
import { addDoc, collection } from 'firebase/firestore'
import { db } from '../../../firebaseConfig'

const TeacherAdd = () => {
  const genderOptions = [
    { value: 'female', label: 'Female' },
    { value: 'male', label: 'Male' },
  ];

  const [name, setname] = useState();
  const [father, setfather] = useState();
  const [email, setemail] = useState();
  const [clas, setclas] = useState();
  const navigate = useNavigate();

  const teacherObj = {
    name: name,
    email: email,
    class: clas,
    father: father,
  }
  const teachval = async () => {
    console.log(email, name, clas, father)
    try {
      const docRef = await addDoc(collection(db, "Teacher"), teacherObj);
      console.log("Document written with ID: ", docRef.id);
      navigate('/Dashboard/TeacherList')
    } catch (e) {
      console.error("Error adding document: ", e);
    }
  }
  return (
    <>
      <Paper elevation={20} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', rowGap: '15px', width: '50%', margin: 'auto' }}>

        <Typography variant='h5' sx={{ width: '49%', letterSpacing: '1px', color: '#0f7978', fontWeight: 'bold', fontFamily: 'initial', borderBottom: '1px solid #0f7978' }}>Teacher Registeration...</Typography>
        <Input placeholder='Enter Teacher Name' onChang={(e) => { setname(e.target.value) }} />
        <Input placeholder='Enter Father Name' onChang={(e) => { setfather(e.target.value) }} />
        <Input placeholder='Enter Email' type="email" onChang={(e) => { setemail(e.target.value) }} />
        <Input placeholder='Class' type='number' onChang={(e) => { setclas(e.target.value) }} />

        <Typography variant='h5'>Gender</Typography>
        <RadioBtn options={genderOptions} groupName="gender" />
        <Buttons name='Submit' color="white" onclick={teachval} />

      </Paper>
    </>
  )
}

export default TeacherAdd