import {useMutation, useQueryClient} from "@tanstack/react-query";
import {turnOnLights} from "../api/TurnOnLights.ts";

export const useUpdateLights = (lightId : number) => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({ on, lightId }: {  on: boolean, lightId : number }) =>
            turnOnLights(lightId, {on}),

        onSuccess: (_data) => {
            queryClient.invalidateQueries({ queryKey: ["light"] });
        },
    });
};