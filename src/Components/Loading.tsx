import {Box, LinearProgress} from "@mui/material";

export function Loading(){
    return (
        <Box sx={{minHeight: '35rem', position: 'center', maxWidth: '98%'}}>
            <LinearProgress/>
        </Box>
    )
}