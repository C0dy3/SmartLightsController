import { createFileRoute } from '@tanstack/react-router'
import {MainPage} from "../Page/MainPage.tsx";

export const Route = createFileRoute('/lights')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <MainPage />
  )
}
