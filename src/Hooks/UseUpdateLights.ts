import {useMutation, useQueryClient} from "@tanstack/react-query";
import {turnOnLights} from "../api/TurnOnLights.ts";

export const useUpdateLights = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({ on }: {  on: boolean }) =>
            turnOnLights(1, {on}),

        onSuccess: (_data, variables) => {
            queryClient.invalidateQueries({ queryKey: ["light"] });
        },
    });
};