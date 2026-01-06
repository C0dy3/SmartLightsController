import {createContext, useContext, useState} from "react";

const hueContext = createContext();

export const HueProvider = ({children}) => {
    const [hueData, setHueData] = useState({
        ip: null,
        accessCode: null,
        connected: false
    })


    const saveConnection = (ip, accessCode) => {
        setHueData({
            ip: ip,
            accessCode: accessCode,
            connected: true
        })
    }

    return (
        <hueContext.Provider value={{ hueData, saveConnection }}>
            {children}
        </hueContext.Provider>
    );
};

export const useHue = () => {
    return useContext(hueContext);
};