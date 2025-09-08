import { createFileRoute } from '@tanstack/react-router'
import {GroupsPage} from "../Page/GroupsPage.tsx";

export const Route = createFileRoute('/groups')({
  component: RouteComponent,
})

function RouteComponent() {
  return (
      <GroupsPage />
  )
}
