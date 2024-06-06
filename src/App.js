import React from 'react';
import { Button, TextField, Container, Typography, AppBar, Toolbar, IconButton, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box'; // Ensure Box is imported
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import './App.css';

function App() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
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
        <IconButton color="primary" href="https://github.com/LaserCraftet" target="_blank" rel="noopener noreferrer">
          <GitHubIcon />
        </IconButton>
      </Box>
    </Container>
      </Box>
    </Container>
    </div>
  );
}

export default App;
