import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Avatar, Menu, MenuItem } from '@mui/material';
import { Route, BrowserRouter, Routes, Link } from 'react-router-dom';


const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          {/* Logo/Title */}
          <nav>
            <h1>$$$ Restaurant</h1>
          </nav>
          <div style={{ display: 'flex', gap: '20px' }}>
            {/* Navigation Links */}
            <nav>
              <Link to="/home4" style={{ textDecoration: 'none', color: 'white' }}>
                Home
              </Link>
              </nav>
            <nav>
              <Link to="/abo" style={{ textDecoration: 'none', color: 'white' }}>
                About
              </Link>
            </nav>
            <nav>
              <Link to="/con" style={{ textDecoration: 'none', color: 'white' }}>
                Contact
              </Link>
            </nav>
            <nav>
              <Link to="/feed" style={{ textDecoration: 'none', color: 'white' }}>
                feed back
              </Link>
            </nav>

            {/* Avatar with Dropdown Menu */}
            <div>
              <Avatar src="/broken-image.jpg" onClick={handleMenuOpen} />
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleMenuClose}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'right',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
              >

                <MenuItem onClick={handleMenuClose}>
                  <nav>
                    <Link to='/signin5' style={{textDecoration:'none',color:'black'}}>
                  Login

                    </Link>
                  </nav>
                  </MenuItem>
                <MenuItem onClick={handleMenuClose}>
                <nav>
                    <Link to='/signup5' style={{textDecoration:'none',color:'black'}}>
                  Logout

                    </Link>
                  </nav>
                  </MenuItem>
              </Menu>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
