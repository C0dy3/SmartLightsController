import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";
import {Box, Typography, ListItem, Button} from "@mui/material";
import React from "react";

interface BridgeGridProps {
    bridges : BridgeReadDto[] | undefined
    handleSelect : (bridge: BridgeReadDto) => void
}



export function BridgeGrid({bridges, handleSelect}: BridgeGridProps){

    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 2
        }}>
            {bridges?.map((bridge) => (
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 4,
                    alignItems: "center",
                    backgroundColor: "rgba(104,97,97,0.29)",
                    borderRadius: 4,
                    p: 1

                }}>
                <ListItem>
                    <Typography>
                        ID of bridge: {bridge.id}
                    </Typography>
                    <ListItem>

                    <Typography>
                        IP of bridge: {bridge.internalipaddress}
                    </Typography>

                    </ListItem>
                    <ListItem>

                    <Typography>
                        Bridge port: {bridge.port}
                    </Typography>

                    </ListItem>

                    <ListItem>
                        <Button variant={"contained"} onClick={() => handleSelect(bridge)}>Vybrat</Button>
                    </ListItem>
                </ListItem>
                </Box>
                )
            )}
        </Box>
    )
}