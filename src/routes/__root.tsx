import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import {Footer} from "../Components/Footer.tsx";
import {Box} from "@mui/material";
import { NavBar} from "../Components/NavBar.tsx";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (

      <Box>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%"
            }}
        >
            <NavBar />
            <Box component="main" sx={{ flexGrow: 3, p: 3 }}>
                <Outlet />
            </Box>
        </Box>
          <Footer />
      </Box>

  )
}
