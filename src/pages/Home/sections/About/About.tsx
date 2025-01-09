import { Box, Container, Typography, styled } from "@mui/material";
import { FaJava, FaReact, FaNodeJs, FaPhp  } from "react-icons/fa";
import { TbBrandTypescript, TbBrandNextjs  } from "react-icons/tb";
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
        { icon: SiJavascript, label: "JavaScript" },
        { icon: FaNodeJs, label: "Node.js" },
        { icon: TbBrandTypescript, label: "Typescript"},
        { icon: FaReact, label: "React" },
        { icon: TbBrandNextjs, label: "Next.js" },
        {icon : FaPhp, label: "PHP"},
        { icon: FaJava, label: "Java" },
        { icon: SiSpringboot, label: "Spring Boot" },
        // { icon: SiMaven, label: "Maven" }, // Removido temporariamente
        { icon: SiAngular, label: "Angular" },
    ];

    return (
        <StyledAbout>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>Sobre Mim</Typography>
                <Typography variant="body1" align="center" paragraph>
                Sou Lucas Messias Brito da Silva, desenvolvedor Full Stack formado em Sistemas de Informação e atualmente cursando pós-graduação em Desenvolvimento Full Stack. Tenho experiência em Java, Springboot , Typescript, ReactJS, VueJs, NodeJs, JavaScript, HTML, CSS, PHP. Aqui estão algumas das tecnologias com as quais trabalho:
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
