
import { createRoot } from 'react-dom/client'

import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {createRouter, RouterProvider} from "@tanstack/react-router";
import {TanStackRouterDevtools} from "@tanstack/react-router-devtools";
import {routeTree} from "./routeTree.gen.ts";
import {StrictMode} from "react";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {NotFoundPage} from "./Page/NotFoundPage.tsx";
import {HueProvider} from "./Context/HueBridgeContext.tsx";


const queryClient = new QueryClient({
    defaultOptions: {queries: {retry: 3, retryDelay: 1000}}
})


const router 
    = createRouter({routeTree, defaultNotFoundComponent: () => {
        return(
            <NotFoundPage/>
        )
    }})


createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router} />
            <ReactQueryDevtools initialIsOpen={false} client={queryClient}/>
            <TanStackRouterDevtools initialIsOpen={false} router={router}/>
        </QueryClientProvider>
    </StrictMode>
)
