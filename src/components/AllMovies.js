import React, { Component } from 'react'
import {gql} from 'apollo-boost';
import {Query} from 'react-apollo';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

const getMovies = gql`
{
    allMovies {
      name
      description
      year
      director{name}
    }
  }
`

class AllMovies extends Component {
  render() {
    return (
      <div>
              <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tüm Filmler</TableCell>
            <TableCell align="right">Film Adı</TableCell>
            <TableCell align="right">Yönetmen</TableCell>
            <TableCell align="right">Film Yılı</TableCell>
            <TableCell align="right">Film Açıklaması</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          


                <Query query={getMovies} >
                    {({loading, data, error}) => {
                    if (loading) return <TableCell>Geliyom knk</TableCell>
                    if (error) return <TableCell>Bi sorun var knk</TableCell>
                    else return data.allMovies.map((res, index) => (
                        
                            <TableRow key={index}>
                                <TableCell component="th" scope="row">
                                    #
                                </TableCell>
                                <TableCell align="right">{res.name}</TableCell>
                                <TableCell align="right">{res.director.name}</TableCell>
                                <TableCell align="right">{res.year}</TableCell>
                                <TableCell align="right">{res.description}</TableCell>
                            </TableRow>
                        
                    ))
                    }}
                </Query>

     
          
        </TableBody>
      </Table>

      </div>
    )
  }
}

export default AllMovies;


{/* <Query query={getMovies} >
{({loading, data, error}) => {
            if (loading) return <li>Geliyom knk</li>
            if (error) return <li>Bi sorun var knk</li>
            else return data.allMovies.map((res, index) => <li key={index}>{res.name}</li>)
        }}
</Query> */}