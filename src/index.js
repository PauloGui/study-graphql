import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

const client = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'https://countries.trevorblades.com'
});


ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
)