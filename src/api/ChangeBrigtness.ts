export const ChangeBrigtness = async  (
    ligthId: number,
    body: { bri: number}
): Promise<void> => {
    const res = await fetch(`http://192.168.0.70/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/lights/${ligthId}/state`,{
        method: 'PUT',
        body: JSON.stringify(body),
        });
    
    if (!res.ok) {
        throw new Error(`Failed to put change brigtness: ${JSON.stringify(body)}`);
    }
}