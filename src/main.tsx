import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ConnectPage} from "./Page/ConnectPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Header} from "./Components/Header.tsx";
import {Box} from "@mui/material";
import {RouterProvider} from "@tanstack/react-router";
import {Footer} from "./Components/Footer.tsx";



const queryClient = new QueryClient({
    defaultOptions: {queries: {retry: 3, retryDelay: 1000}}
})

export const links = {
    home: "/",
    lights: {
        home: "/lights"
    },
    groups: {
        home: "/groups"
    },
    scenes: {
        home: "/scenes"
    },
    notFoundRoute: "*"
} as const;


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <QueryClientProvider client={queryClient}>
          <Box sx={{display: 'flex', flexDirection: 'column'}}>
          <Header />
      <Box sx={{flexGrow: 1, position: 'relative'}}>
          <ConnectPage />
      </Box>
              <Footer />
          </Box>
      </QueryClientProvider>
  </StrictMode>,
)
