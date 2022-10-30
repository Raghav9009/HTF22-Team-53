import React from 'react';
import {AppBar, Toolbar,Button, Typography} from '@mui/material';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { toast } from 'react-toastify';


export default function Header(){
     
     
    return(
        <AppBar position="static" sx={{
            backgroundColor:'white',
            marginLeft:'200px',
            width:'1080px',
        }}>
          <Toolbar sx={{
             height:'20px'
          }}>
            
            <Typography variant='h6' sx={{marginLeft:'10px',marginTop:'8px',color:'#253053',fontWeight:'bold'}}>Hello</Typography>
            <Button variant='contained'  sx={{marginLeft:'760px'}}>
                Logout
            </Button>
          </Toolbar>
        </AppBar>
    )
} 