import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <nav>
            <Link style={{marginInline:'20px'}}to='/'>Movies from my API</Link>
            <Link to='/movies'>Movies</Link>
        </nav>
    )
}
export default NavBar