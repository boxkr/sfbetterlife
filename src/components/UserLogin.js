import React, {useEffect, useState} from 'react';
import TextField from '@mui/material/TextField'
import Container from '@mui/material/Container';
import { Button } from '@mui/material';
import {useNavigate} from 'react-router-dom'
import InputAdornment from '@mui/material/InputAdornment';
import AccountCircle from '@mui/icons-material/AccountCircle';
import {auth} from '../firebaseConfig'
import './login.css';


function UserLogin() {

    const navigate = useNavigate();
    const [email, setemail] = useState('');
    const [password, setpassword] = useState('');

    useEffect(()=>{
        const unsubscribe = auth.onAuthStateChanged(user =>{
            if(user) {
                navigate("/uHome")
            }
        })

        return unsubscribe;
    }, [])

    const handleLogin = () => {
        
        console.log(email)
        auth.signInWithEmailAndPassword(email,password)
        .then((userCredentials)=>{
            const user = userCredentials.user;
            console.log(user.email);
            console.log("Logged in user")
        })
        .catch( (err) =>{alert(err.message)})
    }

    return (

        <div>
            <Container>

                <div>
                    <TextField onChange={(text)=>{setemail(text.target.value)}} sx={{marginLeft: '350px',width:'500px',marginTop:'330px'}} inputProps={{startAdornment: <InputAdornment><AccountCircle/></InputAdornment>, autocomplete: 'off', form: {autocomplete: 'off'}}}id="email" label="Enter Email" variant="outlined"/>
                    <br/>
                    <TextField onChange={text=>setpassword(text.target.value)} sx={{marginTop:'10px',marginLeft: '350px',width:'500px'}} id="password-basic" type='password' label="Enter Password" variant="outlined"/>
                </div>
                <Button variant="contained" sx={{marginLeft: '450px',borderRadius: '10px', fontSize:'20px',width: '300px',marginTop: '100px',color: 'white', backgroundColor: '#c41212', '&:hover':{color: '#c41212' , backgroundColor: 'white'}}} onClick={handleLogin}>
                        Log in
                </Button>

            </Container>
        </div>
        

    );


}


export default UserLogin