import { NextUIProvider } from '@nextui-org/react';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import './index.css';
import { router } from './routes/routes.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <NextUIProvider>
      <main className='dark text-foreground bg-gradient-to-b from-[#252428] to-black'>
        <RouterProvider router={router} />
      </main>
    </NextUIProvider>
  </React.StrictMode>
);
