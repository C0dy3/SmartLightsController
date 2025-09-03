import {Box, Typography} from "@mui/material";

export function Header(){
    
    return(
        
        <Box sx={{
            flexGrow: 3, 
            display: 'flex',
            justifyContent: "space-between",
            backgroundColor: "#4c67bd",
            flexDirection: "row",
            alignItems: "center",
            padding: 1
            
        }}>
            <Typography sx={{ fontSize: 25, fontWeight: 'light' }}>Hue Control</Typography>
            <Typography>Made with love by Me 💖</Typography>
        </Box>
        
        
    )
    
    
}