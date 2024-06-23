import {styled}  from "@mui/material"
import { ReactNode } from "react";

interface StyledButtonProps{
    children: ReactNode
    onClick: () => void
}

const   StyledButton: React.FC<StyledButtonProps>= ({children ,onClick}) =>  {

    const StyledButton = styled ("button")(({ theme }) => ({
        background: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignContent: "center",
        gap:"10px",
        '&:hover': {
            background: theme.palette.secondary.light, 
        }
    }));
    
  return (
    <>
    <StyledButton onClick={onClick}>
        {children}
    </StyledButton>
    </>
  )
}

export default StyledButton
