import { createFileRoute } from '@tanstack/react-router'
import {AbouteContainer} from "../Containers/AbouteContainer.tsx";

// @ts-ignore
export const Route = createFileRoute('/about')({
  component: RouteComponent,
})

function RouteComponent() {
  return <AbouteContainer/>
}
