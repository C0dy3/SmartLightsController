import { createFileRoute } from '@tanstack/react-router'
import {MainPage} from "../Page/MainPage.tsx";

export const Route = createFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <MainPage />
  )
}
