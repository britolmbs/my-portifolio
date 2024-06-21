import styled from "@mui/material"
import { ReactNode } from "react";
import theme from "../../theme";

interface StyledButtonProps{
    children: ReactNode
}

const   StyledButton: React.FC<StyledButtonProps>= ({children}) =>  {

    const StyledButton = styled ("button")(({theme}) => ({
        background: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        '&:hover': {
            background: theme.palette.secondary.light, 
        }
    }));
    
  return (
    <>
    <StyledButton>
        {children}
    </StyledButton>
    </>
  )
}

export default StyledButton
