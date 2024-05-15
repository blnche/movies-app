import { Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Movie from './Movie.jsx'
import NavBar from './NavBar.jsx'

const Router = () => {
    return (
        <>
            <NavBar/>
            <Routes>
                <Route path='/' element={<App/>} />
                <Route path='/movies/:id' element={<Movie/>}/>
                <Route path='*' element={<p>Error</p>}/>
            </Routes>
        </>
    )
}
export default Router