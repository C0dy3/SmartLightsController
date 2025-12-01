import {Box, Link, Typography} from "@mui/material";

export function Footer(){
    
    
    
    return(
        
        <Box sx={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: "center",
            padding: 1,
            backgroundColor: "rgba(255,255,255,0.37)",
            minWidth: "100%"
            
        }}>
            <Box sx={{display: "flex", 
                flexDirection: "row", 
                alignItems: "center", 
                justifyContent: "space-between",
                paddingLeft: 2, 
                gap: 2}}>
                <Typography>v 0.0.1</Typography>
                <Link>Github</Link>
                <Box sx={{
                    position: "absolute",
                    left: "50%",
                    transform: "translateX(-50%)", 
                    whiteSpace: "nowrap"
                }}>
                    <Typography>Made by Štěpán Šmídl</Typography>
                </Box>
                
            </Box>
           
        </Box>
        
        
    )
    
    
}