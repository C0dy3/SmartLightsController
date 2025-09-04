import {Box, Typography} from "@mui/material";

export function Header(){
    
    return(
        
        <Box sx={{
            flexGrow: 3, 
            display: 'flex',
            backgroundColor: "#4c67bd",
            flexDirection: "column",
            alignItems: "right",
            padding: 1
            
        }}>
            <Box>
                <Typography>Made with love by Me 💖</Typography>
            </Box>
        </Box>
        
        
    )
    
    
}