import type {LightReadDto} from "../Dto/LightReadDto.ts";

export const fetchLight = async () : Promise<LightReadDto[]> => {
    const res = await fetch(`http://192.168.0.70/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/lights`);
    if (!res.ok){
        throw new Error(`${res.statusText}`);
    }
    
    const data =  await res.json();

    return Object.entries(data).map(([id, light]: [string, any]) => ({
        id: Number(id),
        name: light.name,
        state: light.state,
    }));
    
};