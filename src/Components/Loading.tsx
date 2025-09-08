import {Box, LinearProgress, Skeleton, Stack} from "@mui/material";

export function Loading(){
    return (
        <Box sx={{flex: 2, justifyContent: "center", alignItems: "center", m: 2}}>
            <Stack direction="column" spacing={2}>
            <Skeleton animation={"wave"} variant={"rectangular"} sx={{p: 2,height: "14rem", width: "100rem", borderRadius: 3}} />
            <Skeleton animation={"wave"} variant={"rectangular"} sx={{p: 2,height: "14rem", width: "100rem", borderRadius: 3}} />
            </Stack>
        </Box>
    )
}