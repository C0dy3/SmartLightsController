import type {LightReadDto} from "../Dto/LightReadDto.ts";

export const fetchLight = async (bridgeIp: string | null | undefined) : Promise<LightReadDto[]> => {

    const res = await fetch("http://" + bridgeIp + "/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/lights");
    if (!res.ok){
        throw new Error(`${res.statusText}`);
    }
    
    const data =  await res.json();

    const mockData: Record<string, any> = {
        "1": {
            name: "Obývák - Hlavní",
            state: { on: true, bri: 254, hue: 10000, sat: 200, xy: [0.4, 0.4] }
        },
        "2": {
            name: "Kuchyně - Linka",
            state: { on: false, bri: 120, hue: 5000, sat: 100, xy: [0.3, 0.3] }
        },
        "3": {
            name: "Ložnice - Lampička",
            state: { on: true, bri: 50, xy: [0.5, 0.5] }
        },
        "4": {
            name: "Pracovna - Led proužek",
            state: { on: true, bri: 50, xy: [0.5, 0.5] }
        },
        "5": {
            name: "Chodba - světlo",
            state: { on: true, bri: 50, xy: [0.5, 0.5] }
        },
        // Tady si jich přidej klidně 10 pro demonstraci scrollu
    };
    
    
    return Object.entries(mockData).map(([id, light]: [string, any]) => ({
        id: Number(id),
        name: light.name,
        state: light.state,
    }));
    
};