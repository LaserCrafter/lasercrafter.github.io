import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { Link } from 'react-router-dom';

const floatingActionButton = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="secondary" aria-label="add">
        <KeyboardArrowDownIcon />
      </Fab>
    </Box>
  );
}

export default floatingActionButton;

