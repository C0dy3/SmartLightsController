import type {LightReadDto} from "../Dto/LightReadDto.ts";
import {Box, Button, Grid, InputLabel, List, ListItem, Paper, Slider, Stack, Typography} from "@mui/material";
import {type RgbaColor, RgbaColorPicker} from "react-colorful";
import React from "react";



interface LightGridProps{
    data : LightReadDto[]
    handleTurnOn: (lightId : number, current : boolean) => void
    handleBrightness: (value: number ,ligthId : number) => void
    handeOnColorChange: (color : {r: number; g: number; b: number, a: number}, lightId: number) => void;
    xyToRgb: (x: number, y: number, bri: number) => RgbaColor;
    
}


export function LightGrid({data, handleTurnOn, handleBrightness, handeOnColorChange, xyToRgb} : LightGridProps){
    
    
    return (
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
            {data.map((light) => (
                <Paper
                    key={light.id}
                    elevation={5} 
                    sx={{
                        p: 3, // padding uvnitř
                        borderRadius: 2, // zaoblené rohy
                        backgroundColor: "#c5c5c5", // světle šedé pozadí
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <ListItem>
                            <Typography sx={{fontSize: "1.5rem"}}>
                                ID: {light.id}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{fontSize: "1.5rem"}}>
                                {light.name}
                            </Typography>
                        </ListItem>
                        <ListItem>
                            <Typography sx={{fontSize: "1.5rem", color: light.state.on ? "#0aff00" : "#f30c0c", boxShadow: 2}}>
                                Zapnuto
                            </Typography>
                        </ListItem>
                        <ListItem>Světlost: {light.state.bri}</ListItem>
                        {light.state.hue !== undefined && (
                            <ListItem>Odstín: {light.state.hue}</ListItem>
                        )}
                        {light.state.sat !== undefined && (
                            <ListItem>Saturace: {light.state.sat}</ListItem>
                        )}
                        <ListItem>Barva: {light.state.xy}</ListItem>
                    </Box>

                    <Stack sx={{ width: "20rem" }} spacing={2}>
                        <InputLabel>Jasnost</InputLabel>
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
                        <InputLabel>Barva</InputLabel>
                        {/* sem můžeš dát další ovládací prvky pro barvu */}
                        <Button
                            variant="contained"
                            onClick={() => handleTurnOn(light.id, light.state.on)}
                        >
                            {light.state.on ? "Vypnout" : "Zapnout"}
                        </Button>
                        
                    </Stack>
                        <RgbaColorPicker color={xyToRgb(light.state.xy[0],light.state.xy[1], light.state.bri)}
                        onChange={(color) => handeOnColorChange(color, light.id)}/>
                </Paper>
            ))}
        </Box>
    )
    
}