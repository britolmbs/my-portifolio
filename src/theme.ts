import { createTheme, responsiveFontSizes } from "@mui/material";

let theme = createTheme({
    palette: {
      primary: {
        main: '#232323',
      },
      secondary: {
        main: '#F44336',
      },
      
    },
    typography:{
        fontFamily: "Roboto"
    }
  });

  theme = responsiveFontSizes (theme);

  export default theme;