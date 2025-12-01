import {Box, Link, Paper, Typography} from "@mui/material";
import backgroud from "../Images/You_Shall_Not_Pass!jpg.jpg";

export function NotFoundPage() {
    
    return (
        <Box sx={{
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            minWidth: "100%",
            minHeight: "100%",
            gap: 3, 
            p: 2
        }}>
            <Paper elevation={5} sx={{
                p: 3,
                borderRadius: 2,
                backgroundColor: "#c5c5c5",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                minWidth: "50%",
                minHeight: "25%",
                gap: 4,
            }}>
                <img src={`${backgroud}`}
                     alt="heh"
                     style={{ width: 400, height: 300 }}/>
                <Typography sx={{fontSize:"1.5rem"}}>
                    Ale vážne tudy cesta nevede...
                </Typography>
                <Link>
                    <Typography sx={{fontSize: "1.5rem"}}>
                    Cesta zpět
                </Typography>
                </Link>
            </Paper>
        </Box>
    )
    
}