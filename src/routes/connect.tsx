import { createFileRoute } from '@tanstack/react-router'
import {ConnectContainer} from "../Containers/ConnectContainer.tsx";


export const Route = createFileRoute('/connect')({
  component: RouteComponent,
})

function RouteComponent() {
  return <ConnectContainer/>
}
