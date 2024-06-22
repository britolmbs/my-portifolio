import { AppBar, MenuItem, Toolbar, styled } from "@mui/material"

const   NavBar= () =>  {

    const StyledToobar = styled(Toolbar)(({themer}) => ({
        display: "flex",
        justifyContent: "space-evenly"
    }))

  return (
    <>
     <AppBar position="absolute">
        <StyledToobar>
            <MenuItem>About</MenuItem>
            <MenuItem>Projects</MenuItem>
        </StyledToobar>

     </AppBar>
    </>
  )
}

export default NavBar
