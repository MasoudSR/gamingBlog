import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

import { ThemeProvider } from '@mui/material'
import theme from './theme/mui.js'
import "./theme/index.css"

const client = new ApolloClient({
  uri: import.meta.env.VITE_REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </ApolloProvider>
  ,
)
