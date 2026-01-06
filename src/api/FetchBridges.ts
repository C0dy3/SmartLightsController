
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";



export const FetchBridges = async (): Promise<BridgeReadDto[]> => {
    const response = await fetch("https://discover.meethue.com/");

    if(!response.ok){
        throw new Error("Not able to fetch bridges in your local network, try again or type your adress manualy" + response.statusText);
    }

    return await response.json();
}