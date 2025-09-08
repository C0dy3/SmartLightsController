import {Box, Link, Typography} from "@mui/material";

export function Footer(){
    
    
    
    return(
        
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: "center",
            padding: 1,
            backgroundColor: "#4C67BDFF"
        }}>
            <Typography>v 0.0.1</Typography>
            <Link>Github</Link>
        </Box>
        
        
    )
    
    
}