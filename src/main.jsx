import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { BrowserRouter } from 'react-router-dom'
import Router from './Router.jsx'
import { MovieProvider } from './context/MovieContext.jsx';
import { APIMovieProvider } from './context/APIMovieContext.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <MovieProvider>
      <APIMovieProvider>

        <Router />
      </APIMovieProvider>
    </MovieProvider>
  </BrowserRouter>,
)
