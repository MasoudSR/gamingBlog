import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { BrowserRouter } from "react-router-dom"

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import { ThemeProvider } from '@mui/material'
import theme from './theme/mui.js'
import "./theme/index.css"
import "vazirmatn/Vazirmatn-Variable-font-face.css"

const client = new ApolloClient({
  uri: import.meta.env.VITE_REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ApolloProvider client={client}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </ApolloProvider>
  </BrowserRouter>
  ,
)
