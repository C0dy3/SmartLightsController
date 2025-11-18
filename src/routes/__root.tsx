import * as React from 'react'
import { Outlet, createRootRoute } from '@tanstack/react-router'
import {Footer} from "../Components/Footer.tsx";
import {Box} from "@mui/material";
import {DrawerContainer} from "../Components/NavBar.tsx";
import {Header} from "../Components/Header.tsx";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
      <Box sx={{ display: "flex", flexDirection: "column", height: "auto", width: "auto" }}>
          <Box sx={{ flex: 1,
              alignItems: "center",
              flexGrow: 10,
              display: "flex",
              justifyContent: "space-between" ,
              flexDirection: "column" }}>
              <DrawerContainer />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", flex: 1 }}>
              <Header />
              <Box sx={{ flexGrow: 1, overflow: "auto" }}>
                  <Outlet /> 
              </Box>
              <Footer />
          </Box>
      </Box>
  )
}
