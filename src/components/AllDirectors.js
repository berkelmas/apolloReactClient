import React, { Component } from 'react'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';


const getDirectors = gql`
{
    allDirectors {
      name
    }
  }
`

class AllDirectors extends Component {
  render() {
    return (
      <div>
          <h1>Tüm Yönetmenler</h1>
        <ul>
        <Query query={getDirectors}> 
            {({loading, data, error}) => {
                if (loading) return <li>Geliyom knk</li>
                if (error) return <li>Bi sorun var knk</li>
                else return data.allDirectors.map((res, index) => <li key={index}>{res.name}</li>)
            }}
        </Query>
        </ul>
      </div>
    )
  }
}

export default AllDirectors;