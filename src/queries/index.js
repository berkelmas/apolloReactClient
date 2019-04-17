import {gql} from 'apollo-boost';

export const getDirectors = gql`
{
    allDirectors {
      id
      name
      born_year
      bio
    }
  }
`


export const getMovies = gql`
{
    allMovies {
      name
      description
      year
      director{name}
    }
  }
`

export const addMovieMutation = gql`
mutation ($name: String!, $description: String!, $year: Int!, $director_id: String!) {
  addMovie(name: $name, description: $description, year: $year, director_id: $director_id) {
    name
  }
}
`
