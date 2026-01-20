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
            backgroundColor: "rgba(255,255,255,0.42)",
            gap: 3,
            p:2,
            borderRadius:2,
            minHeight: "10vh"
        }}>
            <Typography sx={{fontSize: "1.1rem"}}>
                Pro zobrazení vašich světel a jejich ovládání, připojte svůj Hue bridge v nastavení, nebo kliknutím na tlačítko níže
            </Typography>
            <Button variant={"contained"} onClick={() => navigate({to: "/connect"})}>Připojit nový bridge</Button>
        </Box>

    )


}