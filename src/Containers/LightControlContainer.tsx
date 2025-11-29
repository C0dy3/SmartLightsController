import {useUpdateLights} from "../Hooks/UseUpdateLights.ts";
import {useChangeBrightness} from "../Hooks/UseChangeBrightness.ts";
import {UseLight} from "../Hooks/UseLight.ts";
import {Loading} from "../Components/Loading.tsx";
import {LightGrid} from "../Components/LightGrid.tsx";
import {usePutUpdateColor} from "../Hooks/UsePutUpdateColor.ts";
import type {RgbaColor} from "react-colorful";
import {FetchErrorPage} from "../Page/FetchErrorPage.tsx";

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


    function xyToRgb(x: number, y: number, bri: number) : RgbaColor {
        if (y === 0) y = 0.0000001; // prevence dělení nulou

        // převod XY + bri na XYZ
        const z = 1.0 - x - y
        const Y = bri / 254 // normalizace jasu 0..1
        const X = (Y / y) * x
        const Z = (Y / y) * z

        // převod XYZ → linear RGB
        let r = X * 1.656492 - Y * 0.354851 - Z * 0.255038
        let g = -X * 0.707196 + Y * 1.655397 + Z * 0.036152
        let b = X * 0.051713 - Y * 0.121364 + Z * 1.011530

        // gamma korekce
        r = r <= 0.0031308 ? 12.92 * r : 1.055 * Math.pow(r, 1 / 2.4) - 0.055
        g = g <= 0.0031308 ? 12.92 * g : 1.055 * Math.pow(g, 1 / 2.4) - 0.055
        b = b <= 0.0031308 ? 12.92 * b : 1.055 * Math.pow(b, 1 / 2.4) - 0.055

        // ořez do rozsahu 0..1
        r = Math.min(Math.max(r, 0), 1)
        g = Math.min(Math.max(g, 0), 1)
        b = Math.min(Math.max(b, 0), 1)

        return {
            a: 0,
            r: Math.round(r * 255),
            g: Math.round(g * 255),
            b: Math.round(b * 255)
        }
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
            <FetchErrorPage error={error} />
        )
    }

    if (data != undefined){
        return (
            <LightGrid 
                data={Object.values(data)} 
                handleTurnOn={HandleTurnOn} 
                handleBrightness={HandleBrightness} 
                handeOnColorChange={HandleOnColorChange}
                xyToRgb={xyToRgb}
            />
        )
    }

}