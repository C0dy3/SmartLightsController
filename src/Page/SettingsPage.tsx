import {
    Box,
    Typography,

} from "@mui/material";

interface SettignsPageProps{
    settings: string[],
    handleOnSettingsChange: (settings: string[]) => void,
}

export function SettingsPage(props : SettignsPageProps){
    return(
    <Box>
        <Typography>Settings</Typography>
        <Box sx={{
            flexGrow: 1,
            alignContent: 'center',
            flexDirection: "column"
        }}>
            {props.settings.map((setting) => (
                <Typography sx={{color: "black"}}>
                    {setting}
                </Typography>
                ))}
        </Box>
    </Box>
    )
}