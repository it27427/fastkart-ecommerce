import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from '@/App.jsx';
import store from '@/store/store.js';
import { Toaster } from '@/components/ui/toaster.jsx';

// Import styles
import 'swiper/css';
import '@/assets/css/icofont.min.css';
import '@/assets/css/index.css';

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <Provider store={store}>
      <StrictMode>
        <App />
        <Toaster />
      </StrictMode>
    </Provider>
  </BrowserRouter>
);
