import {BridgeGrid} from "../Components/BridgeGrid.tsx";
import {UseFetchBridges} from "../Hooks/UseFetchBridges.ts";
import {Loading} from "../Components/Loading.tsx";
import {FetchErrorPage} from "../Page/FetchErrorPage.tsx";

export function ConnectContainer() {

    const{data, isLoading, isError, error} = UseFetchBridges();


    if(isLoading){
        return <Loading/>
    }

    if(isError){
        return (
            <FetchErrorPage error={error} />
        )
    }


    return (
        <BridgeGrid bridges={data} />
    )
}