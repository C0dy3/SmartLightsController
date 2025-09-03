
import { useNavigate } from "@tanstack/react-router";
import {Button, Container, Stack, Typography} from "@mui/material";

export function ConnectPage() {
    const navigate = useNavigate();

    const handleConnect = () => {
        // tady později vyřešíš hledání bridge a POST /api
        navigate({ to: "/lights" });
    };

    return (
        <Container maxWidth="sm" sx={{ textAlign: "center", mt: 10 }}>
            <Stack spacing={3}>
                <Typography variant="h4" gutterBottom>
                    Vítej v Hue Control 🚀
                </Typography>
                <Typography variant="body1">
                    Nejprve se připoj k Philips Hue Bridge a získáme seznam tvých světel.
                </Typography>
                <Typography>
                    Aby jsi mohl svůj bridge připojit, prosím klikni na tlačítko na něm po dobu alespoň 3 sekund, poté stiskni Připojit Bridge
                </Typography>
                <Button variant="contained" size="large" onClick={handleConnect}>
                    Připojit Bridge
                </Button>
            </Stack>
        </Container>
    );
}
    
    
    
    
    
    
