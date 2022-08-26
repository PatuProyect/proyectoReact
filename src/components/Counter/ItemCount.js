import React,{Component} from 'react';
import "./Styles.css";

let stock = 15;


class Contador extends Component {
	constructor() {
		super();

		this.state = {
			counter: 0,
			stockCarrito: 0
		};

	}

	handlerCounterUp = () => {
		if (this.state.counter < stock && stock > 0) {
			this.setState({ counter: this.state.counter + 1 });
		} else {
			alert("Sin Stock")
		};
		
	};
	handlerCounterDown = () => {
		if (this.state.counter > 0) {
			this.setState({ counter: this.state.counter - 1 });
		}
	};

	handlerCounterAdd = () =>{
		if(this.state.counter > 0 && this.state.stockCarrito >= 0 && stock > 0 && this.state.counter <= stock) {
			this.setState({stockCarrito: this.state.counter + this.state.stockCarrito});
			stock = stock - this.state.counter;
		}else{
			alert("Sin Stock")
		}
	}

	handlerCounterRemove=()=>{
		if(this.state.stockCarrito > 0 && stock >= 0){
			stock = this.state.stockCarrito + stock;
			this.setState({stockCarrito: 0})
		}
	}

	render() {
		return ( 
				
				<div className='CounterSection'>
					<p>Stock Total {stock}</p>
					<p>Cantidad Seleccionada: {this.state.counter}</p>
					<div className='btn-section'>
						<button onClick={this.handlerCounterDown}>-</button>
						<button onClick={this.handlerCounterUp}>+</button>
					</div>
					<p>Stock en Carrito {this.state.stockCarrito}</p>
					<div className='btn-section'>
						<button onClick={this.handlerCounterAdd}>Agregar</button>
						<button onClick={this.handlerCounterRemove}>Vaciar</button>

					</div>
				</div>
			
		);
	}
} export default Contador;