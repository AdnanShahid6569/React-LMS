import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Paper, Typography } from '@mui/material';

const ClassList = () => {

const [valadm, setValadm] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    get();
  }, [refresh]);

  const get = async () => {
    let arr = [];
    const getData = await getDocs(collection(db, "Admission"));
    getData.forEach((doc) => {
      
      console.log( doc.data()); 
      arr.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setValadm(arr);
  };
const deladm = async (id) =>{
    await deleteDoc(doc(db,'Syllabus',id))
    setRefresh(!refresh)
  }



  return (
    <>
    <Paper sx={{ display: 'flex', justifyContent: "space-between", padding: '20px', background: '#FBFFE4' }}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>Admission List</Typography>
        <Button variant="contained" color="success" onClick={()=>{navigate('/Dashboard/Classform')}}>Add</Button>
      </Paper>
      <Divider />



      <Paper sx={{ padding: '20px' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr style={{ backgroundColor: '#f5f5f5' }}>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Student Name</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Class</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Date of birth</th>
                    <th style={{ padding: '10px', border: '1px solid #ddd' }}>Controller</th>
                  </tr>
                </thead>
                <tbody>
                  {valadm.map((e,i) => (
                    <tr key={e.id} style={{ border: '1px solid #ddd', textAlign:'center'}}>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.id}</td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.name}</td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.class}</td>
                      <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.Date}</td>
                      <td style={{textAlign:'center'}} ><Button variant='contained' color='warning'  onClick={() => { deladm(e.id) }}>Delete</Button></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Paper>
      
      
    </>
  )
}

export default ClassList