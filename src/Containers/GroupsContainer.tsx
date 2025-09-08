import {useGetGroups} from "../Hooks/UseGetGroups.ts";
import {Loading} from "../Components/Loading.tsx";
import {Typography} from "@mui/material";
import {GroupGrid} from "../Components/GroupGrid.tsx";

export function GroupsContainer() {
    
    const{data,isLoading, isError} = useGetGroups();
    
    if (isLoading){
        return(
            <Loading />
        )
    }
    
    if (isError){
        return (
            <Typography>Error while fetching groups</Typography>
        )
    }
    
    return (
        <GroupGrid data={data}/>
    )
    
    
}