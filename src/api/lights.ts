
export const fetchLight = async (lightId: number) => {
    const res = await fetch(`http://192.168.0.103/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/lights/${lightId}`);
    if (!res.ok){
        throw new Error(`${res.statusText}`);
    }
    
    return res.json();
}