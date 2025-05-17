import React from 'react';
import ReactDom from 'react-dom/client';

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import {Login} from './Login.tsx'
import './index.css'
import App from './App.tsx'

type RouteObject = {
  path: string,
  element: React.ReactNode;
  children?: RouteObject
}

const routes: RouteObject[] = [
  {
    path: '/',
    element: <Login />
  }
]
const router = createBrowserRouter(routes);

ReactDom.createRoot(document.getElementById('root') as HTMLElement).render(<React.StrictMode>
  <RouterProvider router={router} />
</React.StrictMode>)


