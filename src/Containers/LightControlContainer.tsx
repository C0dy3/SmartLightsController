import {useUpdateLights} from "../Hooks/UseUpdateLights.ts";
import {useChangeBrightness} from "../Hooks/UseChangeBrightness.ts";
import {UseLight} from "../Hooks/UseLight.ts";
import {Loading} from "../Components/Loading.tsx";
import {LightGrid} from "../Components/LightGrid.tsx";

export function LightControlContainer(){
    const {mutate, isPending} = useUpdateLights(1);
    const {mutate : mutateBri, isPending : isPendingBri} = useChangeBrightness(1);

    const {data, isLoading, error} = UseLight();

    const HandleTurnOn = (lightId: number, current: boolean) => {
        mutate({ on: !current, lightId });
    };

    const HandleBrightness = (lightId: number, value: number) => {
        mutateBri({ bri: value, lightId });
    };

    console.log(data)

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
            <LightGrid data={Object.values(data)} handleTurnOn={HandleTurnOn} handleBrightness={HandleBrightness} />
        )
    }

}