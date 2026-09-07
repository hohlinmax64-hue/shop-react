import { Link } from 'react-router-dom'
import Search from './Search.jsx'
import FilterProducts from './FilterProducts.jsx'

export default function Header({selected ,setSelected}){
    return (
        <header className='header'>
            <h2 className='header-logo'>Logo</h2>
            <Search />
            <FilterProducts selected={selected} setSelected={setSelected}/>
            <div className='header-pages'>
                <Link className='pages' to='/'>Home</Link>
                <Link className='pages' to='/Cart'>Cart</Link>
                <Link className='pages' to='/Favorites'>Favorites</Link>
            </div>
        </header>
    )
}