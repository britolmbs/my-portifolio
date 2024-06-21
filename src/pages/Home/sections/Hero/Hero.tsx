import { Button, Container, Grid, Typography, styled } from "@mui/material"
import Avatar from "../../../../assets/images/Avatar.jpg"
import DownloadIcon from '@mui/icons-material/Download';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StyledButton from "../../../../components/StyledButton/StyledButton";


const   Hero = () =>  {
    const StyledHero = styled("div")(({theme})=> ({
        backgroundColor: theme.palette.primary.main,
        height:"100vh" 
    }))

    const StyledImg = styled("img")(()=> ({
        width: "100%",
        borderRadius: "50%"
    }))

    return (
      <>
    
        <StyledHero>
            <Container maxWidth="lg">
            <Grid container spacing={2}>
                <Grid item xs={12}  md={4}>
                <StyledImg src={Avatar} />
                </Grid>
                <Grid item xs={12} md={8}>
                    <Typography color={"primary.contrastText"}variant="h1"textAlign={"center"}>Lucas Brito</Typography>
                    <Typography color={"primary.contrastText"}variant="h2"textAlign={"center"}>Desenvolvedor FullStack</Typography>
                    <Grid container display={"flex"} justifyContent={"center"}>
                        <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}> 
                            
                        <StyledButton><DownloadIcon />
                        Download CV</StyledButton>
                        
                        </Grid>
                        <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                        <StyledButton>
                        <MarkEmailUnreadIcon />
                        Contato</StyledButton>
                        </Grid>
                    </Grid>
                   
                    
                </Grid>
                </Grid>
                </Container>
            
            </StyledHero>
      </>
    )
  }
  
  export default Hero
  