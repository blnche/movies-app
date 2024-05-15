import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import MovieCard from "./MovieCard";

const Movie = () => {
    let {id} = useParams()
    console.log(id)

    const API_URL = `https://api.themoviedb.org/3/movie/${id}`
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmNmMGYyZWE0YTk4MmIyODlmMmJmM2UzZGUyNDc3ZiIsInN1YiI6IjY2NDM0ZTBkMjJjMzFjZjI0MTZhYjExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aK3M7Yn74M6gfJsND5y3tTmsxBMlrNacCx7MPUi7Nqo'
        }
    };
  

  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState(null)

  const fetchMovies = async () => {
    try{
      const response = await axios.get(API_URL, options)
      console.log(response.data)
      setMovies(response.data)
    }
    catch (err) {
      console.log(err);
      setError(err);
    }
    finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchMovies()
  }, [])

  if(error) return <p>{error}</p>
  if(loading) return <p>Loading...</p>

    return (
        <>
        <h2>Movie</h2>
            <MovieCard {...movies}/>
        </>
    )
}
export default Movie