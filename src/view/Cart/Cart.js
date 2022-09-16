import React from 'react'
import { Link } from 'react-router-dom';
import ItemCart from '../../components/ItemCart/ItemCart';
import { useCartContext } from '../../Context/CartContext'
import "./Cart.css"

export default function Cart() {
  const {cart, totalPrice} = useCartContext();

  if (cart.length === 0){
    return(
      <>
        <p>No hay elementos en el carrito</p>
        <Link to="/">Hacer compras</Link>
      </>
    )
  }

  return (
    <>

      <div className='carrito'>
      {
        cart.map(product => <ItemCart key={product.id} product={product}/>)
      }
      </div>

      <h1>  Total: $ {totalPrice()}</h1>

    </>
  )
}
