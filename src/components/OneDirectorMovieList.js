import React, { Component } from 'react'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';

const director_id = '5cafd1a9a1e31a3bd82cf8df'
const sorgu = gql`
{
  director(id: "${director_id}") {
    name
    movies{name}
  }
}
`

class OneDirectorMovieList extends Component {

  render() {
      return (
        <div>
          <h1>Film Listesi</h1>   
          <ul>
            <Query query={sorgu} > 
              {({loading, data, error}) => {
                if (loading) return <li>Geliyor knk</li>
                if (error) return <li>Bir Sorun oluştu knk</li>
                else return data.director.movies.map((res, index) => <li key={index}>{res.name}</li>)
              }}
            </Query>
          </ul>
            <Query query={sorgu}>

            {({loading, data, error}) => {
              if (loading) return <h2>Getiriom knk</h2>
              if (error) return <h2>Hata var knk bak bi </h2>
              else return <h2>Yönetmen Adı: {data.director.name}</h2>
            }}
            </Query>
        </div>
      )
  }
}

export default OneDirectorMovieList;