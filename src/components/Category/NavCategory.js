import React from "react";
import { NavLink } from 'react-router-dom';


const Category = () => {

    
    return (
        <div>
            <h1>Category</h1>
            <ul className="nav justify-content-center">
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria/Shoes">Shoes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria/Clothes">Clothes</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria/Electronics">Electronics</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria/Furniture">Furniture</NavLink>
                </li>
                <li className="nav-item">
                    <NavLink className="nav-link" to="/categoria/others">Others</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Category;