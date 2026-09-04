import ProductCard from "./ProductCard.jsx"

export default function ProductList({products}) {
    return (
        <div>
            <ProductCard card={products}/>
        </div>
        
    )    
}