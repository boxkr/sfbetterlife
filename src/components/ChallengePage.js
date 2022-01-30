import React, {useState} from 'react';
import {Container, Card, CardContent, Typography, Button, Fade, Backdrop, Box, Modal} from '@mui/material'
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import {useNavigate} from 'react-router-dom'
import './challengestyles.css'
import {auth, firestore} from '../firebaseConfig'

function ChallengePage() {

    const navigate = useNavigate();
    const [open1, setOpen1] = React.useState(false);
    const [open2, setOpen2] = React.useState(false);
    const [open3, setOpen3] = React.useState(false);
    const [open4, setOpen4] = React.useState(false);
    const [open5, setOpen5] = React.useState(false);
    const [percent1, setpercent1] = React.useState(76);
    const [percent2, setpercent2] = React.useState(89);
    const [percent3, setpercent3] = React.useState(56);
    const [percent4, setpercent4] = React.useState(80);
    const [percent5, setpercent5] = React.useState(75);
    const [percentage, setPercentages] = React.useState([percent1,percent2,percent3,percent4,percent5])
    const handleOpen1 = () => setOpen1(true);
    const handleClose1 = () => setOpen1(false);
    const handleOpen2 = () => setOpen2(true);
    const handleClose2 = () => setOpen2(false);
    const handleOpen3 = () => setOpen3(true);
    const handleClose3 = () => setOpen3(false);
    const handleOpen4 = () => setOpen4(true);
    const handleClose4 = () => setOpen4(false);
    const handleOpen5 = () => setOpen5(true);
    const handleClose5 = () => setOpen5(false);
    const ref = firestore.collection('metrics');

    /*
    ref.where("uid", "==", auth?.cuurentUser.uid).onSnapshot((snapshot)=>{
        let changes = snapshot.docChanges()
        let placeholder = []
        changes.forEach((element)=>{

            if(element.type=='added'){
                //render stuff
                
                placeholder.push(element.doc.data())
            }
        })

        setPercentages(placeholder)
    })
    */
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    return (

        <>
        <Button onClick={()=>{navigate('/uHome')}}>Back</Button>

        <div className='container'>
            <div className='graph'>
                <CircularProgressbar value={percentage[0]} text={`${percentage[0]}%`} styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#427a48',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#aa2355',
                    path:{
                        stroke: `rgba(62, 152, 199, ${percentage / 100})`,
                    }
                })} />
            </div>
            <div className='graph'>
                <CircularProgressbar value={percentage[1]} text={`${percentage[1]}%`} styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(252, 192, 25, ${percentage / 100})`,
                    textColor: '#427a48',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                    path:{
                        stroke: `rgba(252, 192, 25, ${percentage / 100})`,
                    }
                })}/>
            </div>
            <div className='graph'>
                <CircularProgressbar value={percentage[2]} text={`${percentage[2]}%`} styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#000000',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}/>
            </div>
            <div className='graph'>
                <CircularProgressbar value={percentage[3]} text={`${percentage[3]}%`} styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#427a48',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })}/>
            </div>
            <div className='graph'>
                <CircularProgressbar value={percentage[4]} text={`${percentage[4]}%`}styles={buildStyles({
                    // Rotation of path and trail, in number of turns (0-1)
                    rotation: 0.25,

                    // Whether to use rounded or flat corners on the ends - can use 'butt' or 'round'
                    strokeLinecap: 'round',

                    // Text size
                    textSize: '16px',

                    // How long animation takes to go from one percentage to another, in seconds
                    pathTransitionDuration: 0.5,

                    // Can specify path transition in more detail, or remove it entirely
                    // pathTransition: 'none',

                    // Colors
                    pathColor: `rgba(62, 152, 199, ${percentage / 100})`,
                    textColor: '#427a48',
                    trailColor: '#d6d6d6',
                    backgroundColor: '#3e98c7',
                })} />
            </div>
            
        </div>
        <div className='container' >
            <Button sx={{marginTop:'-250px', paddingLeft: '120px', paddingRight: '120px'}} onClick={handleOpen1}>Lower Blood Pressure</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open1}
                onClose={handleClose1}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open1}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Challenge 1: Lower Blood Pressure
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Your blood pressure is a great indicator of overall health
                Cut out fatty foods and exercise to lower your blood pressure
                <br></br>
                <br></br>
                Submit blood pressure results {<a onClick={()=>{setpercent1(percent1+1); setPercentages([percent1, percent2, percent3, percent4, percent5])}}><b>here</b></a>}
                </Typography>
            </Box>
            </Fade>
        </Modal>
        <Button sx={{marginTop:'-250px', paddingLeft: '120px', paddingRight: '120px'}} onClick={handleOpen2}>Lower Weight</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open2}
                onClose={handleClose2}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open2}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Challenge 2: Lower Weight
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Statistically, A higher weight can put you at risk of health issues
                <br></br>
                <br></br>
                Submit weight results {<a onClick={()=>{setpercent2(percent2+1); setPercentages([percent1, percent2, percent3, percent4, percent5])}}><b>here</b></a>}
                </Typography>
            </Box>
            </Fade>
        </Modal>
        <Button sx={{marginTop:'-250px', paddingLeft: '120px', paddingRight: '120px'}} onClick={handleOpen3}>Quit Smoking</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open3}
                onClose={handleClose3}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open3}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Challenge 3: Quit Smoking
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Smoking is one of the worst things you can do to your body
                It's a hard habit to kill, but if you can manage to, you will be much healthier.
                <br></br>
                <br></br>
                Submit smoking check {<a onClick={()=>{setpercent3(percent3+1); setPercentages([percent1, percent2, percent3, percent4, percent5])}}><b>here</b></a>}
                </Typography>
            </Box>
            </Fade>
        </Modal>
        <Button sx={{marginTop:'-250px', paddingLeft: '120px', paddingRight: '120px'}} onClick={handleOpen4}>Exercise</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open4}
                onClose={handleClose4}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open4}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Challenge 4: Excercise!
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Getting out and moving everyday has many, many benefits!
                Link your apple watch, and upload an activity monitor!
                <br></br>
                <br></br>
                Submit an activity monitor result {<a onClick={()=>{setpercent4(percent4+1); setPercentages([percent1, percent2, percent3, percent4, percent5])}}><b>here</b></a>}
                </Typography>
            </Box>
            </Fade>
        </Modal>
        <Button sx={{marginTop:'-250px', paddingLeft: '120px', paddingRight: '120px'}} onClick={handleOpen5}>Better Eating Habits</Button>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={open5}
                onClose={handleClose5}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                timeout: 500,
                }}
            >
            <Fade in={open5}>
            <Box sx={style}>
                <Typography id="transition-modal-title" variant="h6" component="h2">
                Challenge 5: Better Eating Habits
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                Ultimately, you get out of your body what you put into it
                Develop better eating habits to lead a better lifestyle!
                <br></br>
                <br></br>
                Submit nutrition info {<a onClick={()=>{setpercent5(percent5+1); setPercentages([percent1, percent2, percent3, percent4, percent5])}}><b>here</b></a>}
                </Typography>
            </Box>
            </Fade>
        </Modal>
    </div>









        </>
        
    )


}


export default ChallengePage 