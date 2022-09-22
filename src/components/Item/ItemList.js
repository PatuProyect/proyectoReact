import React, { useState, useEffect } from 'react';
import Item from "./Item"
import "./StylesItem.css"
import { Link } from 'react-router-dom';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore"
import { useParams } from 'react-router-dom';


const ItemList = () => {
	const [users, setUsers] = useState([]);
	const { categoriaId } = useParams();

	useEffect(() => {
		
		const querydb = getFirestore();
		const queryCollection = collection(querydb, "productos");

		if (categoriaId) {
			const queryFilter = query(queryCollection, where("categoria", "==", categoriaId))
			getDocs(queryFilter)
			.then(res => setUsers(res.docs.map(product => ({ id: product.id, ...product.data() }))))
		}else{
			getDocs(queryCollection)
			.then(res => setUsers(res.docs.map(product => ({ id: product.id, ...product.data() }))))
		}
}, [categoriaId]);


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