import * as React from 'react';
import ItemCount from '../../components/Counter/ItemCount';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';
import { useState } from 'react';

const ItemDetail = ({ data }) => {
	const [goToCart, setGoToCart] = useState(false);
	const {addProduct} = useCartContext();

	const onAdd = (quantity) =>{
		setGoToCart(true)
		alert(`Añadiste ${quantity} unidades al carrito`)
		addProduct(data, quantity);
	}

	return (
		<div>
			<p>{data.title}</p>
			<img src={data.images} alt="Object" />
			<p>Price: $ {data.price}</p>
			<p>Description: {data.descripcion} </p>
			{
				goToCart ? <Link to="/cart"><h2>Ir al carrito</h2></Link> : <ItemCount initial={1} stock={15} onAdd={onAdd} />
			}
		</div>
			
	);
};

export default ItemDetail;