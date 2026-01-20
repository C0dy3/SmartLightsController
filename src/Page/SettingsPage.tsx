import {
    Box,
    Typography,
    Paper,
    Button

} from "@mui/material";
import {useNavigate} from "@tanstack/react-router";
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";

interface SettignsPageProps{
    settings: string[],
    handleOnSettingsChange: (settings: string[]) => void,
    hueData: BridgeReadDto | undefined;
    disconectBridge: () => void;
}

export function SettingsPage(props : SettignsPageProps){



    const navigate = useNavigate();

    const connectedButtons = () => {
        if(props.hueData?.connected){
            return (
                <Box sx={{flexGrow: 1,
                    display: "flex",
                    alignItems: "center",
                    p: 2,
                    gap: 2}}>

                    <Button variant={"contained"}>Reset light settings</Button>
                    <Button variant={"contained"}>Restart hue bridge</Button>
                    <Button variant={"contained"} onClick={() => props.disconectBridge()}>Disconnect from bridge</Button>

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
                <Typography sx={{color: "black"}}>
                    Bridge ID: {props.hueData?.id}
                </Typography>
                <Typography sx={{color: "black"}}>
                    Bridge port: {props.hueData?.port}
                </Typography>
                <Typography sx={{color: "black"}}>
                    Bridge IP: {props.hueData?.internalipaddress}
                </Typography>
                <Typography sx={{color: "black"}}>
                    Bridge connected: {props.hueData?.connected + ""}
                </Typography>

            </>
        )
    }


    return(
    <Box sx={{}}>
        <Paper elevation={1} sx={{borderRadius: 2, backgroundColor: "rgba(255,255,255,0.42)"}}>
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
                {props.hueData?.connected == false ?
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