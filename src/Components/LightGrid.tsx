import type {LightReadDto} from "../Dto/LightReadDto.ts";
import {Box, Button, Grid, InputLabel, List, ListItem, Paper, Slider, Stack} from "@mui/material";
import React from "react";
import {SketchPicker} from 'react-color'
import {RgbaColorPicker} from "react-colorful";

interface LightGridProps{
    data : LightReadDto[]
    handleTurnOn: (lightId : number, current : boolean) => void
    handleBrightness: (value: number ,ligthId : number) => void
    handeOnColorChange: (color : {r: number; g: number; b: number, a: number}, lightId: number) => void;
}


export function LightGrid({data, handleTurnOn, handleBrightness, handeOnColorChange} : LightGridProps){
    
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
                        <ListItem>ID: {light.id}</ListItem>
                        <ListItem>Název: {light.name}</ListItem>
                        <ListItem>Zapnuto: {String(light.state.on)}</ListItem>
                        <ListItem>Světlost: {light.state.bri}</ListItem>
                        {light.state.hue !== undefined && (
                            <ListItem>Odstín: {light.state.hue}</ListItem>
                        )}
                        {light.state.sat !== undefined && (
                            <ListItem>Saturace: {light.state.sat}</ListItem>
                        )}
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
                        <RgbaColorPicker onChange={(color) => handeOnColorChange(color, light.id)}/>
                </Paper>
            ))}
        </Box>
    )
    
}