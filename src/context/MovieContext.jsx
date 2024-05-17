import { useState, useEffect, createContext } from "react";
import axios from 'axios'  

export const MovieContext = createContext()

export const MovieProvider = (props) => {

    const [movies, setMovies] = useState()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    const API_URL = `https://api.themoviedb.org/3/movie/top_rated`
    const options = {
        method: 'GET',
        headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYmNmMGYyZWE0YTk4MmIyODlmMmJmM2UzZGUyNDc3ZiIsInN1YiI6IjY2NDM0ZTBkMjJjMzFjZjI0MTZhYjExOSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.aK3M7Yn74M6gfJsND5y3tTmsxBMlrNacCx7MPUi7Nqo'
        }
    };
    
    const fetchMovies = async () => {
    
        try{
            const response = await axios.get(API_URL, options)
            setMovies(response.data.results)
            console.log(response.data.results)
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

    return (
        <MovieContext.Provider value={[movies, setMovies]}>
        {/* <MovieContext.Provider value={[movies, setMovies, loading, setLoading, error, setError]}> */}
            {!loading && props.children}
            {/* {props.children} */}
        </MovieContext.Provider>
    )
}
