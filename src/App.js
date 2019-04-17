import React, { Component } from 'react';

import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';

import AllMovies from './components/AllMovies';
import AllDirectors from './components/AllDirectors';
import AddMovie from './components/AddMovie';

import Grid from '@material-ui/core/Grid';

const client = new ApolloClient({
  uri : 'http://localhost:3001/graphql'   // Buraya graphql sunucumuzun endpointini veriyoruz.
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client} >
        <Grid justify="center" alignItems="center" direction="row" container spacing={24}>
          <Grid item xs={6}>
            <AllDirectors />
          </Grid>
          <Grid item xs={6}>
            <AllMovies />
          </Grid>
          <Grid item xs={2}>
            <AddMovie />
          </Grid>
        </Grid>
      </ApolloProvider>
    );
  }
}

export default App;
