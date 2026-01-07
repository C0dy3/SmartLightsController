
import type {BridgeReadDto} from "../Dto/BridgeReadDto.ts";



export const FetchBridges = async (): Promise<BridgeReadDto[]> => {

    /*
    const response = await fetch("https://discovery.meethue.com");
    if(!response.ok){
    throw new Error("Not able to fetch bridges in your local network, try again or type your adress manualy "
        + response.statusText);
    }
    return await response.json()
    */


    await new Promise(resolve => setTimeout(resolve, 1500));

    return [
        {
            id: "001788FFFE123456",
            internalipaddress: "192.168.1.50", // <--- Sem si dej tu IP, co jsi zjistil (nebo vymyšlenou)
            port: 443,
            connected: null
        },
        {
            id: "001788FFFE123456",
            internalipaddress: "192.168.1.20", // <--- Sem si dej tu IP, co jsi zjistil (nebo vymyšlenou)
            port: 443,
            connected: null
        },
        {
            id: "001788FFFE123456",
            internalipaddress: "192.168.1.30", // <--- Sem si dej tu IP, co jsi zjistil (nebo vymyšlenou)
            port: 443,
            connected: null
        }
        ]
}