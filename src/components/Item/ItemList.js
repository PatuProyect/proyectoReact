import React, { useState, useEffect } from 'react';
import Item from "./Item"
import "./StylesItem.css"
import { Link } from 'react-router-dom';
import axios from 'axios';


const ItemList = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://api.escuelajs.co/api/v1/products/').then((res) =>
			setUsers(res.data)
		);
	}, []);

	return (
		<div className='containerCard'>
			{users.map((user) => {
				return (
					<div key={user.id}>
						<Link to={`/detail/${user.id}`} className='Link'>
							<Item data={user} />
						</Link>
					</div>
				);
			})}
		</div>
	);  
};

export default ItemList;