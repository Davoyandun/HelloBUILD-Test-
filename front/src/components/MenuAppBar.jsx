import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";

import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";

export default function MenuAppBar({text, text1, URL1, text2, URL2, text3, URL3}) {
  const [auth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const func1=(e)=>{

    setAnchorEl(null);
    window.location.href= URL1

  }
  const func2=()=>{
   
    setAnchorEl(null);
    window.location.href= URL2

  }
  const func3=(e)=>{
 
    setAnchorEl(null);
    window.location.href= URL3

  }

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 50 }}
          >
           {/* cambiar por img  */}</IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {text}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={func1}>{text1}</MenuItem>
                <MenuItem onClick={func2}>{text2}</MenuItem>
                <MenuItem onClick={func3}>{text3}</MenuItem>
                <MenuItem ><a href='/profile/favorites'>Favorites</a></MenuItem>
             
               
       
              </Menu>
            </div>
          )}

          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
