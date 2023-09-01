import { createTheme, ThemeOptions } from '@mui/material/styles';

export const muiTheme: ThemeOptions = {
  palette: {
    mode: 'dark',
  },
};

const theme = createTheme(muiTheme);

export default theme;
