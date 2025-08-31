import "./App.css";
import {useState, useEffect} from 'react';
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutView from "./components/AboutView";
import SearchView from "./components/SearchView";
import { Switch, Route } from "react-router-dom";
import MovieView from "./components/MovieView";
import { Redirect } from "react-router-dom";
import FouroFourView from "./components/FouroFourView";

function App() {

  const [searchResults, setSearchResults] = useState([]);
  const [searchText, setSearchText] = useState('');


  useEffect(()=>{
    if(searchText){
      // console.log(searchText, " is the searchText");
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=612e050e1124264eaec5aec7a02aae59&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        setSearchResults(data.results)
      })

    }


  }, [searchText]);

  return (
    <div>
      <Navbar searchText={searchText} setSearchText={setSearchText}/>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/about" component={AboutView} />
        <Route path="/search">
          <SearchView keyword={searchText} searchResults={searchResults} />
        </Route>
        <Route path="/movies/:id" component={MovieView} />
        <Route path="/404">
          <FouroFourView />
        </Route>
        <Route>
          <Redirect to="/404" />
        </Route>
      </Switch>
    </div>
  );

}

export default App;
