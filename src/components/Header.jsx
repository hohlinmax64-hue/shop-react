import { Link } from 'react-router-dom'
import Search from './Search.jsx'

export default function Header(){
    return (
        <header>
            <h2>Logo</h2>
            <Search />
            
            <div className='header-pages'>
                <Link to='/'>Home</Link>
                <Link to='/Cart'>Cart</Link>
                <Link to='/Favorites'>Favorites</Link>
            </div>
        </header>
    )
}