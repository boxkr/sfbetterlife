import React from 'react';
import Container from '@mui/material/Container';
import './LandingPage.css';
import logo from '../images/statefarm-logo-white.png';
import Button from '@mui/material/Button';
import {useNavigate} from 'react-router-dom';
import Typography from '@mui/material/Typography';


function LandingPage() {
    const navigate = useNavigate();
    return (

        <div className='wrapper'>

            <Container>
                <Typography sx={{marginTop: '150px',fontSize: '75px'}} variant='h2'>Welcome!</Typography>
                <Button variant="contained" sx={{fontSize:'20px',width: '300px',marginTop: '100px',color: '#c41212', backgroundColor: 'white', '&:hover':{color: 'white' , backgroundColor: '#bf5656'}}} onClick={()=>(navigate('/userLogin'))}>
                    I am a user
                </Button>
                <br></br>
                <Button variant="contained" sx={{fontSize:'20px',marginTop: '50px',width: '300px',color: 'white', backgroundColor: '#c41212', '&:hover':{color:'#c41212',backgroundColor: '#e8e8e8'}}} onClick={()=>(navigate('/doctorLogin'))}>
                    I am a physician
                </Button>
            </Container>
            
            
        </div>
    )


}


export default LandingPage;