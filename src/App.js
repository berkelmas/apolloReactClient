import React, { Component } from 'react';

import ApolloClient from 'apollo-boost'; 
import {ApolloProvider} from 'react-apollo';

import MovieList from './components/MovieList';

const client = new ApolloClient({
  uri : 'http://localhost:3001/graphql'   // Buraya graphql sunucumuzun endpointini veriyoruz.
});  

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >  
        <div>
          <MovieList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
