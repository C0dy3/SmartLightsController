import {
    Box,
    Typography,
    Paper,
    Button

} from "@mui/material";

interface SettignsPageProps{
    settings: string[],
    handleOnSettingsChange: (settings: string[]) => void,
}

export function SettingsPage(props : SettignsPageProps){
    return(
    <Box sx={{}}>
        <Paper elevation={1} sx={{borderRadius: 2}}>
            <Typography sx={{fontSize: "2rem", p: 2}}>Settings</Typography>
            <Box sx={{
                flexGrow: 1,
                alignContent: 'top',
                gap: 1,
                justifyContent: 'space-between',
                p: 2,
                flexDirection: "column",
                minHeight: "25vh",
                minWidth:"100%"
            }}>
                {props.settings.map((setting) => (
                    <Typography sx={{color: "black"}}>
                        {setting}
                    </Typography>
                ))}
            </Box>
            <Box sx={{flexGrow: 1,
                display: "flex",
                alignItems: "center",
                p: 2,
                gap: 2}}>
                <Button variant={"contained"}>Connect to bride</Button>
                <Button variant={"contained"}>Reset light settings</Button>
                <Button variant={"contained"}>Restart hue bridge</Button>
            </Box>
        </Paper>

    </Box>
    )
}