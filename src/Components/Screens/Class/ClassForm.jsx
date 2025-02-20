import React, { useState } from 'react'
import Buttons from '../../MostUsuageComponent/Buttons/Buttons'
import Input from '../../MostUsuageComponent/Input/Input'
import { Paper, TextField, Typography } from '@mui/material'
import RadioBtn from '../../MostUsuageComponent/RadioBtn/Radiobtn'
import { collection, addDoc } from "firebase/firestore";
import { db } from '../../../firebaseConfig'
import { useNavigate } from 'react-router-dom'

const ClassForm = () => {
    const genderOptions = [
        { value: 'female', label: 'Female' },
        { value: 'male', label: 'Male' },
    ];


    const [name, setname] = useState();
    const [father, setfather] = useState();
    const [email, setemail] = useState();
    const [clas, setclas] = useState();
    const [date, setdate] = useState();
    const navigate = useNavigate();

    const userObj = {
        name: name,
        email: email,
        class: clas,
        father: father,
        Date: date,
    }
    const getval = async () => {
        console.log(email, name, clas, father)
        try {
            const docRef = await addDoc(collection(db, "Admission"), userObj);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        navigate('/Dashboard/Classlist')
    }

    return (
        <>
            <Paper elevation={20} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '20px', rowGap: '15px', width: '50%', margin: 'auto' }}>

                <Typography variant='h5' sx={{ width: '49%', letterSpacing: '1px', color: '#0f7978', fontWeight: 'bold', fontFamily: 'initial', borderBottom: '1px solid #0f7978' }}>Admission Form...</Typography>
                
                <Input placeholder='Enter Name' onChang={(e) => { setname(e.target.value) }} />
                <Input placeholder='Enter Father Name' onChang={(e) => { setfather(e.target.value) }} />
                <Input placeholder='Enter Email' type='email' onChang={(e) => { setemail(e.target.value) }} />
                <Input placeholder='Class' type='number' onChang={(e) => { setclas(e.target.value) }} />
                
                <Input onChang={(e)=>{setdate(e.target.value)}}
                    type="date"
                />
                <Typography variant='h5'>Gender</Typography>
                <RadioBtn options={genderOptions} groupName="gender" />
                <Buttons name='Submit' color="white" onclick={getval}/>

            </Paper>
        </>
    )
}

export default ClassForm