import {useMutation, useQueryClient} from "@tanstack/react-query";
import {UpdateColorOfLight} from "../api/UpdateColorOfLight.ts";

export const usePutUpdateColor = () => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({xy, lightId} : {xy: number[], lightId: number}) =>
            UpdateColorOfLight(lightId, {xy}),
        
        onSuccess: (_data) => {
            queryClient.invalidateQueries({queryKey: ["light"]});
        },
    });
};