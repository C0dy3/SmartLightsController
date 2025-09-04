import type {LightReadDto} from "../Dto/LightReadDto.ts";
import {Box, Button, List, ListItem} from "@mui/material";

interface LightGridProps{
    data : LightReadDto
    handleTurnOn: () => void
}


export function LightGrid({data, handleTurnOn} : LightGridProps){
    
    return (
        <Box sx={{alignItems:'center', flexDirection: 'column', justifyContent: 'space-between'}}>
            <List sx={{backgroundColor: "#5b75c1"}}>
                <ListItem>Název: {data.name}</ListItem>
                <ListItem>Zapnuto: {data.state.on + ""}</ListItem>
                <ListItem>Světlost: {data.state.bri}</ListItem>
                <ListItem>Odstín: {data.state.hue}</ListItem>
                <ListItem>Saturace: {data.state.sat}</ListItem>
            </List>
            <Button variant={"contained"} onClick={handleTurnOn}>{data.state.on ? "Vypnout" : "Zapnout"}</Button>
        </Box>
    )
    
}