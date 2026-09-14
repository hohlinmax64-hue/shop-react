import ProductList from "../components/ProductList.jsx"

export default function Home({products, addToCart}) {
    return (
        <div>
            <ProductList products={products} addToCart={addToCart}/>
        </div>
    )
}