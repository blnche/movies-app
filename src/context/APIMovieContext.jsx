import { useState, useEffect, createContext } from "react";
import axios from 'axios'  

export const APIMovieContext = createContext()

export const APIMovieProvider = (props) => {

    const [movieId, setMovieId] = useState(null)
    const [movie, setMovie] = useState({
        title:'',
        overview:'',
        release_date:'',
        vote_average:'',
    })
    const [movies, setMovies] = useState(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)
    const [moviesIsUpdated, setMoviesIsUpdated] = useState(false)

    
    const fetchMovies = async () => {
    
        try{
            if(movieId) {
                const response = await axios.get(`http://localhost:3000/api/movies/${movieId}`)
                if(response.data <= 0) {
                    movies.map(element => {
                        if(parseInt(element.id) === parseInt(movieId)) {
                            setMovie(element)
                        }
                    })
                } else {
                    setMovie(response.data)
                }
            } if(!movies) {
                console.log(movies)
                console.log('triggered')
                const response = await axios.get('http://localhost:3000/api/movies')
                setMovies(response.data)
                // console.log(response.data)
            } 
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
    }, [movieId])

    return (
        <APIMovieContext.Provider value={[movies, setMovies, movieId, setMovieId, movie, setMovie, moviesIsUpdated, setMoviesIsUpdated]}>
            {!loading && props.children}
        </APIMovieContext.Provider>
    )
}
