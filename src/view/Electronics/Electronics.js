import React, { useState, useEffect } from 'react';
import Item from "../../components/Item/Item"
import { Link } from 'react-router-dom';
import axios from 'axios';


const Electronics = () => {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		axios('https://api.escuelajs.co/api/v1/categories/2/products').then((res) =>
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

export default Electronics;