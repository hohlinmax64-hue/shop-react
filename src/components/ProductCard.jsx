export default function ProductCard({card}) {

    return (
        <div>
            {card.map((item) => (
                <div className="card" key={item.id}>
                    <img className="card-img" src={item.img} alt={item.title} />
                    <div className="card-text">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-price">{item.price}</p>
                        <p className="card-desc">{item.desc}</p>
                        <p className="card-category">{item.category}</p>
                        <p className="card-brand">{item.brand}</p>
                        <p className="card-rating">{item.rating}</p>
                        <p className="card-stock">{item.stock}</p>
                    </div>
                    <button className="btn-addToCart">Add to cart</button>
                </div>
            ))}
        </div>
    )
}