import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { useTheme } from '@mui/material';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import useAuth from '../../../hooks/useAuth';


const Navigation = () => {
    const { user, logOut } = useAuth();

    const theme = useTheme()

    const useStyle = makeStyles({
        navItem: {
            color: 'white',
            textDecoration: 'none',
            marginRight: '15px'

        },
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            }
        },
        navItemContainer: {
            [theme.breakpoints.down('sm')]: {
                display: 'none !important'
            }
        },
        navLogo: {
            [theme.breakpoints.down('sm')]: {
                textAlign: 'right'
            }
        }
    })
    const { navItem, navIcon, navItemContainer, navLogo } = useStyle();

    const [state, setState] = React.useState(false);

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>
                <ListItem button>
                    <ListItemText>
                        <Link style={{ color: 'black', textDecoration: 'none', display: 'block' }} to='/home'>Home</Link>
                        <Divider></Divider>
                        <Link style={{ color: 'black', textDecoration: 'none', display: 'block' }} to='/allservices'>All Service</Link>
                        <Divider></Divider>
                        {

                            user?.email ?
                                <>
                                    <Link style={{ color: 'black', textDecoration: 'none', display: 'block' }} to='/dashboard'> <Button color="inherit">Dashboard</Button></Link>
                                    <Divider></Divider>
                                    <Button style={{ color: 'black', textDecoration: 'none', display: 'block' }} onClick={logOut}>LogOut</Button>
                                    <Divider></Divider>

                                </>
                                :
                                <Link style={{ color: 'black', textDecoration: 'none', display: 'block' }} to='/login'> Login</Link>
                        }
                        {
                            user?.email && <Button variant="contained">{user?.displayName}</Button>
                        }

                    </ListItemText>
                    <Divider></Divider>
                </ListItem>
            </List>

        </Box>
    );

    return (
        <>

            <Box sx={{ flexGrow: 1, mb: 7 }}>
                <AppBar position="fixed">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, margin: '0 auto' }}>
                            HUNTER CAR SHOP
                        </Typography>
                        <Box className={navItemContainer}>
                            <Link className={navItem} to='/home'>Home</Link>
                            <Link className={navItem} to='/allServices'>All Service</Link>

                            {
                                user?.email ?
                                    <>
                                        <Link style={{ textDecoration: 'none', color: 'white', marginLeft: '10px' }} to='/dashboard'> <Button color="inherit">Dashboard</Button></Link>
                                        <Button onClick={logOut} color="inherit">LogOut</Button>
                                    </>
                                    :
                                    <Link className={navItem} to='/login'> Login</Link>
                            }
                            {
                                user?.email && <Button variant="contained">{user?.displayName}</Button>
                            }

                        </Box>
                    </Toolbar>
                </AppBar>
            </Box>


            <div>

                <React.Fragment>
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment>
            </div>

        </>
    );
};

export default Navigation;