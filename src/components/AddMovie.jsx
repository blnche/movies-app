import { useContext, useState } from "react"
import { APIMovieContext } from "../context/APIMovieContext"

const AddMovie = () => {

    const [movies, setMovies, moviesIsUpdated, setMoviesIsUpdated] = useContext(APIMovieContext)
    console.log(movies)
    const [movie, setMovie] = useState({
        id: movies.length + 1,
        title:'',
        overview:'',
        release_date:'',
        vote_average:'',
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        setMovies([...movies, movie])
        setMovie({
            id: movies.length + 1,
            title:'',
            overview:'',
            release_date:'',
            vote_average:'',
        })
    }
    console.log(movie)
    // console.log(movies)

    return (
        <div style={{backgroundColor:'#EEEEEE', padding:'1rem', borderRadius:'0.5rem', margin:'1rem', width:'100%'}}>
            <h3>Add a movie</h3>
            <form 
                style={{display:'flex', justifyContent:'center', marginBlock:'30px', flexWrap:'wrap'}}
                onSubmit={handleSubmit}    
            >

                <input type="text" placeholder="title" value={movie.title} onChange={e => setMovie({...movie, title : e.target.value})} />
                <input type="text" placeholder="release date" value={movie.release_date} onChange={e => setMovie({...movie, release_date : e.target.value})}/>
                <input type="text" placeholder="rating average" value={movie.vote_average} onChange={e => setMovie({...movie, vote_average : e.target.value})}/>
                <input type="text" placeholder="summary" value={movie.overview} onChange={e => setMovie({...movie, overview : e.target.value})}/>
                <input type="submit" />

            </form>
        </div>
    )

}

export default AddMovie