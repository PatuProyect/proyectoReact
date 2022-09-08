import React from "react";
import { Link } from 'react-router-dom';


const Category = () => {

    
    return (
        <div>
            <h1>Category</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/category/4">Shoes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/1">Clothes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/2">Electronics</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/3">Furniture</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/category/5">Others</Link>
                </li>
            </ul>
        </div>
    );
};

export default Category;