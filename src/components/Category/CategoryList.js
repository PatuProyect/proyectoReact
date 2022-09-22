/* import React, { useState, useEffect } from 'react';
import Item from "../Item/Item"
import { Link, useParams } from 'react-router-dom';
import axios from 'axios';


const CategoryList = () => {
	const [users, setUsers] = useState([]);
	
	const {categoryid} = useParams();
	
	useEffect(() => {
			axios(`https://api.escuelajs.co/api/v1/categories/${categoryid}/products`).then((res) =>
					setUsers(res.data)
			); 
		}, [categoryid]);

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

export default CategoryList; */