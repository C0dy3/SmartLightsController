import { createFileRoute } from '@tanstack/react-router'
import {ConnectPage} from "../Page/ConnectPage.tsx";
import {ConnectContainer} from "../Containers/ConnectContainer.tsx";


// @ts-ignore
export const Route = createFileRoute('/connect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ConnectContainer/>
}
