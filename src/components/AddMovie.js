import React, {Component} from 'react';
import {Query, Mutation} from 'react-apollo';

import {addMovieMutation, getDirectors} from '../queries';

class AddMovie extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      year: '',
      description: '',
      director_id: ''
    }
  }

  updateState(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  render(){
    console.log(this.state.director_id);
    return(
      <div>
        <Mutation mutation={addMovieMutation} >
        {(addMovieFunc, {loading, error, data}) => (
          <form
            onSubmit={e => {
              e.preventDefault();
              addMovieFunc({variables:
                {
                  name: this.state.name,
                  description: this.state.description,
                  year: parseInt(this.state.year),
                  director_id: this.state.director_id}
                }
              );
              // input field larımızı ve statelerimizi tekrar boş hale getirelim.
              this.setState({
                name: '',
                description: '',
                year: '',
                director_id: ''
              })
            }}
          >
            <input onChange={this.updateState.bind(this)} value={this.state.name} placeholder="Fİlm Adı" name="name" />
            <input onChange={this.updateState.bind(this)} value={this.state.year} placeholder="Fİlm Yılı" name="year" />
            <input onChange={this.updateState.bind(this)} value={this.state.description} placeholder="Film Açıklaması" name="description" />

            <select onChange={this.updateState.bind(this)} value={this.state.director_id} name='director_id'>
              <option value=''>Lütfen Seçim Yapınız...</option>
            <Query query={getDirectors}>
              {({data, loading, error}) => {
                  if (loading) return <option value='deneme'>Geliyor Knk</option>
                  if (error) return <option value='deneme'>Bi sorun var knk</option>
                  else return data.allDirectors.map(res => <option value={res.id} key={res.id}>{res.name}</option>)
              }}
            </Query>
            </select>
            <button type="submit">Film Ekle</button>
          </form>
        )}
        </Mutation>
      </div>
    )
  }
}

export default AddMovie;
