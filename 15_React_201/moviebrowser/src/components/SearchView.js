import Hero from "./Hero";
import { Link } from "react-router-dom";

// TMDB API KEY 612e050e1124264eaec5aec7a02aae59

const SearchView = ({keyword, searchResults}) => {

const MovieCard = ({ movie}) => {
  const posterUrl = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
  const detailUrl = `/movies/${movie.id}`;
  return (
    <div className="col-lg-3 col-md-6 col-7 my-4">
      <div className="card" style={{width: '18em'}}>
        <img src={posterUrl} className="card-img-top" alt="{movie.title}" />
        <div className="card-body">
          <h5 className="card-title">{movie.title}</h5>
          {/* <p className="card-text">{movie.overview}</p> */}
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>

  )
}

let title="";
  if(searchResults.length > 0){
     title =`You are searching for ${keyword}`;    
  }else{
    title = `No results for ${keyword}`;
  }

  const resultsHtml = searchResults.map((obj, i) =>{
    return <MovieCard movie={obj} key={i} />
  })

  return (
    <>
      <Hero text={title} />
      {resultsHtml &&
      <div className="container">
        <div className="row">
          {resultsHtml}
        </div>
      </div>}
    </>
  );
};

export default SearchView;
