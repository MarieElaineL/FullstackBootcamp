import logo from './logo.svg';
import './App.css';
// import MyCustomItem from './MyCustomItem';
import React from 'react';


class Pokemon extends React.Component{
  render(){
    return(
      <h1>Pokemon module placeholder</h1>
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
