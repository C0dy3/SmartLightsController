import type {LightReadDto} from "../Dto/LightReadDto.ts";
import {Box, Button, Divider, InputLabel, ListItem, Paper, Slider, Stack, Typography} from "@mui/material";
import {type RgbaColor, RgbaColorPicker} from "react-colorful";
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";



interface LightGridProps{
    data : LightReadDto[]
    handleTurnOn: (lightId : number, current : boolean) => void
    handleBrightness: (value: number ,ligthId : number) => void
    handeOnColorChange: (color : {r: number; g: number; b: number, a: number}, lightId: number) => void;
    xyToRgb: (x: number, y: number, bri: number) => RgbaColor;
    hueData: BridgeReadDto | undefined;
    
}


// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function LightGrid({data, handleTurnOn, handleBrightness, handeOnColorChange, xyToRgb, hueData} : LightGridProps){
    
    
    return (
        <Box sx={{ 
            display: "flex", 
            flexDirection: "column", 
            gap: 3,
            p: 2, 
            overflow: "hidden auto", 
            maxHeight: "80vh", 
        }}>
            {data.map((light) => (
                <Paper
                    key={light.id}
                    elevation={5}
                    sx={{
                        p: 3,
                        borderRadius: 2, 
                        backgroundColor: "rgba(255,255,255,0.42)",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <ListItem>
                            <Typography sx={{fontSize: "1.5rem"}}>
                                {light.name}
                            </Typography>
                        </ListItem>
                        <Divider>
                            <Typography sx={{fontSize: "0.8rem"}}>
                                Obecné informace
                            </Typography>
                        </Divider>
                        
                        <ListItem>
                            <Typography sx={{fontSize: "1.5rem", color: light.state.on ? "#19750a" : "#931414", boxShadow: 0}}>
                                {light.state.on ? "Zapnuto" : "Vypnuto"}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography>
                                Světlost: {light.state.bri}
                        </Typography>
                           </ListItem>
                        {light.state.hue !== undefined && (
                            <ListItem>Odstín: {light.state.hue}</ListItem>
                        )}
                        {light.state.sat !== undefined && (
                            <ListItem>Saturace: {light.state.sat}</ListItem>
                        )}
                    </Box>

                    <Divider orientation={"vertical"}>
                        <Typography sx={{fontSize: "0.8rem"}}>Nastavení</Typography>
                    </Divider>
                    <Stack sx={{ width: "20rem" }} spacing={2}>
                        <InputLabel>Jas</InputLabel>
                        <Slider
                            defaultValue={light.state.bri}
                            max={254}
                            onChange={(_event, value) =>
                                handleBrightness(
                                    light.id,
                                    Array.isArray(value) ? value[0] : value
                                )
                            }
                        />
                        <InputLabel>Stav</InputLabel>
                        <Button
                            variant="contained"
                            onClick={() => handleTurnOn(light.id, light.state.on)}
                        >
                            {light.state.on ? "Vypnout" : "Zapnout"}
                        </Button>
                    </Stack>
                    <Box sx={{display: "flex", flexDirection: "column", gap: 2}}>
                        <InputLabel>Barva</InputLabel>
                        <RgbaColorPicker color={xyToRgb(light.state.xy[0],light.state.xy[1], light.state.bri)}
                                         onChange={(color) => handeOnColorChange(color, light.id)}/>
                    </Box>
                </Paper>
            ))}
            <Box sx={{display: "flex", allignItems: "center", flexDirection: "column", alignItems: "center"}}>
                <Paper sx={{ 
                    p: 3,
                    borderRadius: 2,
                    backgroundColor: "rgba(255,255,255,0.42)",
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    gap: 4,
                    minWidth: "188vh",
                    justifyContent: "center",
                    
                }}>
                    <Button variant={"contained"} >Přidat další příslušenství</Button>
                </Paper>
            </Box>
        </Box>
    )
    
}