export default function FilterPrise({sortPrice, setSortPrice}) {
    return (
        <div>
            <select value={sortPrice} onChange={(e) => setSortPrice(e.target.value)}>
                <option value='default'>Без сортировки</option>
                <option value='min'>Мин цене</option>
                <option value='max'>Макс цене</option>
            </select>
        </div>
    )
}