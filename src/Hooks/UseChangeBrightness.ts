import {useMutation, useQueryClient} from "@tanstack/react-query";
import {ChangeBrigtness} from "../api/ChangeBrigtness.ts";

export const useChangeBrightness = (lightId : number) => {
    const queryClient = useQueryClient();
    
    return useMutation({
        mutationFn: ({bri, lightId}: {bri: number, lightId: number}) => 
        ChangeBrigtness(lightId, {bri}),
        
        onSuccess: (_data) => {
            queryClient.invalidateQueries({queryKey: ["light"]});
        },
        
    });
    
}