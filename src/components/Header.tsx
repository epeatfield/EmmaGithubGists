import React from 'react';
import { Container } from '@material-ui/core';
import links from './../constants/links.json';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

const NavBarLinks = links.links;

const Header = () => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className='nav-bar'>
            <AppBar position="static">
                <Toolbar>
                    <Container>
                        <IconButton edge="start" color="inherit" aria-label="menu" className='menu-icon' onClick={handleClick}>
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="simple-menu"
                            anchorEl={anchorEl}
                            keepMounted
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                            >
                            {NavBarLinks.map(({ title, path }) => (
                                <Link to={path} key={title}>
                                    <MenuItem button>
                                        <p className='menu-button'>{title}</p>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Container>
                    <Typography variant="h6" className='main-title'>
                        Find Your Favorite Github Gists!
                    </Typography>
                    <Button color="inherit" onClick={() => console.log("Hi")}>Login</Button>
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
