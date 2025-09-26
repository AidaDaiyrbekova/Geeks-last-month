import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { QueryProvider } from './app/providers/QueryProvider.jsx'
import { AntdProvider } from './app/providers/AntdProvider.jsx'
import { RouterRoot } from './app/providers/RouterProvider.jsx'
import { RoutesRoot } from './app/router/routes.jsx'

createRoot(document.getElementById('root')).render(
    <QueryProvider>
        <AntdProvider>
            <RouterRoot>
                <RoutesRoot  />
            </RouterRoot>
        </AntdProvider>
    </QueryProvider>
)
