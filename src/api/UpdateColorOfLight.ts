export const UpdateColorOfLight = async (
    lightId: number,
    body: {xy: number[]}
): Promise<void> => {
    const res = await fetch(`http://192.168.0.70/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/lights/${lightId}/state`,
        {
            method: 'PUT',
            body: JSON.stringify(body)
        });
    
    
    if (!res.ok) {
        throw new Error(`Failed to put change color: ${JSON.stringify(body)}`);
    }
}