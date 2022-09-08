import React from "react";
import { Link } from 'react-router-dom';


const Category = () => {

    
    return (
        <div>
            <h1>Category</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <Link className="nav-link" to="/shoes">Shoes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/clothes">Clothes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/electronics">Electronics</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="furniture">Furniture</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="others">Others</Link>
                </li>
            </ul>
        </div>
    );
};

export default Category;