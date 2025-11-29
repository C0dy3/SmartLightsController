import {SettingsPage} from "../Page/SettingsPage.tsx";

export function SettingsContainer(){

    const settings = ["Bridge IP", "API version", "Number of connected lights"]



    return(
        <SettingsPage
            settings={settings}
            handleOnSettingsChange={}

        />
    )
}