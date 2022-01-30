import React, {useEffect, useState} from 'react';
import './userHomeStyles.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ChallengePage from './ChallengePage'
import {useNavigate} from 'react-router-dom'
import { Typography,Paper, Container, Fab } from '@mui/material'

function UserHome() {


    const currentUser = {username: "placeholder user"};
    const navigate = useNavigate();
    
    return (

        
        <Container >

            <div className='welcome'>
                <Typography sx={{fontSize: '40px'}} component='h1' varient='h1'>Welcome {currentUser.username}</Typography>
            </div>

            <div className='amount'>
                <Paper sx={{padding: '50px', marginTop: '-60px'}}display="inline-block" elevation={3}>
                    <Typography sx={{fontSize: '25px'}} className='amttext' varient='h6'>You're spending: 100</Typography>
                </Paper>
            </div>

            <div className='challenges'>
                <Fab onClick={()=>{navigate('/challenges')}} variant="extended" sx={{backgroundColor: '#c94b59', marginTop: '-60px'}}>
                    Challenges
                </Fab>
            </div>

            
            


        </Container>
    )


}


export default UserHome