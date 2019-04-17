import React, { Component } from 'react'
import {Query} from 'react-apollo';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import {getDirectors} from '../queries'

class AllDirectors extends Component {
  render() {
    return (
      <div>
    <Table>
        <TableHead>
          <TableRow>
            <TableCell>Tüm Filmler</TableCell>
            <TableCell align="right">Yönetmen Adı</TableCell>
            <TableCell align="right">Doğum Yılı</TableCell>
            <TableCell align="right">Bio</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <Query query={getDirectors} >
                {({loading, data, error}) => {
                if (loading) return <TableRow><TableCell>Geliyom knk</TableCell></TableRow>
                if (error) return <TableRow><TableCell>Sorun Var knk</TableCell></TableRow>
                else return data.allDirectors.map((res, index) => (

                        <TableRow key={index}>
                            <TableCell component="th" scope="row">#</TableCell>
                            <TableCell align="right">{res.name}</TableCell>
                            <TableCell align="right">{res.born_year}</TableCell>
                            <TableCell align="right">{res.bio}</TableCell>
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

export default AllDirectors;
