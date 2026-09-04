import { useState, useEffect } from "react"

export default function App(){
  const [products, setProducts] = [
    {
        id: 1,
        img: '',
        title: 'Nike P-6000',
        price: 120,
        desc: 'Стильные и удобные кроссовки Nike P-6000 с ретро-дизайном. Подходят для повседневной носки и активного образа жизни.',
        category: 'Shoes',
        brand: 'Nike',
        rating: 4.7,
        stock: 15
    },

    {
        id: 2,
        img: '',
        title: 'Samsung Galaxy S26',
        price: 799,
        desc: 'Современный смартфон Samsung Galaxy S26 с ярким дисплеем, мощным процессором и качественной камерой.',
        category: 'Electronics',
        brand: 'Samsung',
        rating: 4.8,
        stock: 10
    },

    {
        id: 3,
        img: '',
        title: 'The North Face 800 Jacket',
        price: 400,
        desc: 'Тёплая зимняя куртка The North Face с утеплителем 800-fill. Отличный вариант для холодной и влажной погоды.',
        category: 'Clothing',
        brand: 'The North Face',
        rating: 4.6,
        stock: 8
    },

    {
        id: 4,
        img: '',
        title: 'AirPods Pro 3',
        price: 250,
        desc: 'Беспроводные наушники Apple AirPods Pro 3 с активным шумоподавлением, качественным звуком и компактным дизайном.',
        category: 'Electronics',
        brand: 'Apple',
        rating: 4.9,
        stock: 20
    },

    {
        id: 5,
        img: '',
        title: 'Levi’s 501 Jeans',
        price: 160,
        desc: 'Классические джинсы Levi’s 501 с прямым кроем. Универсальная модель для повседневного образа.',
        category: 'Clothing',
        brand: 'Levi’s',
        rating: 4.5,
        stock: 12
    },

    {
        id: 6,
        img: '',
        title: 'MacBook Air M5',
        price: 1200,
        desc: 'Тонкий и лёгкий MacBook Air с чипом Apple M5. Подходит для работы, учёбы, программирования и повседневных задач.',
        category: 'Electronics',
        brand: 'Apple',
        rating: 4.9,
        stock: 7
    }
  ];
  return (
    <div></div>
  )
}