import { Container, Typography, Grid, styled, IconButton } from "@mui/material";
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const StyledFooter = styled('footer')(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.primary.contrastText,
  padding: theme.spacing(4, 0),
  marginTop: theme.spacing(4),
}));

const Footer = () => {
  return (
    <StyledFooter>
      <Container maxWidth="lg">
        <Grid container justifyContent="center" spacing={2}>
          <Grid item>
            <IconButton
              aria-label="Instagram"
              component="a"
              href="https://www.instagram.com/britolmbs"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <InstagramIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              aria-label="LinkedIn"
              component="a"
              href="https://www.linkedin.com/in/britolmbs"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Grid container justifyContent="center">
          <Grid item>
            <Typography variant="body1">&copy; Lucas Brito</Typography>
          </Grid>
        </Grid>
      </Container>
    </StyledFooter>
  );
};

export default Footer;
