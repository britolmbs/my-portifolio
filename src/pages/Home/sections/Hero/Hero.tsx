import { Box, Container, Grid, Typography, styled } from "@mui/material";
import Avatar from "../../../../assets/images/Avatar.jpg";
import DownloadIcon from '@mui/icons-material/Download';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import StyledButton from "../../../../components/StyledButton/StyledButton";
import { AnimatedBackground } from "../../../../components/AnimateBackground/AnimateBackground";

const Hero = () => {
    const StyledHero = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.primary.main,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        paddingTop: theme.spacing(2),
        [theme.breakpoints.up('md')]: { //para PC
            paddingTop: "0",
            flexDirection: "row",
        }
    }));

    const StyledImg = styled("img")(({ theme }) => ({
        width: "100%",
        maxWidth: "300px", // Aumentar o maxWidth para telas maiores
        borderRadius: "50%",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        marginBottom: theme.spacing(2),
        [theme.breakpoints.up('md')]: {
            maxWidth: "400px", // Ajuste adicional para desktops
            marginBottom: 0,
        }
    }));

    const handleDownloadCV = () => {
        const link = document.createElement('a');
        link.href = '../assets/cv/Lucasbrito.pdf'; // Atualize o caminho do PDF
        link.download = 'Lucas_Brito_CV.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    const handleContact = () => {
        alert("E-mail de contato: britolmbs@hotmail.com");
    };

    return (
        <StyledHero>
            <Container maxWidth="lg">
                <Grid container spacing={2} justifyContent="center" alignItems="center">
                    <Grid item xs={12} md={5} style={{ display: 'flex', justifyContent: 'center' }}>
                        <Box position="relative">
                            <Box position="absolute" width={"150%"} top={-100} right={0}>
                                <AnimatedBackground />
                            </Box>
                            <Box position="relative" textAlign={"center"}>
                                <StyledImg src={Avatar} />
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item xs={12} md={7} container direction="column" alignItems="center">
                        <Typography color={"primary.contrastText"} variant="h1" textAlign={"center"} pb={2}>Lucas Brito</Typography>
                        <Typography color={"primary.contrastText"} variant="h2" textAlign={"center"}>Desenvolvedor FullStack</Typography>
                        <Grid container display={"flex"} justifyContent={"center"} spacing={3} pt={3}>
                            <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                <StyledButton onClick={handleDownloadCV}>
                                    <DownloadIcon />
                                    <Typography>Download CV</Typography>
                                </StyledButton>
                            </Grid>
                            <Grid item xs={12} md={4} display={"flex"} justifyContent={"center"}>
                                <StyledButton onClick={handleContact}>
                                    <MarkEmailUnreadIcon />
                                    <Typography>Contato</Typography>
                                </StyledButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledHero>
    );
};

export default Hero;
