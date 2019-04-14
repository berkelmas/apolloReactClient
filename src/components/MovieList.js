import React, { Component } from 'react'
import {gql} from 'apollo-boost';
import {graphql} from 'react-apollo';

const sorgu = gql`
{
  director(id: "5cafd1a9a1e31a3bd82cf8df") {
    name
    movies{name}
  }
}

`

class MovieList extends Component {

  veri() {
    let {loading, director} = this.props.data;
    if (loading) return <li>Geliyom knk</li>
     else       return (
      <div>
        {director.movies.map((res, index) => <li key={index}>{res.name}</li>)}
      </div>
    )
  }

  render() {
      return (
        <div>
          <ul>
            {this.veri()}
          </ul>
        </div>
      )
  }
}

export default graphql(sorgu)(MovieList);