import { Routes, Route } from 'react-router-dom'
import Header from "./components/Header.jsx";
import ProductList from "./components/ProductList.jsx";
import Home from './pages/Home.jsx'
import Cart from './pages/Cart.jsx'
import Favorites from './pages/Favorites.jsx'
import './index.css'

import { useState, useEffect } from "react"

import nikeImg from './assets/img/nike.jpg'
import samsungImg from './assets/img/samsung.jpg'
import jackeImg from './assets/img/theNothFace.jpg'
import airPodsImg from './assets/img/airpods.jpg'
import jeansImg from './assets/img/Jeans.jpg'
import laptopImg from './assets/img/macbook.jpg'

export default function App(){
    const [products, setProducts] = useState([
    {
        id: 1, 
        img: nikeImg, 
        title: 'Nike P-6000', 
        price: 120, 
        desc: 'Стильные и удобные кроссовки Nike P-6000 с ретро-дизайном. Подходят для повседневной носки и активного образа жизни.', 
        category: 'Clothing', 
        brand: 'Nike', 
        rating: 4.7, 
        stock: 15
    },

    {
        id: 2,
        img: samsungImg,
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
        img: jackeImg,
        title: 'The North Face 800',
        price: 400,
        desc: 'Тёплая зимняя куртка The North Face с утеплителем 800-fill. Отличный вариант для холодной и влажной погоды.',
        category: 'Clothing',
        brand: 'The North Face',
        rating: 4.6,
        stock: 8
    },

    {
        id: 4,
        img: airPodsImg,
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
        img: jeansImg,
        title: 'Levi’s 501 Jeans',
        price: 160,
        desc: 'Классические джинсы Levi’s 501 с прямым кроем. Универсальная модель джинс для повседневного стильного образа.',
        category: 'Clothing',
        brand: 'Levi’s',
        rating: 4.5,
        stock: 12
    },

    {
        id: 6,
        img: laptopImg,
        title: 'MacBook Air M5',
        price: 1200,
        desc: 'Тонкий и лёгкий MacBook Air с чипом Apple M5. Подходит для работы, учёбы, программирования и повседневных задач.',
        category: 'Electronics',
        brand: 'Apple',
        rating: 4.9,
        stock: 7
    }
  ])
    const [selected, setSelected] = useState('All')
    const [input, setInput] = useState('')
    const [sortPrise, setSortPrise] = useState('default')

        function handleFilter(products){
            let value = products.filter(item => {
                if(selected === item.category) return true
                if(selected === 'All') return true

                return false
            })
            return value
        }
        function handleSearch(input, products){
            if(!input){
                return products
            }
            let searchProducts = products.filter(({title}) => {
                    return title.toLowerCase().includes(input.toLowerCase())
                })
            return searchProducts
        }

        function handleSort(products){
            if(sortPrise === 'default') return products
            if(sortPrise === 'min') {
                return [...products].sort((a, b) => a.price - b.price)
            }
            if(sortPrise === 'max') {
                return [...products].sort((a, b) => b.price - a.price)
            }
        }
  
        useEffect(() => {
            let debounc = setTimeout(() => {
            handleSearch(input, products)
        }, 500)

            return () => {
                clearTimeout(debounc)
            }
        }, [input])

        const filteredProducts = handleFilter(products)
        const searchedProducts = handleSearch(input, filteredProducts);
        const finalProducts = handleSort(searchedProducts)
  return (
    <>
      <Header 
      selected={selected} 
      setSelected={setSelected} 
      input={input} 
      setInput={setInput}
      sortPrice={sortPrise}
      setSortPrice={setSortPrise}/>

    <Routes>
      <Route path='/' 
      element={
          <Home products={finalProducts}/>}/>
      <Route path='/Cart' element={<Cart />}/>
      <Route path='/Favorites' element={<Favorites />}/>
    </Routes> 
    </>
  )
}