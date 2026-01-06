import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";

interface BridgeGridProps {
    bridges : BridgeReadDto[] | undefined
}



export function BridgeGrid ({ bridges }: BridgeGridProps){

    return (
        <>
        <Box>
            {bridges.map((bridge) => {
                <ListItem>
                    <Typography>
                        ID of bridge: {bridge.id}
                    </Typography>
                    <Typography>
                        IP of bridge: {bridge.internalipaddress}
                    </Typography>
                    <Typography>
                        Bridge port: {bridge.port}
                    </Typography>
                </ListItem>
                }
            )}
        </Box>
        </>
    )
}