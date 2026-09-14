import { Link } from 'react-router-dom'
import Search from './Search.jsx'
import FilterProducts from './FilterProducts.jsx'
import FilterPrise from "./FilterPrise.jsx";

export default function Header({selected ,setSelected, input, setInput, sortPrice, setSortPrice}) {
    return (
        <header className='header'>
            <h2 className='header-logo'>Logo</h2>
            <div className="header-forms">
                <Search input={input} setInput={setInput}/>
                <div className='header-sorts'>
                    <FilterProducts selected={selected} setSelected={setSelected}/>
                    <FilterPrise sortPrice={sortPrice} setSortPrice={setSortPrice}/>
                </div>
            </div>


            <div className='header-pages'>
                <Link className='pages' to='/'>Home</Link>
                <Link className='pages' to='/Cart'>Cart</Link>
                <Link className='pages' to='/Favorites'>Favorites</Link>
            </div>
        </header>
    )
}