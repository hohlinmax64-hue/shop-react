export default function ProductCard({card}) {

    return (
        <div>
            {card.map((item) => (
                <div key={item.id}>
                    <img src={item.img} alt={item.title} />
                    <div>
                        <h2>{item.title}</h2>
                        <p>{item.price}</p>
                        <p>{item.desc}</p>
                        <p>{item.category}</p>
                        <p>{item.brand}</p>
                        <p>{item.rating}</p>
                        <p>{item.stock}</p>
                    </div>
                    <button>Add to cart</button>
                </div>
            ))}
        </div>
    )
}