import { AppBar, MenuItem, Toolbar, styled } from "@mui/material";
import React from "react";

const NavBar = () => {
    // Removido o uso do tema, pois não está sendo utilizado
    const StyledToolbar = styled(Toolbar)({
        display: "flex",
        justifyContent: "space-evenly",
    });

    const handleMenuItemClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
        event.preventDefault(); // Impede o comportamento padrão de navegação do link
        const targetId = event.currentTarget.getAttribute("href")?.substring(1) || ''; // Usa valor padrão para evitar undefined
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            const offset = 64; // Ajuste para o deslocamento do AppBar
            const elementPosition = targetElement.offsetTop - offset;
            window.scrollTo({
                top: elementPosition,
                behavior: "smooth", // Rolagem suave para o elemento de destino
            });
        }
    };

    return (
        <AppBar position="fixed">
            <StyledToolbar>
                <MenuItem href="#about" onClick={handleMenuItemClick}>
                    Sobre Mim
                </MenuItem>
                <MenuItem href="#projects" onClick={handleMenuItemClick}>
                    Projetos
                </MenuItem>
            </StyledToolbar>
        </AppBar>
    );
};

export default NavBar;
