import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './index.css'
import '../node_modules/react-modal-video/css/modal-video.css';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { BrowserRouter } from 'react-router-dom'
import { QueryClientProvider, QueryClient } from 'react-query';
import App from './App';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import app_logo from './assets/appLogo';

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            refetchOnWindowFocus: false,
            retry: false,
            staleTime: Infinity,
            cacheTime: Infinity,
        },
    },
})

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ChakraProvider resetCSS theme={theme}>
                    <HelmetProvider>
                        <Helmet>
                            <link rel="icon" href={app_logo} />
                            <link rel="apple-touch-icon" href={app_logo} />
                        </Helmet>
                        <App />
                    </HelmetProvider>
                </ChakraProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)

reportWebVitals()
