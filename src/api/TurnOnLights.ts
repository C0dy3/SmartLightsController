export const turnOnLights = async (
    lightId: number,
    body: { on: boolean }
): Promise<void> => {
    const res = await fetch(
        `http://192.168.0.70/api/rDUOUCsiWz7SPMyXHv9Exbcw7xgYh7yr3Dsq61bj/lights/${lightId}/state`,
        {
            method: "PUT",
            body: JSON.stringify(body), // { "on": true }
        }
    );

    if (!res.ok) {
        throw new Error(`${res.statusText}`);
    }
};