import { useState } from 'react'
import pic from '../assets/pic.jpg'

export const Menu = () => {
  const foods = [
    {
      id: 'adkdkjnc',
      thumb: pic,
      name: 'Columbus',
      category: 'Burger',
      price: 9,
    },
    {
      id: 'dhjzdjn',
      thumb: pic,
      name: 'Ariata',
      category: 'Salad',
      price: 8,
    },

    {
      id: 'mqsknc3',
      thumb: pic,
      name: 'Hahaha',
      category: 'Chiken',
      price: 25,
    },

    {
      id: 'pdsfr5',
      thumb: pic,
      name: 'Coke',
      category: 'Salad',
      price: 9,
    },

    {
      id: 'kjlncjbd6',
      thumb: pic,
      name: 'New York Fries',
      category: 'Salad',
      price: 5,
    },

    {
      id: 'vcscs',
      thumb: pic,
      name: 'Burger Poulet',
      category: 'Burger',
      price: 30,
    },

    {
      id: 'bchsbkcd8',
      thumb: pic,
      name: 'Ariata',
      category: 'Salad',
      price: 9,
    },

    {
      id: 'hhbshds6',
      thumb: pic,
      name: 'Ariata',
      category: 'Salad',
      price: 9,
    },

    {
      id: 'iuzhduz1',
      thumb: pic,
      name: 'Ariata',
      category: 'Salad',
      price: 9,
    },

    {
      id: 'ncjkncsc2',
      thumb: pic,
      name: 'Ariata',
      category: 'Salad',
      price: 9,
    },

    {
      id: 'djjvdnvd10',
      thumb: pic,
      name: 'Ariata',
      category: 'Salad',
      price: 9,
    },

    {
      id: 'jncjqsbcjs63',
      thumb: pic,
      name: 'Ariata',
      category: 'Salad',
      price: 9,
    },
  ]

  const [datas, setDatas] = useState(foods)

  return (
    <div className="p-3 gap gap-5 d-flex flex-wrap justify-content-center">
      {datas.map(({ id, thumb, name, price }) => (
        <div
          className="d-flex flex-column justify-content-between food-card gap gap-2 bg-light p-3 rounded-2 shadow-lg"
          key={id}
          style={{
            width: 200,
          }}
        >
          <div style={{ width: 'max-content' }} className="align-self-center">
            <img src={thumb} alt={`Photo de ${name}`} className="food-thumb" />
          </div>
          <span className="food-name fs-5">{name}</span>
          <div className="d-flex align-items-center justify-content-between">
            <span className="food-price text-warning">{price}€</span>
            <button className="btn btn-warning ml-3 text-white">Ajouter</button>
          </div>
        </div>
      ))}
    </div>
  )
}
