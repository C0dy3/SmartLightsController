import { Outlet, createRootRoute } from '@tanstack/react-router'
import {Footer} from "../Components/Footer.tsx";
import {Box} from "@mui/material";
import { NavBar} from "../Components/NavBar.tsx";
import backgroud from "../Images/background_Image.jpg"
import { HueProvider } from "../Context/HueBridgeContext.tsx";

export const Route = createRootRoute({
  component: RootComponent,
})

function RootComponent() {
  return (
      <HueProvider>
      <Box sx={{
          display: "flex", 
          backgroundImage: `url(${backgroud})`, 
          backgroundRepeat: "no-repeat", 
          backgroundSize: "cover",}}>
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
            }}
        >
            <NavBar />
            <Box component="main" sx={{ flexGrow: 3, p: 3, 
                display: "flex", 
                flexDirection: "column" }}>
                <Outlet />
            </Box>
            <Box sx={{
                display:"flex", 
                flexDirection: "column",
                alignItems: "center",
                minWidth: "100vh"
            }}>
            <Footer />
            </Box>
        </Box>
      </Box>
      </HueProvider>

  )
}
