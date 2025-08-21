import { useEffect, useState } from "react";
import Hero from "./Hero";
import { useParams } from "react-router-dom";

const MovieView = () => {

    // Mononoke id 1322218
    const { id } = useParams(); 
    const [movieDetails, setMovieDetails] = useState({});
    const [ isLoading, setIsLoading ] = useState(true);

    useEffect(()=> {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=612e050e1124264eaec5aec7a02aae59&language=en-US`)
        .then(response => response.json())
        .then(data => {
            setTimeout(() => {
                setMovieDetails(data);
                setIsLoading(false);
            }, 500);
        })
    }, [id]);

    function renderMovieDetails(){
        if(isLoading){
            return <Hero text="Loading..." />
        }
        if(movieDetails){

            // handle missing background image when absent
            const posterPath = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`;
            const backdropURL = `https://image.tmdb.org/t/p/original${movieDetails.backdrop_path}`
            return(
                <>
                    <Hero text={movieDetails.title} backdrop={backdropURL}/>
                    <div className="row my-5 mx-3" >
                        <div className="col-md-3">
                            <img src={posterPath} alt="..." className="img-fluid shadow rounded" />
                        </div>
                        <div className="col-md-9">
                            <h2>{movieDetails.title}</h2>
                            <h4>Original title: {movieDetails.original_title}</h4> 
                            <p className="mt-4">{movieDetails.overview}</p>
                        </div>
                    </div>
                </>
            )
        }
    }

    return renderMovieDetails();
};

export default MovieView;
