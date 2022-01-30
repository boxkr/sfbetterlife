import React from 'react';
import {Container, Card, CardContent, Typography} from '@mui/material'

function ChallengePage() {



    const card1 = (<React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Major Challenge
          </Typography>
          <Typography variant="h5" component="div">
            Stop smoking
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            36% complete
          </Typography>
          <Typography variant="body2">
            Smoking cigarettes has been proven to cause cancer
            <br></br>
            Stop smoking to get a 25% reduction in your life insurance.
          </Typography>
        </CardContent>
      </React.Fragment>);

    const card2 = (<React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Minor Challenge
          </Typography>
          <Typography variant="h5" component="div">
            Get moving!
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            Not Started
          </Typography>
          <Typography variant="body2">
            Staying active increases mood and overall health
            <br></br>
            Upload an activity monitor from your apple watch to gain 100 points!
          </Typography>
        </CardContent>
      </React.Fragment>

    );

    const card3 = (<React.Fragment>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Major Challenge
          </Typography>
          <Typography variant="h5" component="div">
            Lower your blood pressure
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            2% complete
          </Typography>
          <Typography variant="body2">
            Your blood pressure is a good indicator of overall health
            <br></br>
            Decrease your blood pressure by {'x'} points to gain 1000 points
          </Typography>
        </CardContent>
      </React.Fragment>

    );

    
    return (

        <Container>
            <Card>
                {card1}
            </Card>
            <br/>
            <Card>
                {card2}
            </Card>
            <br/>
            <Card>
                {card3}
            </Card>


        </Container>
    )


}


export default ChallengePage