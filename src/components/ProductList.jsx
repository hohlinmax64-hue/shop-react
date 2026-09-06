import ProductCard from "./ProductCard.jsx"

export default function ProductList({products}) {
    return (
        <div className="products-cards">
            <ProductCard card={products}/>
        </div>
        
    )    
}