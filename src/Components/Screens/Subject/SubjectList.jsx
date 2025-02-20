import { collection, deleteDoc, doc, getDocs } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { db } from '../../../firebaseConfig';
import { useNavigate } from 'react-router-dom';
import { Button, Divider, Paper, Typography } from '@mui/material';
// import DataTable from '../../MostUsuageComponent/Datagridview/Datagridview';


const SubjectList = () => {

const [valsub, setValsub] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    get();
  }, [refresh]);

  const get = async () => {
    let arr = [];
    const getData = await getDocs(collection(db, "Subject"));
    getData.forEach((doc) => {
      
      console.log( doc.data()); 
      arr.push({
        ...doc.data(),
        id: doc.id,
      });
    });
    setValsub(arr);
  };
const delsub = async (id) =>{
    await deleteDoc(doc(db,'Subject',id))
    setRefresh(!refresh)
  }


  return (
    <>
    <Paper sx={{ display: 'flex', justifyContent: "space-between", padding: '20px', background: '#FBFFE4' }}>
        <Typography variant='h4' sx={{ textAlign: 'center' }}>Subject List</Typography>
        <Button variant="contained" color="success" onClick={()=>{navigate('/Dashboard/Subjectadd')}}>Add</Button>
      </Paper>
      <Divider />
      {/* {valsub && <DataTable list={valsub} btn={delsub}/>} */}



<Paper sx={{ padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Subject Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Class</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Controller</th>
            </tr>
          </thead>
          <tbody>
            {valsub.map((e,i) => (
              <tr key={e.id} style={{ border: '1px solid #ddd', textAlign:'center'}}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.id}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.class}</td>
                <td style={{textAlign:'center'}} ><Button variant='contained' color='warning'  onClick={() => { delsub(e.id) }}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>


    </>
  )
}

export default SubjectList