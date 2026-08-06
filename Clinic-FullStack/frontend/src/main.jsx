import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ApiProvider } from '@/app/providers/ApiProvider';
import { AppRouter } from '@/app/router';
import '@/styles/index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ApiProvider>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ApiProvider>
  </StrictMode>,
);
