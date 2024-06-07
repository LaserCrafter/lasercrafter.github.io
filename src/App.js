import React from 'react';
import {Container, Typography, AppBar, IconButton } from '@mui/material';
import Box from '@mui/material/Box'; // Ensure Box is imported
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import MenuBar from './MenuBar';

function Main() {
  return (
    <div>
    <Container>
      <Box className="large-container">
        <Typography variant="h2" gutterBottom>
          Hello, I'm Elvis Bui.
        </Typography>
        <Typography variant="body1" gutterBottom>
          I am an aspiring software developer currently looking to work with open minds and good ideas
        </Typography>
        <Container>
      <Box className="social-media-container">
        <IconButton color="primary" href="https://www.linkedin.com/in/elvisbui" target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </IconButton>
        <IconButton color="primary" href="https://github.com/LaserCrafter" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Container>
      </Box>
    </Container>
    </div>
  );
}


function App() {
  return (
    <div>
      <AppBar position="static">
      <MenuBar />
      </AppBar>
      <Container>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </Container>      
    </div>
  );
}

export default App;
