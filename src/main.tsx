
import { createRoot } from 'react-dom/client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {Header} from "./Components/Header.tsx";
import {Box} from "@mui/material";

import {Footer} from "./Components/Footer.tsx";
import {DrawerContainer} from "./Components/NavBar.tsx";
import {MainPage} from "./Page/MainPage.tsx";



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
    <QueryClientProvider client={queryClient}>
        <Box sx={{ display: "flex", flexDirection: "row", height: "auto" }}>
            <Box sx={{ width: "auto", flexShrink: 0 }}>
                <DrawerContainer />
            </Box>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    minWidth: 0, 
                    height: "auto",
                    minHeight: "auto"
                }}
            >
                <Header />
                <Box sx={{ flexGrow: 1, position: "relative", overflow: "auto" }}>
                    <MainPage />
                </Box>
                <Box>
                <Footer />
                </Box>
            </Box>
        </Box>
    </QueryClientProvider>
)
