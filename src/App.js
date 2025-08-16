import React from 'react';
import {Container, Typography, AppBar, IconButton } from '@mui/material';
import Box from '@mui/material/Box'; // Ensure Box is imported
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './components/Navbar/navbar.js';
import About from './pages/About';

function Main() {
  return (
    <div>
    <Container>
      <Box className="large-container">
        <Typography variant="h2" gutterBottom>
          Hello, I'm Elvis Bui!
        </Typography>
        <Typography variant="body1" gutterBottom>
          Welcome to my portfolio! 
        </Typography>
          <div className="icon-container"> {/* Flex container for icons */}
            <a href="https://www.linkedin.com/in/elvisbui" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon className="icon" />
            </a>
            <a href="https://github.com/lasercrafter" target="_blank" rel="noopener noreferrer">
              <GitHubIcon className="icon" />
            </a>
            <a href="mailto:elvisbui36@gmail.com" target="_blank" rel="noopener noreferrer">
              <EmailIcon className="icon"/>
              </a>
          </div>
      </Box>
    </Container>
    <h1>
      Here's what I do:
    </h1>
    </div>
  );
}


function App() {
  return (
    <div>
      <AppBar position="static">
      <Navbar />
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Container>      
    </div>
  );
}

export default App;
