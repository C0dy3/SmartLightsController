
import {
    Box,
    Typography
} from "@mui/material";


export function AbouteContainer() {

    return (
        <Box sx={{
            height: "80vh",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
        }}>
            <Box sx={{
                width: "100vh",
                backgroundColor: "rgba(255,255,255,0.42)",
                padding: 8,
                borderRadius: 1,
                boxShadow: 3,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: 4,
                alignItems: "center",
                textAlign: "center"
            }}>
                <Box>
                    <Typography sx={{fontsize: "0.5rem"}}>
                        Aplikace hue control byla vytvořena jako školní projekt, ale zároveň jako trénink FrontEnd developmentu
                        v TypeScript a React + TanStack Router a query
                    </Typography>
                    <Typography sx={{fontsize: "0.5rem"}}>
                        Tato aplikace je aktuálně v ranné fázi vývoje a fungují zde základní věci na ovládání vašich chytrých
                        světel
                    </Typography>
                </Box>
            <Box>
                <Typography sx={{fontsize: "0.5rem"}}>
                    <b>Štěpán Šmídl, 2026
                        Projekt součástí předmětu 7VINS</b>
                </Typography>
            </Box>

            </Box>
        </Box>
    )
}