import type {GroupReadDto} from "../Dto/GroupReadDto.ts";

export const GetGroups = async () : Promise<GroupReadDto[]> => {
    const res = await fetch("http://192.168.0.70/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/groups");

    if (!res.ok){
        throw new Error("Failed to fetch groups");
    }
    
    const data = await res.json();
    
    const mockData: Record<string, any> = {
        "1":{
            name: "Obývák",
            type: "",
            state: {all_on: true, any_on: false},
        },
        "2":{
            name: "Ložnice",
            type: "",
            state: {all_on: true, any_on: false},
        },
        "3":{
            name: "Pracovna",
            type: "",
            state: {all_on: true, any_on: false},
        },
        "4":{
            name: "Garáž",
            type: "",
            state: {all_on: true, any_on: false},
        },
        "5":{
            name: "Chodba",
            type: "",
            state: {all_on: true, any_on: false},
        }
    }
    
    
    return Object.entries(mockData).map(([id, group]: [string, any]) => ({
        id: Number(id),
        name: group.name,
        state: group.state
    }));


}
