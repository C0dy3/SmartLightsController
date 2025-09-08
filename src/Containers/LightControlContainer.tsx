import {useUpdateLights} from "../Hooks/UseUpdateLights.ts";
import {useChangeBrightness} from "../Hooks/UseChangeBrightness.ts";
import {UseLight} from "../Hooks/UseLight.ts";
import {Loading} from "../Components/Loading.tsx";
import {LightGrid} from "../Components/LightGrid.tsx";
import {usePutUpdateColor} from "../Hooks/UsePutUpdateColor.ts";

export function LightControlContainer(){
    const {mutate, isPending} = useUpdateLights(1);
    const {mutate : mutateBri, isPending : isPendingBri} = useChangeBrightness(1);
    const {mutate: mutateColor, isPending: isPendingColor} = usePutUpdateColor();

    const {data, isLoading, error} = UseLight();

    const HandleTurnOn = (lightId: number, current: boolean) => {
        mutate({ on: !current, lightId });
    };

    const HandleBrightness = (lightId: number, value: number) => {
        mutateBri({ bri: value, lightId });
    };

    interface RGB {
        r: number
        g: number
        b: number
    }

    function rgbToXy({r, g, b} : RGB): [number, number] {
        let red = r / 255
        let green = g / 255
        let blue = b / 255

        red = red > 0.04045 ? Math.pow((red + 0.055) / (1.055), 2.4) : red / 12.92
        green = green > 0.04045 ? Math.pow((green + 0.055) / (1.055), 2.4) : green / 12.92
        blue = blue > 0.04045 ? Math.pow((blue + 0.055) / (1.055), 2.4) : blue / 12.92


        const X = red * 0.664511 + green * 0.154324 + blue * 0.162028
        const Y = red * 0.283881 + green * 0.668433 + blue * 0.047685
        const Z = red * 0.000088 + green * 0.072310 + blue * 0.986039


        const x = X / (X + Y + Z)
        const y = Y / (X + Y + Z)

        return [x, y]
    }



    const HandleOnColorChange = (color : {r: number; g: number; b: number; a: number}, lightId: number) => {
        const[x,y] = rgbToXy({r:color.r, g:color.g, b:color.b});
        mutateColor({xy: [x,y], lightId})
    }

  
    
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
            <LightGrid 
                data={Object.values(data)} 
                handleTurnOn={HandleTurnOn} 
                handleBrightness={HandleBrightness} 
                handeOnColorChange={HandleOnColorChange} />
        )
    }

}