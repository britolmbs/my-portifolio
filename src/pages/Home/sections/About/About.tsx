import { Box, Container, Typography, styled } from "@mui/material";
import { FaJava, FaReact, FaNodeJs } from "react-icons/fa";
import { SiSpringboot, SiAngular, SiJavascript } from "react-icons/si";

const About = () => {
    const StyledAbout = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0),
        color: theme.palette.text.primary,
    }));

    const IconContainer = styled(Box)(({ theme }) => ({
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        gap: theme.spacing(4),
        marginTop: theme.spacing(4),
    }));

    const TechIcon = styled(Box)(({ theme }) => ({
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: "3rem",
        color: theme.palette.primary.main,
        '& svg': {
            fontSize: "3rem",
        },
        '&:hover': {
            color: theme.palette.primary.dark,
        },
    }));

    const techs = [
        { icon: FaJava, label: "Java" },
        { icon: SiSpringboot, label: "Spring Boot" },
        // { icon: SiMaven, label: "Maven" }, // Removido temporariamente
        { icon: SiAngular, label: "Angular" },
        { icon: SiJavascript, label: "JavaScript" },
        { icon: FaReact, label: "React" },
        { icon: FaNodeJs, label: "Node.js" },
    ];

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>Sobre Mim</Typography>
                <Typography variant="body1" align="center" paragraph>
                    Sou um desenvolvedor FullStack apaixonado por tecnologia e programação. Aqui estão algumas das tecnologias com as quais trabalho:
                </Typography>
                <IconContainer>
                    {techs.map((tech, index) => (
                        <TechIcon key={index}>
                            <tech.icon />
                            <Typography variant="body2" align="center">{tech.label}</Typography>
                        </TechIcon>
                    ))}
                </IconContainer>
            </Container>
        </StyledAbout>
    );
};

export default About;
