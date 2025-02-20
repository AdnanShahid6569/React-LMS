import * as React from 'react';
import Paper from '@mui/material/Paper';
import { Button, Divider, Typography } from '@mui/material';
import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../../../firebaseConfig';

export default function DataTable({ list = [] ,btn}) {
  // const del = async () =>{
  //   await deleteDoc(doc(db,'student',list.id))
  //   location.reload();
  // }
  return (
    <>
      
      <Paper sx={{ padding: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#f5f5f5' }}>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>ID</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>First Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Last Name</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Class</th>
              <th style={{ padding: '10px', border: '1px solid #ddd' }}>Controller</th>
            </tr>
          </thead>
          <tbody>
            {list.map((e,i) => (
              <tr key={e.id} style={{ border: '1px solid #ddd', textAlign:'center'}}>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.id}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.name}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.father}</td>
                <td style={{ padding: '10px', border: '1px solid #ddd' }}>{e.class}</td>
                <td style={{textAlign:'center'}} ><Button variant='contained' color='warning'  onClick={() => { btn(e.id) }}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </Paper>
    </>
  );
}