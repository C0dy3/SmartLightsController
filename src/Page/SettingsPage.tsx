import {
    Box,
    Typography,
    Paper,
    Button

} from "@mui/material";
import {useHue} from "../Context/HueBridgeContext.tsx";
import {useNavigate} from "@tanstack/react-router";

interface SettignsPageProps{
    settings: string[],
    handleOnSettingsChange: (settings: string[]) => void,
}

export function SettingsPage(props : SettignsPageProps){

    const { hueData } = useHue()

    const navigate = useNavigate();

    const connectedButtons = () => {
        if(hueData.connected){
            return (
                <Box sx={{flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    gap: 2}}>

                    <Button variant={"contained"}>Reset light settings</Button>
                    <Button variant={"contained"}>Restart hue bridge</Button>
                </Box>

            )
        }
        else {
            return (
                <Box sx={{flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    gap: 2}}>
                    <Button variant={"contained"}
                            onClick={() => navigate({to: "/connect"})}>
                        Připojit bridge
                    </Button>
                </Box>
            )
        }
    }

    const hueSettings = () => {
        return (
            <>
            {props.settings.map(( setting ) => (
                    <Typography sx={{color: "black"}}>
                        {setting}
                    </Typography>
                ))}
            </>
        )
    }


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
                {hueData.connected == false ?
                    <Typography sx={{fontSize: "1rem", p: 2}}>
                    Nejdříve se připojte ke svému hue bridge, abyste mohli svá světla ovládat
                </Typography>
                    : hueSettings()}

            </Box>
            {connectedButtons()}
        </Paper>
    </Box>
    )
}