import Hero from "./Hero";

// TMDB API KEY 612e050e1124264eaec5aec7a02aae59
// https://api.themoviedb.org/3/search/movie?api_key=612e050e1124264eaec5aec7a02aae59&language=en-US&query=Quest%20For%20Camelot&page=1&include_adult=false

const SearchView = ({keyword, searchResults}) => {
  const title=`You are searching for ${keyword}`
//   console.log(searchResults)
  return (
    <>
      <Hero text={title} />
    </>
  );
};

export default SearchView;
