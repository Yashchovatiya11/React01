import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import { Box, Toolbar, List, CssBaseline, Typography, Divider, IconButton, ListItem, ListItemButton, ListItemText, ListItemIcon } from '@mui/material/';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import PersonPinIcon from '@mui/icons-material/PersonPin';
import WidgetsIcon from '@mui/icons-material/Widgets';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import FileOpenIcon from '@mui/icons-material/FileOpen';
import PieChartIcon from '@mui/icons-material/PieChart';

// for drawer 
import ListSubheader from '@mui/material/ListSubheader';
// import List from '@mui/material/List';
// import ListItemButton from '@mui/material/ListItemButton';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
// import InboxIcon from '@mui/icons-material/MoveToInbox';
import DraftsIcon from '@mui/icons-material/Drafts';
import SendIcon from '@mui/icons-material/Send';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import StarBorder from '@mui/icons-material/StarBorder';
import { Timeline } from '@mui/icons-material';


import { alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircle from '@mui/icons-material/AccountCircle';
// import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';




const drawerWidth = 290;

const openedMixin = (theme) => ({
     width: drawerWidth,
     transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
     }),
     overflowX: 'hidden',
});

const closedMixin = (theme) => ({
     transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
     }),
     overflowX: 'hidden',
     width: `calc(${theme.spacing(7)} + 1px)`,
     [theme.breakpoints.up('sm')]: {
          width: `calc(${theme.spacing(8)} + 1px)`,
     },
});

const DrawerHeader = styled('div')(({ theme }) => ({
     display: 'flex',
     alignItems: 'center',
     justifyContent: 'flex-end',
     padding: theme.spacing(0, 1),
     // necessary for content to be below app bar
     ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
     shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
     zIndex: theme.zIndex.drawer + 1,
     transition: theme.transitions.create(['width', 'margin'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
     }),
     ...(open && {
          marginLeft: drawerWidth,
          width: `calc(100% - ${drawerWidth}px)`,
          transition: theme.transitions.create(['width', 'margin'], {
               easing: theme.transitions.easing.sharp,
               duration: theme.transitions.duration.enteringScreen,
          }),
     }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
     ({ theme, open }) => ({
          width: drawerWidth,
          flexShrink: 0,
          whiteSpace: 'nowrap',
          boxSizing: 'border-box',
          ...(open && {
               ...openedMixin(theme),
               '& .MuiDrawer-paper': openedMixin(theme),
          }),
          ...(!open && {
               ...closedMixin(theme),
               '& .MuiDrawer-paper': closedMixin(theme),
          }),
     }),
);





function Sideico() {

     const theme = useTheme();
     const [open, setOpen] = React.useState(true);

     const handleDrawerOpen = () => {
          setOpen(true);
     };

     const handleDrawerClose = () => {
          setOpen(false);
     };


     const [menudraw, setmenudraw] = React.useState(false);

     const handleClick1 = () => {
          setmenudraw(!menudraw);
     };

     const [layoptin, setlayoptin] = React.useState(false);

     const handleClick2 = () => {
          setlayoptin(!layoptin);
     };

     const [chart, setchart] = React.useState(false);

     const handleClick3 = () => {
          setchart(!chart);
     };

     const [form, setform] = React.useState(false);

     const handleClick4 = () => {
          setform(!form);
     };

     const [uiele, setuiele] = React.useState(false);

     const handleClick5 = () => {
          setuiele(!uiele);
     };
     return (
          <div>
               <Box sx={{ display: 'flex' }}>
                    <CssBaseline />
                    <AppBar position="fixed" open={open}>
                         <Toolbar>
                              <IconButton
                                   color="inherit"
                                   aria-label="open drawer"
                                   onClick={handleDrawerOpen}
                                   edge="start"
                                   sx={{
                                        marginRight: 5,
                                        ...(open && { display: 'none' }),
                                   }}
                              >
                                   <MenuIcon />
                              </IconButton>
                              <Typography variant="h6" noWrap component="div">
                                   Mini variant drawer
                              </Typography>

                              <Box sx={{ flexGrow: 1 }} />
                              <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
                                   <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                                        <Badge badgeContent={4} color="error">
                                             <MailIcon />
                                        </Badge>
                                   </IconButton>
                                   <IconButton
                                        size="large"
                                        aria-label="show 17 new notifications"
                                        color="inherit"
                                   >
                                        <Badge badgeContent={17} color="error">
                                             <NotificationsIcon />
                                        </Badge>
                                   </IconButton>
                                   <IconButton
                                        size="large"
                                        edge="end"
                                        aria-label="account of current user"
                                        aria-controls={menuId}
                                        aria-haspopup="true"
                                        onClick={handleProfileMenuOpen}
                                        color="inherit"
                                   >
                                        <AccountCircle />
                                   </IconButton>
                              </Box>
                              <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                                   <IconButton
                                        size="large"
                                        aria-label="show more"
                                        aria-controls={mobileMenuId}
                                        aria-haspopup="true"
                                        onClick={handleMobileMenuOpen}
                                        color="inherit"
                                   >
                                        <MoreIcon />
                                   </IconButton>
                              </Box>

                         </Toolbar>
                    </AppBar>
                    <Drawer variant="permanent" open={open}>
                         <DrawerHeader>
                              <div className='d-flex pe-4'>
                                   <span>< AdminPanelSettingsIcon className='fs-3'></AdminPanelSettingsIcon></span>
                                   <h4>AdminLTE 3</h4>
                              </div>
                              <IconButton onClick={handleDrawerClose}>
                                   {theme.direction === 'rtl' ? <MenuIcon /> : <MenuIcon />}
                              </IconButton>
                         </DrawerHeader>
                         <Divider />
                         <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader" className='d-flex ps-3'>
                              <ListItemIcon>
                                   <PersonPinIcon className='ms-3' />
                              </ListItemIcon>
                              <ListItemText> Alexander Pierce</ListItemText>
                         </List>
                         <Divider></Divider>
                         <List
                              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader">

                              <ListItemButton onClick={handleClick1} sx={{ pl: 4 }}>
                                   <ListItemIcon>
                                        <InboxIcon />
                                   </ListItemIcon>
                                   <ListItemText primary="DashBoard" />
                                   {menudraw ? <ExpandLess /> : <ExpandMore />}
                              </ListItemButton>
                              <Collapse in={menudraw} timeout="auto" unmountOnExit>
                                   <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="DashBoard 1" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="DashBoard 2" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="DashBoard 3" />
                                        </ListItemButton>
                                   </List>
                              </Collapse>
                         </List>
                         {/* <Divider /> */}
                         <List>
                              <ListItemButton sx={{ pl: 4 }}>
                                   <ListItemIcon>
                                        <WidgetsIcon />
                                   </ListItemIcon>
                                   <ListItemText primary="Widgets" />
                              </ListItemButton>
                         </List>
                         <List
                              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader">

                              <ListItemButton onClick={handleClick2} sx={{ pl: 4 }}>
                                   <ListItemIcon>
                                        <FileOpenIcon />
                                   </ListItemIcon>
                                   <ListItemText primary="Layout Options" />
                                   {layoptin ? <ExpandLess /> : <ExpandMore />}
                              </ListItemButton>
                              <Collapse in={layoptin} timeout="auto" unmountOnExit>
                                   <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Top Navigation" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Top Navigation + Sidebar" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Boxed" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Fixed Sidebar" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Sidebar + custom"></ListItemText>
                                        </ListItemButton>
                                   </List>
                                   <List subheader={
                                        <ListSubheader component="div" id="nested-list-subheader">
                                             Area
                                        </ListSubheader>
                                   }>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Fixed navbar" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Fixed Footer" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Colasped Sidebar"></ListItemText>
                                        </ListItemButton>
                                   </List>
                              </Collapse>
                         </List>
                         <List
                              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader">

                              <ListItemButton onClick={handleClick3} sx={{ pl: 4 }}>
                                   <ListItemIcon>
                                        <PieChartIcon />
                                   </ListItemIcon>
                                   <ListItemText primary="Charts" />
                                   {chart ? <ExpandLess /> : <ExpandMore />}
                              </ListItemButton>
                              <Collapse in={chart} timeout="auto" unmountOnExit>
                                   <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="ChartJS" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Float" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Inline" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="uPlot" />
                                        </ListItemButton>
                                   </List>
                              </Collapse>
                         </List>

                         <List
                              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader">

                              <ListItemButton onClick={handleClick5} sx={{ pl: 4 }}>
                                   <ListItemIcon>
                                        <InboxIcon />
                                   </ListItemIcon>
                                   <ListItemText primary="UI Element" />
                                   {uiele ? <ExpandLess /> : <ExpandMore />}
                              </ListItemButton>
                              <Collapse in={uiele} timeout="auto" unmountOnExit>
                                   <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="General" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Icons" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Buttons" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Sliders" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Models & Alerts" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Models & Tabs" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Timeline" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Ribbons" />
                                        </ListItemButton>
                                   </List>
                              </Collapse>
                         </List>

                         <List
                              sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                              component="nav"
                              aria-labelledby="nested-list-subheader">

                              <ListItemButton onClick={handleClick4} sx={{ pl: 4 }}>
                                   <ListItemIcon>
                                        <InboxIcon />
                                   </ListItemIcon>
                                   <ListItemText primary="Forms" />
                                   {form ? <ExpandLess /> : <ExpandMore />}
                              </ListItemButton>
                              <Collapse in={form} timeout="auto" unmountOnExit>
                                   <List component="div" disablePadding>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="General Element" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Advanced Element" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Editors" />
                                        </ListItemButton>
                                        <ListItemButton sx={{ pl: 4 }}>
                                             <ListItemIcon>
                                                  <RadioButtonUncheckedIcon />
                                             </ListItemIcon>
                                             <ListItemText primary="Validation" />
                                        </ListItemButton>
                                   </List>
                              </Collapse>
                         </List>
                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                         <DrawerHeader />
                         <Typography paragraph>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                              tempor incididunt ut labore et dolore magna aliqua. Rhoncus dolor purus non
                              enim praesent elementum facilisis leo vel. Risus at ultrices mi tempus
                              imperdiet. Semper risus in hendrerit gravida rutrum quisque non tellus.
                              Convallis convallis tellus id interdum velit laoreet id donec ultrices.
                              Odio morbi quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                              adipiscing bibendum est ultricies integer quis. Cursus euismod quis viverra
                              nibh cras. Metus vulputate eu scelerisque felis imperdiet proin fermentum
                              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt lobortis
                              feugiat vivamus at augue. At augue eget arcu dictum varius duis at
                              consectetur lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                              sapien faucibus et molestie ac.
                         </Typography>
                         <Typography paragraph>
                              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est ullamcorper
                              eget nulla facilisi etiam dignissim diam. Pulvinar elementum integer enim
                              neque volutpat ac tincidunt. Ornare suspendisse sed nisi lacus sed viverra
                              tellus. Purus sit amet volutpat consequat mauris. Elementum eu facilisis
                              sed odio morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                              tincidunt ornare massa eget egestas purus viverra accumsan in. In hendrerit
                              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam aliquam sem
                              et tortor. Habitant morbi tristique senectus et. Adipiscing elit duis
                              tristique sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                              eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
                              posuere sollicitudin aliquam ultrices sagittis orci a.
                         </Typography>
                    </Box>
               </Box>
          </div>
     )
}

export default Sideico
