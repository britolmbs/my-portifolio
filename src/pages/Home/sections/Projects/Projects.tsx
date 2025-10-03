import { useState } from "react";
import { Container, Grid, Typography, styled, Card, CardContent, CardActions, Button } from "@mui/material";

const Projects = () => {
    const [projects] = useState([
        {
            name: "Patisserie Nathália Valle",
            description: "O site da Patisserie Nathália Valle é uma plataforma online que exibe uma variedade de produtos de confeitaria, permitindo que os clientes explorem e façam pedidos diretamente via WhatsApp.",
            url: "https://github.com/britolmbs/patisserie",
        },
        {
            name: "Negócios Eslovenos no Brasil",
            description: "Plataforma de negócios para a comunidade eslovena no Brasil, com cards interativos que exibem informações comerciais, integração com mapa/Waze, galeria de imagens e imagem de destaque. Desenvolvida em Laravel, Vue, PHP e integrada à API do Google Maps.",
            url: "https://slovenianbusinessmap.com/",
        },
        {
            name: "BackEnd da Forasteiro Barbearia em Java",
            description: "Sistema de gestão para a barbearia O Forasteiro, com agendamento de serviços, dashboard financeiro e autenticação de usuários. Desenvolvido em Java com Spring Boot, Spring Web, Spring Data JPA, PostgreSQL, Spring Security e Lombok",
            url: "https://github.com/britolmbs/o-forasteiro",
        },
        {
            name: "O Forasteiro Barbearia",
            description: "Sistema de gestão para a barbearia O Forasteiro, com agendamento de serviços, dashboard financeiro e autenticação de usuários. Desenvolvido em TypeScript, Next.js, Express e MongoDB, o projeto visa otimizar a experiência do cliente e facilitar o gerenciamento da barbearia.",
            url: "https://github.com/britolmbs/o-forasteiro-barbearia",
        },

        {
            name: "ApoiaTec",
            description: "Desenvolvimento de um MicroSaaS para técnicos, que facilita a gestão de pagamentos utilizando Next.js, Stripe, TypeScript e outras tecnologias modernas. O site foi projetado para destacar os serviços oferecidos, priorizando performance, design moderno e uma navegação intuitiva, proporcionando uma experiência excepcional para os clientes.",
            url: "https://github.com/britolmbs/apoiaTec",
        },
        {
            name: "Centro Medico Santa Cruz",
            description: "Desenvolvimento de um sistema de agendamento online para o Centro Médico Santa Cruz, que otimiza o processo de marcação de consultas de forma simples e eficiente. O projeto foi desenvolvido com Node.js, Next.js, React, Tailwind CSS, Zod e Next-Auth, garantindo autenticação segura, validação robusta, design moderno e uma navegação intuitiva para os usuários.",
            url: "https://github.com/britolmbs/clinica-santacruz",
        },

        {
            name: "Toca dos Bichos",
            description: "Desenvolvimento uma landing page para o pet shop Toca do Bichos, localizado em Santa Cruz (RJ), utilizando Next.js e a biblioteca ui.shadcn. O site foi projetado para destacar os serviços oferecidos, com foco em performance, design moderno e navegação intuitiva, a fim de proporcionar a melhor experiência para os clientes.",
            url: "https://github.com/britolmbs/toca-dos-bichos",
        },
        {
            name: "Ferdrone",
            description: "Desenvolvimento do site para Ferdrone Imagens Aéreas, plataforma web moderna e responsiva, tecnologias como Next.js, Tailwind CSS.",
            url: "https://github.com/britolmbs/ferdrone",
        },
        {
            name: "API_REST JavaScript",
            description: "Desenvolvimento da API REST em JavaScript para gestão escolar, permitindo a interação entre usuários (administradores e educadores) e alunos. Utilizei Express para gerenciar rotas, Sequelize como ORM para interagir com o banco de dados MariaDB, e implementei bcryptjs para criptografia de senhas, garantindo a segurança dos dados. A autenticação e autorização são gerenciadas com jsonwebtoken, enquanto dotenv facilita a configuração da aplicação com variáveis de ambiente.",
            url: "https://github.com/britolmbs/api_rest",
        },

        {
            name: "Centro Médico João XXIII",
            description: "Desenvolvimento do site para o Centro Médico João XXIII, uma plataforma web moderna e responsiva utilizando tecnologias como HTML, CSS, JavaScript, Node.js, React e Material UI, Swiper e DOM.",
            url: "https://github.com/britolmbs/centro-medico",
        },
        
        {
            name: "My Money App",
            description: "My Money App é uma solução moderna desenvolvida com React, React Hooks, Redux, MongoDB, Axios e Webpack para gerenciar facilmente gastos e recebimentos. Simples, rápido e funcional, otimiza sua produtividade ao proporcionar controle total sobre suas finanças.",
            url: "https://github.com/britolmbs/my-money-app",
        },
        {
            name: "Academia BodyLab",
            description: "Criação de Site da Academia BodyLabutilizando tecnologias como HTML, CSS, Bootstrap, NodeJS e MySQL.",
            url: "https://github.com/britolmbs/academia-bodylab",
        },
        
        {
            name: "Marcondes Veículos",
            description: "O Projeto de Criação de Site para a Concessionária Marcondes Veículos visa desenvolver uma plataforma web moderna e responsiva utilizando tecnologias como HTML, CSS, JavaScript, Node.js, React e Material UI.",
            url: "https://github.com/britolmbs/marcondes-veiculos",
        },
        {
            name: "Todo App",
            description: "Organize e acompanhe suas tarefas de forma eficiente com o Todo, um site desenvolvido com tecnologias de ponta como React, React Hooks, Redux, MongoDB, Axios e Webpack. Simples, rápido e funcional para otimizar sua produtividade.",
            url: "https://github.com/britolmbs/todo-app",
        },

        {
            name: "Fundamentos NextJs",
            description: "Este é um projeto de estudos focado nos fundamentos do Next.js, um dos frameworks mais poderosos para o desenvolvimento web moderno. A aplicação utiliza tecnologias como React, Hooks, Tailwind CSS, Firebase.",
            url: "https://github.com/britolmbs/fundamentos-nextjs",
        },

        {
            name: "projeto formulario",
            description: "Este projeto visa desenvolver um sistema de gestão de clientes para uma empresa que está informatizando seu setor. O sistema oferece uma interface amigável e responsiva para adicionar, consultar e gerenciar informações de clientes. As funcionalidades principais incluem.",
            url: "https://github.com/britolmbs/projeto-formulario",
        },
        {
            name: "LionsSeminovos",
            description: "TESTE PRÁTICO Desenvolvedor front-end Este será o teste prático utilizado pela Lions Seminovos para te avaliar tecnicamente como desenvolvedor front-end.",
            url: "https://github.com/britolmbs/LionsSeminovos",
        },

        {
            name: "barbershop",
            description: "O projeto Sistema de Agendamento para Barbearia é uma aplicação desenvolvida em Java utilizando o framework Spring, com o objetivo de otimizar e gerenciar de forma eficiente o agendamento de serviços em uma barbearia. Este sistema oferece uma interface amigável e intuitiva, permitindo que clientes e funcionários interajam de maneira simples e eficaz.",
            url: "https://github.com/britolmbs/barbershop",
        },
        {
            name: "Projeto de cartão",
            description: "Este projeto consiste em um sistema de gestão de cartões de crédito integrado a uma plataforma de mensageria, desenvolvido com Java, Spring Boot, Docker e RabbitMQ.",
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
