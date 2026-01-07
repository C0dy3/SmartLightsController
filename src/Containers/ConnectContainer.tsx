import {UseFetchBridges} from "../Hooks/UseFetchBridges.ts";
import {FetchErrorPage} from "../Page/FetchErrorPage.tsx";
import {ConnectPage} from "../Page/ConnectPage.tsx";
import {Box, LinearProgress} from "@mui/material"
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";
import {useHue} from "../Context/HueBridgeContext.tsx";
import {useNavigate} from "@tanstack/react-router";

export function ConnectContainer() {

    const{data, isLoading, isError, error} = UseFetchBridges();
    const bridgeControl = useHue();
    const navigate = useNavigate();

    const handleSelect = (bridge : BridgeReadDto) => {
        bridgeControl?.saveConnection(bridge.internalipaddress, "llll", bridge?.id, bridge?.port)
        navigate({to: "/settings"})
    }


    if(isLoading){
        return (
            <Box sx={{display: "flex" ,gap: 2, flexDirection: "column", justifyContent: "space-between"}}>
                <ConnectPage bridges={data} handleSelect={handleSelect}/>
                <LinearProgress />
            </Box>
        )
    }

    if(isError){
        return (
            <Box sx={{display: "flex" ,gap: 2, flexDirection: "column", justifyContent: "space-between"}}>
                <ConnectPage bridges={data} handleSelect={handleSelect} />
                <FetchErrorPage error={error} />
            </Box>
        )
    }
    return (
        <>
        <ConnectPage
            bridges={data}
            handleSelect={handleSelect}
        />
        </>
    )
}