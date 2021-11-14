import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button } from '@mui/material';
import { NavLink } from 'react-router-dom';
import {
    BrowserRouter,
    Switch,
    Route,
    useRouteMatch
} from "react-router-dom";
import DashboardHome from '../DashboardHome/DashboardHome';
import MakeAdmin from '../Admin/MakeAdmin/MakeAdmin';
import AddProduct from '../Admin/AddProduct/AddProduct';
import ManageAllOrders from '../Admin/ManageAllOrders/ManageAllOrders';
import ManageProducts from '../Admin/ManageProducts/ManageProducts';
import useAuth from '../../hooks/useAuth'
import MyOrder from '../User/MyOrder/MyOrder';
import PayOption from '../User/PayOption/PayOption';
import UserReview from '../User/UserReview/UserReview';
import { makeStyles } from '@mui/styles';

const drawerWidth = 240;


function Dashboard(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);
    let { path, url } = useRouteMatch();
    const { admin, logOut } = useAuth();

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    // style navlink
    const useStyle = makeStyles({
        navItem: {
            display: 'block',
            textDecoration: 'none',
            textAlign: 'left'

        },
        fasHome: {
            marginRight: '30px'
        },
        fasDashboard: {
            marginRight: '10px'
        },
        fasCart: {
            marginRight: '10px'
        }
    })
    const { navItem, fasHome, fasDashboard, fasCart } = useStyle();

    const drawer = (
        <div>
            <Toolbar />
            <Divider />
            <NavLink className={navItem} to='/home'><Button color='inherit'><span className={fasHome}><i class="fas fa-home"></i></span> Home</Button></NavLink>
            <Divider />
            <NavLink className={navItem} to={`${url}`}><Button color='inherit'><span className={fasDashboard}><i class="fas fa-chart-line"></i></span>Dashboard</Button></NavLink>
            <Divider />
            {
                admin ? <Box>
                    <NavLink className={navItem} to={`${url}/manageAllOrders`}><Button color='inherit'><span className={fasCart}><i class="fas fa-cart-plus"></i></span>Manage All Orders</Button></NavLink>
                    <Divider />
                    <NavLink className={navItem} to={`${url}/manageProducts`}><Button color='inherit'><span className={fasCart}><i class="fab fa-product-hunt"></i></span>Manage Products</Button></NavLink>
                    <Divider />
                    <NavLink className={navItem} to={`${url}/addProduct`}><Button color='inherit'><span className={fasCart}><i class="fas fa-cart-plus"></i></span>Add Product</Button></NavLink>
                    <Divider />
                    <NavLink className={navItem} to={`${url}/makeAdmin`}><Button color='inherit'><span className={fasCart}><i class="fas fa-user-shield"></i></span>Make Admin</Button></NavLink>
                    <Divider />
                </Box>
                    :
                    <Box>
                        <NavLink className={navItem} to={`${url}/myOrder`}><Button color='inherit'><span className={fasCart}><i class="fas fa-cart-plus"></i></span>My Order</Button></NavLink>
                        <Divider />
                        <NavLink className={navItem} to={`${url}/reviewOption`}><Button color='inherit'><span className={fasCart}><i class="far fa-file-pdf"></i></span>Review</Button></NavLink>
                        <Divider />
                        <NavLink className={navItem} to={`${url}/payOption`}><Button color='inherit'><span className={fasCart}><i class="fab fa-cc-amazon-pay"></i></span>Pay</Button></NavLink>
                        <Divider />
                    </Box>

            }
            <Button onClick={logOut} color='inherit'><span><i class="fas fa-sign-out-alt"></i></span> LogOut</Button>

        </div>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar
                position="fixed"
                sx={{
                    width: { sm: `calc(100% - ${drawerWidth}px)` },
                    ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap component="div">
                        Dashboard
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="nav"
                sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
                aria-label="mailbox folders"
            >
                {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
                <Drawer
                    variant="permanent"
                    sx={{
                        display: { xs: 'none', sm: 'block' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                    open
                >
                    {drawer}
                </Drawer>
            </Box>
            <Box
                component="main"
                sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
            >
                <Toolbar />
                <Switch>
                    <Route exact path={path}>
                        <DashboardHome></DashboardHome>
                    </Route>
                    <Route path={`${path}/makeAdmin`}>
                        <MakeAdmin></MakeAdmin>
                    </Route>
                    <Route path={`${path}/addProduct`}>
                        <AddProduct></AddProduct>
                    </Route>
                    <Route path={`${path}/manageAllOrders`}>
                        <ManageAllOrders></ManageAllOrders>
                    </Route>
                    <Route path={`${path}/manageProducts`}>
                        <ManageProducts></ManageProducts>
                    </Route>
                    <Route path={`${path}/myOrder`}>
                        <MyOrder></MyOrder>
                    </Route>
                    <Route path={`${path}/payOption`}>
                        <PayOption></PayOption>
                    </Route>
                    <Route path={`${path}/reviewOption`}>
                        <UserReview></UserReview>
                    </Route>

                </Switch>
            </Box>
        </Box>
    );
}

Dashboard.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default Dashboard;
