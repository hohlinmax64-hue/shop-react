import ProductList from "../components/ProductList.jsx"

export default function Home({products}){
    return (
        <div>
            <ProductList products={products}/>
        </div>
    )
}