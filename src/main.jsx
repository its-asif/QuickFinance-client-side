import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import router from './router/Router.jsx';
import { ContextApi } from './AuthProvider/Contextapi.jsx';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from 'react-hot-toast';
const queryClient = new QueryClient()


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ContextApi>
    <QueryClientProvider client={queryClient}>
    <Toaster
    position="top-right"
    reverseOrder={true}
    />
      <RouterProvider router={router} />
    </QueryClientProvider>
    </ContextApi>
  </React.StrictMode>,
)
