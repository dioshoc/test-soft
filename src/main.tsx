import React from 'react'
import ReactDOM from 'react-dom/client'
import Main from './pages/Main.tsx'
import './app/index.scss'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)