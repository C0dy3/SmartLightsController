import {useQuery} from "@tanstack/react-query";
import type {GroupReadDto} from "../Dto/GroupReadDto.ts";
import {GetGroups} from "../api/GetGroups.ts";

export const useGetGroups = () => {
    return useQuery<GroupReadDto[], Error>({
        queryKey: ["groups"],
        queryFn: () => GetGroups(),
        staleTime: 1000 * 30,
    })
}