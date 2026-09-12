export default function FilterProducts({selected ,setSelected}){
    return(
        <>
            <select value={selected} onChange={(e) => setSelected(e.target.value)}>
                <option value="All">All</option>
                <option value="Clothing">Clothing</option>
                <option value="Electronics">Electronics</option>
            </select>
        </>
    )
}