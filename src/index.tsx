import React from 'react'
import ReactDOM from 'react-dom/client'
import reportWebVitals from './reportWebVitals'
import './index.css'
import '../node_modules/react-modal-video/css/modal-video.css';
import { ChakraProvider } from '@chakra-ui/react'
import { theme } from './theme'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './router'
import { QueryClientProvider, QueryClient } from 'react-query';

console.log(theme)
const queryClient = new QueryClient()
const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
)

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <ChakraProvider resetCSS theme={theme}>
                    <Router />
                </ChakraProvider>
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
)

reportWebVitals()
