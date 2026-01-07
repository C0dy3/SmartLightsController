import {createContext, type ReactNode, useContext, useEffect, useState} from "react";
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";

export interface HueContextType {
    hueData: BridgeReadDto
    saveConnection: (ip: string | null, accessCode: string, id: string | null, port: number | null ) => void;
    disconnect: () => void;
}

const hueContext = createContext<HueContextType | undefined>(undefined);

interface HueBridgeContextType {
    children : ReactNode;
}

export const HueProvider = ({children}: HueBridgeContextType) => {
    const [hueData, setHueData] = useState(() => {

        const savedData = localStorage.getItem("hue_control_app_data");

        if(savedData) {
            try {
                return JSON.parse(savedData);
            } catch (e) {
                console.log("Failed while loading data from local storage" + e);
                return null;
            }

            return null;
        }
    })

    useEffect(() => {
        localStorage.setItem("hue_control_app_data", JSON.stringify(hueData));
    }, [hueData]);



    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    //@ts-expect-error
    const saveConnection = (ip, accessCode, id, port) => {
        setHueData({
            id: id,
            internalipaddress: ip,
            accessCode: accessCode,
            port: port,
            connected: true
        })
    }

    const disconnect = () => {
        localStorage.removeItem("hue_control_app_data");
        setHueData({connected: false})
    }

    return (
        <hueContext.Provider value={{ hueData, saveConnection, disconnect }}>
            {children}
        </hueContext.Provider>
    );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useHue = () => {
    return useContext(hueContext);
};