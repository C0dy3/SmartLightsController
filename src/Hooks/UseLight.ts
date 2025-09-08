import {useQuery} from "@tanstack/react-query";
import type {LightReadDto} from "../Dto/LightReadDto.ts";
import {fetchLight} from "../api/lights.ts";


export const UseLight = () => {
    return useQuery<LightReadDto[], Error>({
        queryKey: ["light"],
        queryFn: () => fetchLight(),
        staleTime: 1000 * 30,
    });
};