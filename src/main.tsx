import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {ConnectPage} from "./Page/ConnectPage.tsx";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";



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
    <ConnectPage />
      </QueryClientProvider>
  </StrictMode>,
)
