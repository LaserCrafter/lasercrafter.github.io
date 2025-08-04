import React from 'react';
import { Box, Container, Typography } from '@mui/material';


function About() {
  return (
    <div>
  <h1>About me:</h1>
  <Container>
    <Box className="large-container">
        <Typography variant="body1">
        Welcome to my portfolio! I am an aspiring software engineer looking to collaborate with the biggest minds in this industry. 
        </Typography>
      </Box>
      </Container>
    </div>
);
}
export default About;