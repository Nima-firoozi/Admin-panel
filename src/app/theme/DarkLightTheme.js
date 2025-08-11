import { createTheme } from '@mui/material/styles';

const getDynamicTheme = (mode) => 
  createTheme({
    palette: {
      mode, 
      text: {
        primary: mode === 'dark' ? '#FFFFFF' : '#000000', 
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#F5F5F5', 
        paper: mode === 'dark' ? '#1E1E1E' : '#FFFFFF', 
      },
      action: {
        hover: mode === 'dark' ? '#383838' : '#E0E0E0', 
        selected: mode === 'dark' ? '#383838' : '#E0E0E0', 
      },
    },
   
    custom: {
      border: mode === 'dark' ? '#444444' : '#DDDDDD', 
    },
  });


  export default getDynamicTheme
