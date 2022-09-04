import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
	const [user, setUser] = useState([]);

	let { id } = useParams();

//Axios
//https://api.escuelajs.co/api/v1/products/

	useEffect(() => {
	axios(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) =>
		setUser(res.data)
	);
}, [id]);  

Object.keys(user)

	return (
		<div className='cardDetail'>
					<div>
						<ItemDetail data={user} />
					</div>
		</div>
	);  
};

export default ItemDetailContainer;