import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";
import {Box, Typography, ListItem, Button, Dialog, DialogTitle, DialogContent} from "@mui/material";
import {useState} from "react";
import {ConnectForm} from "../Forms/ConnectForm.tsx";

interface BridgeGridProps {
    bridges : BridgeReadDto[] | undefined
    handleSelect : (bridge: BridgeReadDto) => void
}



export function BridgeGrid({bridges, handleSelect}: BridgeGridProps){

    const [open, setOpen] = useState<boolean>(false);

    const handleOpen = (bridge: BridgeReadDto) => {

        handleSelect(bridge);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);



    return(
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            p: 2,
            overflow: "hidden auto",
            maxHeight: 300,
        }}>
            {bridges?.map((bridge) => (
                <Box sx={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    gap: 4,
                    alignItems: "center",
                    backgroundColor: "rgba(166,163,163,0.3)",
                    borderRadius: 4,
                    p: 1

                }}>
                <ListItem>
                    <Typography color={"white"}>
                        ID of bridge: {bridge.id}
                    </Typography>
                    <ListItem>

                    <Typography color={"white"}>
                        IP of bridge: {bridge.internalipaddress}
                    </Typography>

                    </ListItem>
                    <ListItem>

                    <Typography color={"white"}>
                        Bridge port: {bridge.port}
                    </Typography>

                    </ListItem>

                    <ListItem>
                        <Button variant={"contained"} onClick={() => handleOpen(bridge)}>Vybrat</Button>
                    </ListItem>
                </ListItem>

                    <Dialog open={open} onClose={handleClose}>
                        <DialogTitle>Nastavení připojení</DialogTitle>
                        <DialogContent>
                            <ConnectForm/>
                        </DialogContent>

                    </Dialog>
                </Box>
                )
            )}
        </Box>
    )
}