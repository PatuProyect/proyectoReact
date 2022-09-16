import React from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../../Context/CartContext";


export const CartWidget = ()=>{
    const {totalProducts} = useCartContext();

    return(
        <>
            <i to="/cart" className="bi bi-cart3"></i>
            <span>{totalProducts() || ""}</span>
        </>
    )
}

export default CartWidget;