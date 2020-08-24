import React, { Component } from 'react';
import { Button, Form } from 'react-bootstrap';
import Pokemon from './../src/Components/Pokemon/index';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Switch, Route, Redirect, Link } from 'react-router-dom';
import axios from 'axios';



class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      pokemonlist: [],
      random: null,
      completePokemon: null
    }
    this.updateRandomPokemon = this.updateRandomPokemon.bind(this);

  }
  async componentDidMount() {
    try {
      let list = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150');
      let random = list.data.results[Math.floor(Math.random() * 150)];
      let completePokemon = await axios.get(random.url);

      this.setState({
        pokemonlist: list.data.results,
        random: random,
        completePokemon: completePokemon.data

      });

    } catch (error) {
      console.log(error);
    }
  }
  async updateRandomPokemon(event) {
    event.preventDefault();
    try {
      let random = this.state.listOfPokemons[Math.floor(Math.random() * 150)];
      let completePokemon = await axios.get(random.url);
      this.setState({
        completePokemon: completePokemon.data
      });
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    const pokemon = this.state.completePokemon;
    return (
      <div className="App">
        <BrowserRouter>
          <h1>Pokemon</h1>
          {this.state.completePokemon && (
            <>
              <Switch>
                <Route
                  path="*"
                  render={props => (
                    <Pokemon completePokemon={this.state.completePokemon} {...props} />
                  )}
                />
              </Switch>
              <Form>
                <Button onClick={this.updateRandomPokemon}>Outro Pokemon?</Button>
              </Form>
            </>
          )}
        </BrowserRouter>
      </div>
    );
  }
}


export default App;
