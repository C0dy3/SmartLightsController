import {
    Box,
    Alert
} from "@mui/material"
import {JSX} from "react";

interface ErrorPageProps {
    error: Error
}


export function FetchErrorPage(props : ErrorPageProps): JSX.Element {

    return (
        <Box>
            <Alert severity="error">Při načítání dat z HUE bridge došlo k chybě {props.error.message}</Alert>
        </Box>
    )
}