export const turnOnLights = async (
    lightId: number,
    body: {on : boolean}
): Promise<void> => {
    const res = await fetch("http://192.168.0.103/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/lights/1/state" , {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(body)
    });
    
    
    if (!res.ok){
        throw new Error(`${res.statusText}`);
    }
}