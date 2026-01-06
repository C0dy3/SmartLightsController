import {useQuery} from "@tanstack/react-query";
import {FetchBridges} from "../api/FetchBridges.ts";
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";

export const UseFetchBridges = () => {
    return useQuery<BridgeReadDto[], Error>({
        queryKey: ["fetchBridges"],
        queryFn: () => FetchBridges(),
        staleTime: 1000 * 30,
        retry: 3,
    });
};