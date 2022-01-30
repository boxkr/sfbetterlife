import React from 'react';
import './login.css'
import TextField from '@mui/material/TextField'
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'

function UserLogin() {

    const navigate = useNavigate();
    return (

        
        
        <div className='login' style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '100vh'}}>
            <TextField 
                id="demo-helper-text-misaligned"
                label="Username"
                margin='normal'
                sx={{backgroundColor: "white"}}
            />

            <TextField 
                id="demo-helper-text-misaligned"
                label="Password"
                margin='normal'
                sx={{backgroundColor: "white"}}
            />
            
          
            <Button 
                variant="contained" 
                sx={{color: 'black', backgroundColor:'white'}}
                onClick={()=> {navigate("/UserHome")}}
                >
                Login
            </Button>

        </div> 

    )


}


export default UserLogin