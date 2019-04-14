import React, { Component } from 'react'
import {Query} from 'react-apollo';
import {gql} from 'apollo-boost';

import Select from '@material-ui/core/Select';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';

const style = {
    display : 'block',
    margin : '10px'
}

const getDirectors = gql`
{
    allDirectors {
      name
    }
  }
`

class AddMovie extends Component {
  render() {
    return (
      <div>
        <h2 style={style}>Film Ekle</h2>
        <form>
            <input style={style} placeholder='Film Adı'></input>
            <input style={style} placeholder='Film Yılı'></input>
            <input style={style} placeholder='Film Açıklaması'></input>
            <input style={style} placeholder='Film Adı'></input>
            <Select
            style={style}
            inputProps={{
              name: 'age',
              id: 'age-simple',
            }}
            >
                <Query query={getDirectors}> 
                {({loading, data, error}) => {
                    if (loading) return <li>Geliyom knk</li>
                    if (error) return <li>Bi sorun var knk</li>
                    else return data.allDirectors.map((res, index) => <MenuItem key={index}>{res.name}</MenuItem>)
                }}
                </Query>
            </Select>
            <button style={style} type="submit">Gönder</button>
        </form>
      </div>
    )
  }
}



export default AddMovie;

