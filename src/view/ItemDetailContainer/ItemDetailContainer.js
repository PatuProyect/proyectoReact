import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import { getFirestore, doc, getDoc} from "firebase/firestore"
import ItemDetail from './ItemDetail';



const ItemDetailContainer = () => {
	const [user, setUser] = useState([]);

	let { id } = useParams();


	useEffect(() => {
		const querydb = getFirestore();
		const queryDoc = doc(querydb,"productos", id)
		getDoc(queryDoc)
		.then(res=> setUser({id: res.id,...res.data()}))
}, [id]);   


	return (
		<div className='cardDetail'>
					<div>
						<ItemDetail data={user} />
					</div>
		</div>
	);  
};

export default ItemDetailContainer;