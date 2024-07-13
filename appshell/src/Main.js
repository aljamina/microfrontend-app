import React from "react";
import './App.scss';
import {Link, Routes, Route} from "react-router-dom";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from "@material-ui/core/CssBaseline";
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ViewListIcon from '@material-ui/icons/ViewList';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Catalogue = React.lazy(() => import("Catalogue/Catalogue"));
const SignIn = React.lazy(() => import("SignIn/SignIn"));
const MyAccount = React.lazy(() => import("MyAccount/MyAccount"));

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
      content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: -drawerWidth,
      },
      contentShift: {
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
  }));

const Main = () => {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    return (
        <div className="root">
            <CssBaseline />
            <AppBar position="fixed">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        onClick={() => setOpen(true)}
                        edge="start"
                        className={clsx(open && "hide")}>
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" noWrap>
                        My shop
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                className="drawer"
                variant="persistent"
                anchor="left"
                open={open}
                classes={{paper: "drawer-paper",}}>
                <div className="drawer-header">
                    <IconButton onClick={() => setOpen(false)}>
                        <ChevronLeftIcon />
                    </IconButton>
                </div>
                <Divider />
                <List>
                    {!window.sessionStorage.getItem("token") &&
                        <ListItem button key="SignIn">
                            <ListItemIcon><ExitToAppIcon/></ListItemIcon>
                            <Link to="/"><ListItemText primary="Sign In" /></Link>
                        </ListItem> }
                    <ListItem button key="Catalogue">
                        <ListItemIcon><ViewListIcon/></ListItemIcon>
                        <Link to="/shop"><ListItemText primary="Catalogue" /></Link>
                    </ListItem>
                    <ListItem button key="My Account">
                        <ListItemIcon><AccountCircleIcon/></ListItemIcon>
                        <Link to="/myaccount"><ListItemText primary="My Account" /></Link>
                    </ListItem>
                </List>
            </Drawer>
            <main className={clsx(classes.content, {
                [classes.contentShift]: open,
            })}>
                <div className="drawer-header" />
                <Routes>
                    <Route
                        path="/"
                        element={
                            <React.Suspense fallback="Loading...">
                                {window.sessionStorage.getItem("token") ?
                                    <Catalogue title='Catalogue'/> :
                                    <SignIn title='SignIn' />
                                }
                            </React.Suspense> }
                      />
                      <Route path="/shop/*" element={<React.Suspense fallback="Loading..."><Catalogue title='Catalogue' /> </React.Suspense>}/>
                      <Route path="/myaccount" element={<React.Suspense fallback="Loading..."><MyAccount title='MyAccount' /></React.Suspense> } />
                </Routes>
            </main>
        </div>
    )
}

export default Main;
