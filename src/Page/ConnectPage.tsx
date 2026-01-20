
import {Box, Button, Container, Stack, Typography, Divider} from "@mui/material";
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";
import {BridgeGrid} from "../Components/BridgeGrid.tsx";
import {JSX} from "react";

interface ConnectPageProps {
    bridges : BridgeReadDto[] | undefined;
    handleSelect: (bridge: BridgeReadDto) => void;
}


export function ConnectPage({bridges, handleSelect}: ConnectPageProps): JSX.Element {


    return (

        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignSelf: "center",
                justifyContent: "center",   
                alignItems: "center",       
                height: "auto",
                p: 2,
                width: "100%",              
                overflow: "hidden",
                backgroundColor: "rgba(255,255,255,0.42)",
                borderRadius: 4,
                gap: 2
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
                <Divider/>
                <Typography sx={{alignSelf: 'center', fontSize:"1.2rem"}}>
                    Vyber jeden z níže nalezených bridge na tvé lokální síti
                </Typography>

                <Box sx={{display: "flex", flexDirection: "column", gap: 2, p: 2}}>
                    <BridgeGrid bridges={bridges} handleSelect={handleSelect}/>
                </Box>
            </Stack>
        </Container>
    );
}
    
    
    
    
    
    
