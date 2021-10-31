import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";

export default function NavBar() {
    return (
    <Box sx={{ flexGrow: 1 }}>
    <AppBar style={{height:"50px"}} position="static">
        <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            <Link to="/"> Logo </Link>
            </Typography>
            <div>
                <Button color="inherit"> <Link to="/contacts">Contact list</Link></Button>
                <Button color="inherit"> <Link to="/addContact">Add contact</Link></Button>
            </div>
        </Toolbar>
    </AppBar>
    </Box>
);
}