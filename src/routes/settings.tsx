import { createFileRoute } from '@tanstack/react-router'
import {SettingsContainer} from "../Containers/SettingsContainer.tsx";

export const Route = createFileRoute('/settings')({
    component: RouteComponent,
})

function RouteComponent() {
    return (
        <SettingsContainer />
    )
}
