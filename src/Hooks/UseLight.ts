import {useQuery} from "@tanstack/react-query";
import type {LightReadDto} from "../Dto/LightReadDto.ts";
import {fetchLight} from "../api/lights.ts";

export const UseLight = (lightId : number) => {
    return useQuery<LightReadDto, Error>({
        queryKey: ["light", lightId],
        queryFn: () => fetchLight(lightId),
        staleTime: 1000 * 30,
    });
};