import React from "react";
import { ButtonGroup } from "@mui/material";
import { Button } from "@mui/material";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { BrowserRouter, Route, Link } from "react-router-dom";

const theme = createTheme({
    typography: {
        fontFamily: 'Georgia',
    },
});

function Header() {
    return(
        <div style={{ display: 'flex', justifyContent: 'center', paddingTop: 15 }}>
            <ThemeProvider theme={theme}>
                <ButtonGroup variant="contained" aria-label="outlined primary button group" size="large" >
                    <Link to="/">
                        <Button style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50}}>Home</Button>
                    </Link>
                    <Link to="/data">
                        <Button style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50}}>API Data</Button>
                    </Link>
                    <Link to="/about">
                        <Button style={{ paddingTop: 10, paddingBottom: 10, paddingLeft: 50, paddingRight: 50}}>About</Button>
                    </Link>
                </ButtonGroup>
            </ThemeProvider>
        </div>
    );
}

export default Header;