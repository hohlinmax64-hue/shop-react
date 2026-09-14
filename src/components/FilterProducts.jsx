export default function FilterProducts({selected ,setSelected}){
    return(
        <>
            <select className='filter-category' value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option className='category-item' value="All">All</option>
                <option className='category-item' value="Clothing">Clothing</option>
                <option className='category-item' value="Electronics">Electronics</option>
            </select>
        </>
    )
}