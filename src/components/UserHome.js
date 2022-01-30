import React, {useEffect, useState} from 'react';
import './userHomeStyles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import {useNavigate} from 'react-router-dom'
import { Typography,Paper, Container, Fab } from '@mui/material'
import {auth} from '../firebaseConfig'

function UserHome() {


    const currentUser = {username: "keegan"}
    const navigate = useNavigate();
    
    return (

        
        <Container >

            <div className='welcome'>
                <Typography sx={{fontSize: '40px'}} component='h1' varient='h1'>Welcome back, {auth.currentUser.email}</Typography>
            </div>

            <div className='amount'>
                <Paper sx={{width: '400px',padding: '50px', marginTop: '-60px',marginLeft: '-73px'}}display="inline-block" elevation={3}>
                    <Typography sx={{fontSize: '25px'}} className='amttext' varient='h6'>Your current monthly payment is: ${'27'} /mo</Typography>
                </Paper>
            </div>

            <div className='challenges'>
                <Fab onClick={()=>{navigate('/challenges')}} variant="extended" sx={{backgroundColor: '#c94b59', marginTop: '-60px'}}>
                    My Metrics
                </Fab>
            </div>

            
            


        </Container>
    )


}


export default UserHome