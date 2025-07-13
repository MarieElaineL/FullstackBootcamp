import logo from './logo.svg';
import './App.css';
import React from 'react';

// Rendering the listed items of the Types list
class TypeRow extends React.Component {
  render(){
    return(
      <li>{this.props.name}</li>
    )
  }
}

class Pokemon extends React.Component{

  // Makes sure that page is blank on load ///////////////////
  constructor(){
    super()
      this.state = {
        loadedPkmn: false,
        img: null,
        name: null,
        dex: null,
        typeText: null,
        types: [],
        locations: null,
        loadedPkmn: true,
      }
  }

  // API fetcher and completer ///////////////////////////////
  getNewPokemon(){
    const randomNumber = Math.round(Math.random() *1025)
    const url =`https://pokeapi.co/api/v2/pokemon/${randomNumber}`
    fetch(url)
      .then(response => response.json())

      .then(data =>{
        console.log(data)
          this.setState({
            img: data.sprites.front_default,
            name: data.name,
            dex: `#${data.order}`,
            typeText: 'Type:',
            types: data.types,
            locations: data.location_area_encounters,
          })
      })
  }

  // Final render area ///////////////////////////////////////
  render(){

    const elements = this.state.types.map((typeObj, i) => {
      return <TypeRow key={typeObj.type.name} name={typeObj.type.name} url={typeObj.type.url} />
    })
    return(
      <div>
        {
          this.state.loadedPkmn && (
          <div>
            <img src={this.state.img} alt={this.state.name} />
            <h1>{this.state.name}</h1>
            <h2>{this.state.dex}</h2>
              <h3>{this.state.typeText}</h3>
              <ul>
                  {elements}
              </ul>
            {this.state.locations && (
              <h2 className='locationBtn'><a href={this.state.locations}>Click here to see you can find them</a></h2>
            )}
          </div>
          )
        }

        <button type="button" className="btn" onClick={() => this.getNewPokemon()}>
          Show me a random pokemon!
        </button>

      </div>
    )
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
       <Pokemon />
      </header>
    </div>
  );
}

export default App;
