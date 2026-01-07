import {Box, Button, InputLabel, ListItem, Paper, Slider, Stack, Typography} from "@mui/material";
import type {GroupReadDto} from "../Dto/GroupReadDto.ts";
import React from "react";

interface GroupGridProps{
    data: GroupReadDto[] | undefined
}




export function GroupGrid({data} : GroupGridProps){
    
    
    return(
        <Box sx={{ display: "flex", flexDirection: "column", gap: 3, p: 2 }}>
            {data.map((group) => (
                <Paper
                    key={group.id}
                    elevation={5}
                    sx={{
                        p: 3,
                        borderRadius: 2,
                        backgroundColor: "#c5c5c5",
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        gap: 4,
                    }}
                >
                    <Box sx={{ flex: 1 }}>
                        <ListItem>ID: {group.id}</ListItem>
                        <ListItem>Název: {group.name}</ListItem>
                        <ListItem>Zapnuto: {String(group.state.any_on)}</ListItem>
                        <ListItem>Světlost: {group.state.all_on}</ListItem>
                    </Box>
                </Paper>
            ))}
        </Box>
    )
}