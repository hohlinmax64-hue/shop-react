export default function Cart({productsCart, removeFromCart}) {
    return (
        <div className='cart-list list'>
            {productsCart.length > 0 ? productsCart.map((item) => (
                <div className="card" key={item.cartId}>
                    <img className="card-img" src={item.product.img} alt={item.product.title} />
                    <div className="card-text">
                        <h2 className="card-title">{item.product.title}</h2>
                        <p className="card-price"><span>{item.product.price}</span>$</p>
                        <p className="card-desc">Описание: {item.product.desc}</p>
                        <p className="card-category">Категория: {item.product.category}</p>
                        <p className="card-brand">Бренд: {item.product.brand}</p>
                        <p className="card-rating">Рейтинг: {item.product.rating}⭐️</p>
                        <button className="btn btn-removeFromCart" onClick={() => removeFromCart(item.cartId)}>Remove from cart</button>
                    </div>
                </div>
            )) : 'Корзнина пуста'}
        </div>
    )
}