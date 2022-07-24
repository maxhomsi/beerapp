import React, { Component } from 'react';
import axios from 'axios'
import './App.css';

import BeerCard from './BeerCard'

class App extends Component {
  constructor() {
    super();

    this.state = {
        arrayOfBeer: []
      
    };
  } 
componentDidMount(){ //eh um metodo eh um componente que eh chamado qdo solicitado

  axios.get('https://api.punkapi.com/v2/beers') //pegando o API para ser utilizado
    .then (res => {
      const arrayOfBeer = res.data
      console.log("res", res)
      this.setState({ arrayOfBeer })
    })
}


render() {
  return (
    <div className="App">
      <header className="App-header">
      <ol>{this.state.arrayOfBeer.map((beer, index) => {
        return(
          <BeerCard 
          key = {index} 
          name={beer.name}
          image_url={beer.image_url} 
          tagline={beer.tagline} 
          first_brewed={beer.first_brewed}  
          abv={beer.abv} 
          description={beer.description}
          handleClick={this.handleClick}/>
        )
      })}</ol>   
         
      </header>
    </div>
  );
}
}

export default App;
