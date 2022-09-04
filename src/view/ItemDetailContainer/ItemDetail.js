import * as React from 'react';

import Contador from '../../components/Counter/ItemCount';

const ItemDetail = ({ data }) => {
	return (
		<div>
			<p>{data.title}</p>
			<img src={data.images} />
			<p>Price: $ {data.price}</p>
			<p>Description: {data.description} </p>
			<Contador /> 
		</div>
			
	);
};

export default ItemDetail;