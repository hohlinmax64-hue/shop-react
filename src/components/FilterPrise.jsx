export default function FilterPrise({sortPrice, setSortPrice}) {
    return (
        <>
            <select className="filter-price" value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
                <option className="filter-price-item" value='default'>Без сортировки</option>
                <option className="filter-price-item" value='min'>Мин цене</option>
                <option className="filter-price-item" value='max'>Макс цене</option>
            </select>
        </>
    )
}