import * as React from 'react';
import ItemCount from '../../components/Counter/ItemCount';
import { useCartContext } from '../../Context/CartContext';
import { Link } from 'react-router-dom';


const ItemDetail = ({ data }) => {
	const {addProduct} = useCartContext();

	const onAdd = (quantity) =>{
		console.log(`compraste ${quantity}`)
		addProduct(data, quantity);
	}

	return (
		<div>
			<p>{data.title}</p>
			<img src={data.images} alt="Object" />
			<p>Price: $ {data.price}</p>
			<p>Description: {data.description} </p>
			<ItemCount initial={1} stock={15} onAdd={onAdd} /> 
			<Link to="/cart">
				<h2>Ir al carrito</h2>
			</Link> 
		</div>
			
	);
};

export default ItemDetail;