import React, { Component } from 'react'
import {gql} from 'apollo-boost';
import {Query, graphql} from 'react-apollo';

const sorgu = gql`
{
  director(id: "5cafd1a9a1e31a3bd82cf8df") {
    name
    movies{name}
  }
}

`

class MovieList extends Component {

  render() {
      return (
        <div>
          <ul>
            <Query query={sorgu} > 
              {({loading, data, error}) => {
                if (loading) return <li>Geliyor knk</li>
                if (error) return <li>Bir Sorun oluştu knk</li>
                else return <li>{data.director.name }</li>
              }}
            </Query>
          </ul>
        </div>
      )
  }
}

export default MovieList;