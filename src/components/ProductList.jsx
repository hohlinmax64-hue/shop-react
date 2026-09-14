import ProductCard from "./ProductCard.jsx"

export default function ProductList({products, addToCart}) {
    return (
        <div className="products-cards">
            <ProductCard products={products} addToCart={addToCart}/>
        </div>
        
    )    
}