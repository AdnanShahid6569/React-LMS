import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Paper, Typography } from '@mui/material';
import DataTable from '../../MostUsuageComponent/Datagridview/Datagridview';

const TeacherList = () => {
  const [valteacher, setValteacher] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    get();
  }, [refresh]);

  const get = async () => {
    let arr = [];
    const getData = await getDocs(collection(db, "Teacher"));
    getData.forEach((doc) => {
      
      console.log( doc.data()); 
      arr.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setValteacher(arr);
  };
const delteacher = async (id) =>{
    await deleteDoc(doc(db,'Teacher',id))
    setRefresh(!refresh)
  }
  return (
    <>  
    <Paper sx={{ display: 'flex', justifyContent: "space-between", padding: '20px', background: '#FBFFE4' }}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>Teacher List</Typography>
        <Button variant="contained" color="success" onClick={()=>{navigate('/Dashboard/Teacheradd')}}>Add</Button>
      </Paper>
      <Divider />
      {valteacher && <DataTable list={valteacher} btn={delteacher}/>}
    </>
  )
}

export default TeacherList