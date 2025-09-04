import {UseLight} from "../Hooks/UseLight.ts";
import {Loading} from "../Components/Loading.tsx";
import {LightGrid} from "../Components/LightGrid.tsx";
import {useUpdateLights} from "../Hooks/UseUpdateLights.ts";

export function MainPage(){
    
   


    const {mutate, isPending} = useUpdateLights();
    const {data, isLoading, error} = UseLight(1);
   
    const HandleTurnOn = () => {
        mutate({ on: !data.state.on });
    }
    
    if (isLoading){
        return(
            <Loading />
        )
    }
    
    if (error){
        return (
            <p>Chyba při načítání dat</p>
        )
    }
    
    if (data != undefined){
        return (
            <LightGrid data={data} handleTurnOn={HandleTurnOn} />
        )
    }
    
    
}