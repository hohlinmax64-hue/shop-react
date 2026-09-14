export default function ProductCard({products, addToCart}) {

    return (
        <div className="list">
            {products.map((item) => (
                <div className="card" key={item.id}>
                    <img className="card-img" src={item.img} alt={item.title} />
                    <div className="card-text">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-price"><span>{item.price}</span> $</p>
                        <p className="card-desc">Описание: {item.desc}</p>
                        <p className="card-category">Категория: {item.category}</p>
                        <p className="card-brand">Бренд: {item.brand}</p>
                        <p className="card-rating">Рейтинг: {item.rating}⭐️</p>
                        <p className="card-stock">Количество товаров: {item.stock}</p>
                        <button className="btn btn-addToCart" disabled={item.stock === 0} onClick={() => addToCart(item)}>Add to cart</button>
                        <button className='btn btn-addToFavorite'>Add to Favorite</button>
                    </div>
                </div>
            ))}
        </div>
    )
}