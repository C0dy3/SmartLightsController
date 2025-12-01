import {
    Box,
    Button,
    AppBar,
    Container,
    Toolbar,
    Typography,
    IconButton,
    Menu, Divider
} from "@mui/material";
import {useNavigate} from "@tanstack/react-router";


const pages = ["lights","groups","settings","about"]



export function NavBar() {

    const navigate = useNavigate();


    const handleOnPageChange = (page : string) => {
        navigate({to: `/${page}`})
    };

    const handleOnPageSelect = () => {
        
    }



    return (
        <AppBar position="static" color={"inherit"} sx={{backgroundColor: "rgba(255,255,255,0.37)"}}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 5,
                            display: { xs: 'none', md: 'flex' },
                            fontFamily: 'monospace',
                            fontWeight: 800,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: "none",
                        }}
                    >
                        HUE CONTROL
                    </Typography>
                    
                    
                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            //onClick={handleOpenNavMenu}
                            color="inherit"
                        >

                        </IconButton>
                        <Menu
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}

                            sx={{display: {xs: 'block', md: 'none'}}} open={false}                        >

                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontFamily: 'monospace',
                            fontWeight: 700,
                            letterSpacing: '.3rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                    </Typography>
                    <Divider orientation={"vertical"}/>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex', alignItems: 'center' } }}>
                        {pages.map((page) => (
                            <Button sx={{}} onClick={() => handleOnPageChange(page)} >
                                <Typography sx={{color: "black"}}>
                                    {page}
                                </Typography>
                            </Button>
                            ))}
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                        
                        <Menu
                            //sx={{ mt: '45px' }}
                            id="menu-appbar"
                            anchorEl={undefined}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            //open={Boolean(anchorElUser)}
                            //onClose={handleCloseUserMenu}
                        >

                        </Menu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}


