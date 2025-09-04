
import { useNavigate } from "@tanstack/react-router";
import {Box, Button, Container, Stack, Typography} from "@mui/material";



export function ConnectPage() {
    const navigate = useNavigate();

    const handleConnect = () => {
        
        navigate({ to: "/lights" });
    };

    return (

        <Container
            sx={{
                position: "relative",       
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",   
                alignItems: "center",       
                height: "87vh",             
                width: "100%",              
                overflow: "hidden"          
            }}
        >
            <Stack
                spacing={3}
                sx={{ position: 'relative', 
                    zIndex: 1, 
                    height: "100%", 
                    justifyContent: "center", 
                    allignItems: "center" }} // 
            >
                <Typography variant="h4" gutterBottom sx={{alignSelf: 'center'}}>
                    Vítej v Hue Control 🚀
                </Typography>
                <Typography variant="body1" sx={{alignSelf: 'center'}}>
                    Nejprve se připoj k Philips Hue Bridge a získej seznam tvých světel.
                </Typography>
                <Typography sx={{alignSelf: 'center'}}>
                    Aby jsi mohl svůj bridge připojit, prosím klikni na tlačítko na něm po dobu alespoň 3 sekund, poté stiskni Připojit Bridge
                </Typography>
                <Box sx={{paddingTop: "5rem", alignSelf: "center"}}>
                <Button variant="contained" size="large" onClick={handleConnect} sx={{borderRadius: 4}}>
                    Připojit Bridge
                </Button>
                </Box>
            </Stack>
        </Container>
    );
}
    
    
    
    
    
    
