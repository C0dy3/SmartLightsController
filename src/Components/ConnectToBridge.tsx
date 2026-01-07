import {Box, Typography, Button} from "@mui/material"
import {useNavigate} from "@tanstack/react-router";


export function ConnectToBridge(){

    const navigate = useNavigate();

    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "white",
        }}>
            <Typography sx={{fontSize: "1rem"}}>
                Pro zobrazení vašich světel, připojte svůj Hue bridge v nastavení, nebo kliknutím na tlačítko níže
            </Typography>
            <Button variant={"contained"} onClick={() => navigate({to: "/connect"})}>Připojit nový bridge</Button>
        </Box>

    )


}