import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const floatingActionButton = () => {
  return (
    <Box sx={{ '& > :not(style)': { m: 1 } }}>
      <Fab color="primary" aria-label="add">
        <KeyboardArrowDownIcon />
      </Fab>
    </Box>
  );
}

export default floatingActionButton;