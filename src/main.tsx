import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

// query / mutation

// query = buscar dados (get)
// mutatio = criar, alterar e deletar dados

import './styles/global.css'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
)
