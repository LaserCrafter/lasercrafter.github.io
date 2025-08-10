import React from 'react';
import {Container, Typography, AppBar, IconButton } from '@mui/material';
import Box from '@mui/material/Box'; // Ensure Box is imported
import LinkedInIcon from '@mui/icons-material/LinkedIn'; 
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import Navbar from './navbar.js';
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
          Welcome to my portfolio! I am an aspiring software engineer looking to collaborate with the biggest minds in this industry. 
        </Typography>
      </Box>
    </Container>
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
