import React, { useState } from "react";
import { Container, Grid, Typography, styled, Card, CardContent, CardActions, Button } from "@mui/material";

// Removido Box das importações, pois não está sendo utilizado

const Projects = () => {
    const [projects] = useState([
        {
            name: "Patisserie Nathália Valle",
            description: "O site da Patisserie Nathália Valle é uma plataforma online que exibe uma variedade de produtos de confeitaria, permitindo que os clientes explorem e façam pedidos diretamente via WhatsApp.",
            url: "https://github.com/britolmbs/patisserie",
        },
        {
            name: "Projeto de cartão",
            description: "Este projeto consiste em um sistema de gestão de cartões de crédito integrado a uma plataforma de mensageria, desenvolvido com Java, Spring Boot, Docker e RemmeBBQT.",
            url: "https://github.com/britolmbs/projetocartao",
        },
        {
            name: "Ms Autenticação",
            description: "Este é um microserviço de autenticação simples utilizando JSON Web Tokens (JWT), desenvolvido em Node.js com Express.",
            url: "https://github.com/britolmbs/ms-autenticacao",
        },
        {
            name: "API Rest com MongoDB",
            description: "Este projeto é uma API RESTful desenvolvida em Java com o framework Spring Boot e utiliza MongoDB como banco de dados. A API oferece operações básicas de CRUD (Create, Read, Update, Delete) para gerenciar recursos relacionados a usuários.",
            url: "https://github.com/britolmbs/apirestmongo",
        },
        {
            name: "Web Service com PostgreSQL ",
            description: "Este projeto implementa um web service RESTful utilizando Spring Boot com integração ao banco de dados PostgreSQL.",
            url: "https://github.com/britolmbs/projetowebservice",
        },
        {
            name: "Restarante",
            description: "Este projeto implementa um sistema web simples para buscar e visualizar informações de restaurantes utilizando React.js e a API do Google Places.",
            url: "https://github.com/britolmbs/restaurante",
        },
        {
            name: "Git App",
            description: "Este projeto é uma aplicação web desenvolvida em React que mostra os repositórios do GitHub de um usuário e a quantidade de estrelas que cada um possui, em um formato semelhante ao GitHub.",
            url: "https://github.com/britolmbs/git-app",
        },
    ]);

    const StyledProjects = styled("div")(({ theme }) => ({
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(8, 0),
        color: theme.palette.text.primary,
    }));

    const StyledCard = styled(Card)(({ theme }) => ({
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        border: `1px solid ${theme.palette.primary.main}`,
        '&:hover': {
            boxShadow: `0 0 11px ${theme.palette.primary.main}`,
        },
    }));

    const StyledButton = styled(Button)(({ theme }) => ({
        color: theme.palette.primary.contrastText,
        backgroundColor: theme.palette.primary.main,
        '&:hover': {
            backgroundColor: theme.palette.primary.dark,
        },
    }));

    const handleButtonClick = (url: string) => {
        window.open(url, '_blank'); // Abre o link em uma nova aba
    };

    return (
        <StyledProjects>
            <Container maxWidth="lg">
                <Typography variant="h2" align="center" gutterBottom>Projetos</Typography>
                <Grid container spacing={4}>
                    {projects.map((project, index) => (
                        <Grid item xs={12} sm={6} md={4} key={index}>
                            <StyledCard>
                                <CardContent>
                                    <Typography variant="h5" gutterBottom>{project.name}</Typography>
                                    <Typography variant="body2" color="textSecondary">{project.description}</Typography>
                                </CardContent>
                                <CardActions>
                                    <StyledButton size="small" onClick={() => handleButtonClick(project.url)}>
                                        Ver no GitHub
                                    </StyledButton>
                                </CardActions>
                            </StyledCard>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </StyledProjects>
    );
};

export default Projects;
