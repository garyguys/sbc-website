import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Fonts are self-hosted rather than pulled from Google Fonts: one less
// third-party request, no render-blocking round trip, and nothing about the
// visitor is shared with a third party just to draw text.
import '@fontsource-variable/inter'
import '@fontsource-variable/source-serif-4'

import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
