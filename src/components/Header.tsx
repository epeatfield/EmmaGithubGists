import React from 'react';
import { Container } from '@material-ui/core';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import links from './../constants/links.json';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import {Link} from 'react-router-dom';

const NavBarLinks = links.links;

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

const Header = () => {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <Container>
                        <IconButton className={classes.menuButton} edge="start" color="inherit" aria-label="menu" onClick={handleClick}>
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
                                <Link to={path} key={title} style={{ textDecoration: 'none' }}>
                                    <MenuItem button onClick={handleClose}>
                                        <p className='menu-button'>{title}</p>
                                    </MenuItem>
                                </Link>
                            ))}
                        </Menu>
                    </Container>
                    <Typography variant="h6" className={classes.title}>
                        Find Your Favorite Github Gists!
                    </Typography>
                    {/* FUTURE WORK: Add Github login  */}
                    {/* <Button color="inherit" onClick={() => console.log("Hi")}>Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header;
