import React, { useState, useEffect } from 'react';
import Item from "./Item"
import "./StylesItem.css"

const ItemList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		fetch('https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10')
			.then((response) => response.json())
			.then((json) => setUsers(json));
	}, []);

	return (
		<div className='containerCard'>
			{users.map((user) => {
				return <Item key={user.id} data={user} /> 
			})}
		</div>
	);
};

export default ItemList;