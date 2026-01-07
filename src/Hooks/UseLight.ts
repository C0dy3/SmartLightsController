import {useQuery} from "@tanstack/react-query";
import type {LightReadDto} from "../Dto/LightReadDto.ts";
import {fetchLight} from "../api/lights.ts";


export const UseLight = (bridgeIp: string | null | undefined) => {
    return useQuery<LightReadDto[], Error>({
        queryKey: ["light"],
        queryFn: () => fetchLight(bridgeIp),
        staleTime: 1000 * 30,
        retry: 0,
        
    });
};