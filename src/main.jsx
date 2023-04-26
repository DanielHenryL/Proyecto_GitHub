import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles.css'
import { GithubApp } from './githubApp'
import {
  BrowserRouter
} from "react-router-dom";
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <GithubApp />
    </BrowserRouter>
  </React.StrictMode>,
)
