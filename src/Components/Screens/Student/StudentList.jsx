import React, { useEffect, useState } from 'react';
import DataTable from '../../MostUsuageComponent/Datagridview/Datagridview';
import { collection, deleteDoc, doc, getDocs } from "firebase/firestore";
import { db } from '../../../firebaseConfig';
import { Button, Divider, Paper, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const StudentList = () => {
  const [val, setVal] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    get();
  }, [refresh]);

  const get = async () => {
    let arr = [];
    const getData = await getDocs(collection(db, "student"));
    getData.forEach((doc) => {
      
      console.log( doc.data()); 
      arr.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setVal(arr);
  };
const del = async (id) =>{
    await deleteDoc(doc(db,'student',id))
    setRefresh(!refresh)
  }
  return (
    <>  
    <Paper sx={{ display: 'flex', justifyContent: "space-between", padding: '20px', background: '#FBFFE4' }}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>Student List</Typography>
        <Button variant="contained" color="success" onClick={()=>{navigate('/Dashboard/Studentadd')}}>Add</Button>
      </Paper>
      <Divider />
      {val && <DataTable list={val} btn={del}/>}
    </>
  );
};

export default StudentList;