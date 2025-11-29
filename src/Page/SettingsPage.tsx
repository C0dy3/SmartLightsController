
interface SettignsPageProps{
    settings: string[],
    handleOnSettingsChange: (settings: string[]) => void,
}



export function SettingsPage(props : SettignsPageProps){
    return(
    <Box>
        <Typography>Settings</Typography>
        <Box>
            {props.settings.map((setting) => (
                <Typography>
                    {setting}
                </Typography>
                ))}
        </Box>
    </Box>
    )
}