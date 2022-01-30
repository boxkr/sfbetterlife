import React from 'react';
import Container from '@mui/material/Container';
import './LandingPage.css';
import logo from '../images/statefarm-logo-white.png';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';


function LandingPage() {
    const navigate = useNavigate();
    return (

        <div>

            <div className='welcome'>
                <Button 
                variant="contained"
                sx={{color: 'black', 
                    backgroundColor: 'white', 
                    '&:hover': {
                        backgroundColor: 'white'}
                }}
                onClick={()=> (navigate("/userLogin"))}>
                    I am a User
                </Button>
                <Button variant="contained" 
                sx={{color: 'black', backgroundColor: 'white', '&:hover': {backgroundColor: 'white'}}}
                onClick={()=> (navigate("/doctorLogin"))}>
                    I am a Doctor
                </Button>
            </div>
            
            
        </div>
    )


}


export default LandingPage;