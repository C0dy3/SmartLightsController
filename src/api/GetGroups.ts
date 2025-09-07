import type {GroupReadDto} from "../Dto/GroupReadDto.ts";

export const GetGroups = async () : Promise<GroupReadDto[]> => {
    const res = await fetch("http://192.168.0.70/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/groups");

    if (!res.ok){
        throw new Error("Failed to fetch groups");
    }
    
    const data = await res.json();
    
    return Object.entries(data).map(([id, group]: [string, any]) => ({
        id: Number(id),
        name: group.name,
        state: group.state
    }));


}
