import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './components/App/App';

import './styles/globals.css';

const container = document.getElementById('root');
if (!container) throw new Error('Root container not found');
createRoot(container).render(<App some="test" />);
