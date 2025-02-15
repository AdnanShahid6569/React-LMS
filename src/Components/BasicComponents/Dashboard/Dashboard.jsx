import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import AppBar from '@mui/material/AppBar';
import CssBaseline from '@mui/material/CssBaseline';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import PersonIcon from "@mui/icons-material/Person";
import Collapse from "@mui/material/Collapse";
import { Button, Divider, ListItemText } from '@mui/material';
import { GiFlowerPot } from "react-icons/gi";
import Login from '../Login/Login';
import { AiOutlineLogout } from "react-icons/ai";
import { FaChalkboardTeacher } from "react-icons/fa";
import SubjectIcon from '@mui/icons-material/Subject';
import { LuNewspaper } from "react-icons/lu";
import { IoIosAddCircle } from "react-icons/io";
import { SiBookstack } from "react-icons/si";
import { SiGoogleforms } from "react-icons/si";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import { FaSchool } from "react-icons/fa";
import { GiArchiveRegister } from "react-icons/gi";
import { MdAttachMoney } from "react-icons/md";
import { MdFiberManualRecord } from "react-icons/md";
import { FaPersonShelter } from "react-icons/fa6";
import { GiClassicalKnowledge } from "react-icons/gi";
import { PiExamFill } from "react-icons/pi";
import { Outlet, useNavigate } from 'react-router-dom';

const drawerWidth = 250;

export default function Dashboard() {

  const [open, setOpen] = React.useState(false);
  const [teacher, setteacher] = React.useState(false);
  const [Subject, setSubject] = React.useState(false);
  const [Syllabus, setSyllabus] = React.useState(false);
  const [School, setSchool] = React.useState(false);
  const [Class, setClass] = React.useState(false);
  const [Fees, setFees] = React.useState(false);
  const [Admission, setAdmission] = React.useState(false);
  const [Exam, setExam] = React.useState(false);

  const navigate = useNavigate();
  const nav = useNavigate();

  return (
    <Box sx={{ display: 'flex' }}>
      {/* <CssBaseline /> */}
      <AppBar elevation={20} position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1, backgroundColor: '#0f7978' }}>
        <Toolbar>
          <GiFlowerPot style={{ fontSize: '40px' }} />
          <Typography variant="h6" noWrap component="div" sx={{
            flexGrow: 1,
            textAlign: 'center'
          }}>
            Learning Management System
          </Typography>

          <Button onClick={() => {
            localStorage.clear()
            nav('/Login')
          }}
            variant='contained' color="white"><AiOutlineLogout style={{ fontSize: '32px' }} /> &nbsp;Logout</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>

          <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                setOpen(!open);
              }}>
                <ListItemIcon>
                  <AccessibilityNewIcon style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="Student" />
                {open ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            {/* Nested Level */}
            <Collapse in={open} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate('Studentadd')}}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Student Registeration" />
                </ListItemButton>


              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} onClick={()=>{navigate('Studentlist')}}>
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Student List" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>
          <Divider />


          {/* Second Teacher */}
          <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                setteacher(!teacher)
              }}>
                <ListItemIcon>
                  <FaChalkboardTeacher style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Teacher" />
                {teacher ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            {/* Nested Level */}
            <Collapse in={teacher} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Teacher Registeration" />
                </ListItemButton>


              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <PersonIcon />
                  </ListItemIcon>
                  <ListItemText primary="Teacher List" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>
          <Divider />


          {/*Third Subject */}
          <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                setSubject(!Subject)
              }}>
                <ListItemIcon>
                <SubjectIcon style={{fontSize:'30px'}}/>
                </ListItemIcon>
                <ListItemText primary="Subject" />
                {Subject ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            {/* Nested Level */}
            <Collapse in={Subject} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <IoIosAddCircle style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Subject Add" />
                </ListItemButton>


              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                  <SiBookstack style={{fontSize:"25px"}} />
                  </ListItemIcon>
                  <ListItemText primary="Subject List" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>
          <Divider />

  {/*Fourth Syllabus */}
  <List>
            {/* Parent Item */}
            <ListItem disablePadding>
              <ListItemButton onClick={() => {
                setSyllabus(!Syllabus)
              }}>
                <ListItemIcon>
                <LuNewspaper style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Syllabus" />
                {Syllabus ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

            {/* Nested Level */}
            <Collapse in={Syllabus} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <SiGoogleforms style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Syllabus Form" />
                </ListItemButton>


              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <ReceiptLongIcon style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Syllabus List" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>
          <Divider />

          {/*Five School  */}
          <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                setSchool(!School)
              }}>
                <ListItemIcon>
                <FaSchool style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="School"/>
                {School ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

              {/* Nested Level */}
              <Collapse in={School} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <GiArchiveRegister style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Teacher Registeration" />
                </ListItemButton>


              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <GiArchiveRegister style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Student Registeration" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>
          <Divider />

          
          {/*Six Class  */}
          <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                setClass(!Class)
              }}>
                <ListItemIcon>
                <GiClassicalKnowledge style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Class"/>
                {Class ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

              {/* Nested Level */}
              <Collapse in={Class} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <SiGoogleforms style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Class Form" />
                </ListItemButton>


              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <ReceiptLongIcon style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Class List" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>
          <Divider />


 {/*Seventh Fees  */}
 <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                setFees(!Fees)
              }}>
                <ListItemIcon>
                <MdAttachMoney style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Fees"/>
                {Fees ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

              {/* Nested Level */}
              <Collapse in={Fees} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MdFiberManualRecord style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Fees Structure" />
                </ListItemButton>


              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <MdFiberManualRecord style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Fees Voucher" />
                </ListItemButton>

              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <MdFiberManualRecord style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Fees Submission" />
                </ListItemButton>

              </List>
            </Collapse>
          </List>
          <Divider />

           {/*Eight Admission  */}
 <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                setAdmission(!Admission)
              }}>
                <ListItemIcon>
                <FaPersonShelter style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Admission"/>
                {Admission ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

              {/* Nested Level */}
              <Collapse in={Admission} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }} >
                  <ListItemIcon>
                    <SiGoogleforms style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Admission Form" />
                </ListItemButton>
              </List>
              
            </Collapse>
          </List>
          <Divider />


                 {/*Nine Exam  */}
 <List >
            <ListItem disablePadding>
              <ListItemButton onClick={()=>{
                setExam(!Exam)
              }}>
                <ListItemIcon>
                <PiExamFill style={{fontSize:'25px'}}/>
                </ListItemIcon>
                <ListItemText primary="Exam"/>
                {Admission ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
            </ListItem>

              {/* Nested Level */}
              <Collapse in={Exam} timeout='auto' unmountOnExit>
              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MdFiberManualRecord style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Exam Shedule" />
                </ListItemButton>
              </List>

              <List component="div" disablePadding>
                <ListItemButton sx={{ pl: 4 }}>
                  <ListItemIcon>
                    <MdFiberManualRecord style={{fontSize:'25px'}}/>
                  </ListItemIcon>
                  <ListItemText primary="Exam Result" />
                </ListItemButton>
              </List>
              
            </Collapse>
          </List>
          <Divider />

        </Box>
      </Drawer>
      
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <h1>Welcome Dashboard</h1>
       <Outlet />
      
      </Box>
    </Box>
  );
}
