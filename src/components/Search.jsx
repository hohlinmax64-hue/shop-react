export default function Search({input, setInput}){
    return (
        <>
            <input value={input} onChange={(e) => setInput(e.target.value)} className="input" type="text" placeholder="поиск товаров"/>
        </>
    )
}