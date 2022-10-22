import React, { useState } from "react";

import { collection, addDoc } from "firebase/firestore";
import { db } from "../../Firebase/config";
import "./Shop.css";
import TextField from "@mui/material/TextField";
import { useCartContext } from "../../Context/CartContext";

const initialState = {
    name: "",
    lastName: "",
    city: "",
};

const Shop = () => {

    const [values, setValues] = useState(initialState);

    const [purchaseID, setPurchaseID] = useState("");
    const { cart, totalProducts, totalPrice } = useCartContext();

    const handleChange = (e) => {
        const { value, name } = e.target;
        setValues({ ...values, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const docRef = await addDoc(collection(db, "compra"), {
                buyer: values,
                items: cart,
                subtotal: totalPrice(),
                total: totalProducts(),
            });
            setPurchaseID(docRef.id);
            setValues(initialState);
        } catch (error) {
            console.error("Error adding document: ", error);
        }
    };

    return (
        <div>
            <h1>Shop</h1>
            <form className="FormContainer" onSubmit={handleSubmit}>
                <TextField
                    placeholder="Name"
                    style={{ margin: 10, width: 400 }}
                    name="name"
                    value={values.name}
                    onChange={handleChange}
                />
                <TextField
                    placeholder="Last Name"
                    style={{ margin: 10, width: 400 }}
                    name="lastName"
                    value={values.lastName}
                    onChange={handleChange}
                />
                <TextField
                    placeholder="City"
                    style={{ margin: 10, width: 400 }}
                    name="city"
                    value={values.city}
                    onChange={handleChange}
                />
                <button className="btn-1" type="submit">
                    Submit
                </button>
            </form>
            <div className="container-p">
                {purchaseID && (
                    <div>
                        <h2>Thank you for your purchase!</h2>
                        <p>Your purchase ID is: {purchaseID}</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Shop;
