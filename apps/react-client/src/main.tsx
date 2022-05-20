import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { QueryClientProvider } from 'react-query';
import { BrowserRouter } from 'react-router-dom';

import App from './app/app';
import { queryClient } from './lib';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </BrowserRouter>
);
