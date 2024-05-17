import { useContext, useEffect } from "react"
import { APIMovieContext } from "../context/APIMovieContext"
import { useParams } from "react-router-dom"

const UpdateMovie = (props) => {
    const {id} = useParams()
    // console.log(id)

    const [movies, setMovies, movieId, setMovieId, movie, setMovie, moviesIsUpdated, setMoviesIsUpdated] = useContext(APIMovieContext)
    console.log(movieId)
    setMovieId(parseInt(id))
    // console.log(movieId)
    console.log(movie)
    // console.log(movies)
    
    // useEffect(() => {
    //     console.log(movies)
    // }, [movies])

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(movies)
        const moviesUpdated = movies.map((element, index, moviesA) => {
            if(element.id === movieId) {
                // console.log(element)
                // console.log(index)
                // console.log(movie)
                return movie
            } else {
                return element
            }
            
        })
        console.log(moviesUpdated)
        setMovies(moviesUpdated)
        setMoviesIsUpdated(true)
        setMovieId(null)
        setMovie(null)
    }

    return (
        <>
            <h3>Update {movie && movie.title}</h3>
            <form onSubmit={handleSubmit}>

                <input type="text" placeholder="title" value={movie && movie.title} onChange={e => setMovie({...movie, title : e.target.value})} />
                <input type="text" placeholder="release date" value={movie && movie.release_date} onChange={e => setMovie({...movie, release_date : e.target.value})}/>
                <input type="text" placeholder="rating average" value={movie && movie.vote_average} onChange={e => setMovie({...movie, vote_average : e.target.value})}/>
                <input type="text" placeholder="summary" value={movie && movie.overview} onChange={e => setMovie({...movie, overview : e.target.value})}/>

                <input type="submit" />

            </form>
        </>
    )
}

export default UpdateMovie