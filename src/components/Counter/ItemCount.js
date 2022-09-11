import React, { useState, useEffect} from 'react';
import "./Styles.css";


const ItemCount = ({initial, stock, onAdd}) => {

	const [count, setCount] = useState(initial);

	const increase = ()=>{
		setCount(count + 1);
	}

	const decrease = ()=>{
		setCount(count - 1);
	}

	useEffect(()=>{
		setCount(parseInt(initial))
	},[initial])

		return ( 
				<div className='CounterSection'>
					<p>Stock Total {stock}</p>
					<p>Cantidad Seleccionada: {count}</p>
					<div className='btn-section'>
						<button disabled={count <= 1} onClick={decrease}>-</button>
						<button disabled={count >= stock} onClick={increase}>+</button>
					</div>
					<div>
						<button disabled={stock <= 0} onClick={()=> onAdd(count)}>Agregar al carrito</button>
					</div>
				</div>
		);
} 
export default ItemCount;