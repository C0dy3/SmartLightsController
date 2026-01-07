import {SettingsPage} from "../Page/SettingsPage.tsx";
import {useHue} from "../Context/HueBridgeContext.tsx";

export function SettingsContainer(){

    const settings = ["Bridge IP", "API version", "Number of connected lights"]

    const hueData = useHue();

    const handleChange = (changes : string[]) => {
        //There will be the connect logic implemented
        settings[0] = hueData.ip
        settings[1] = "v.1"
    }

    return(
        <SettingsPage
            settings={settings}
            handleOnSettingsChange={handleChange}
            hueData={hueData?.hueData}
        />
    )
}