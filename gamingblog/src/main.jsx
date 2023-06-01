import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import "./theme/index.css"

import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client"

const client = new ApolloClient({
  uri: import.meta.env.VITE_REACT_APP_GRAPHQL_URI,
  cache: new InMemoryCache()
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
  ,
)
