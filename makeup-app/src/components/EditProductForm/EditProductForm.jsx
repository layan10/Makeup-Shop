import "./EditProductForm.css";

import { useState,useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
export default function EditProductForm() {

    const {addProduct } = useContext(ProductsContext);
    const [product, setProduct] = useState({
        name: "",
        description: "",
        price: 1,
        image: ""
    });

    const handleChange = (e) => {
        setProduct({
            ...product,
            [e.target.name]: e.target.value
        });
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product:", product);
        addProduct(product);
        alert("Product added successfully");
    }

    return (
        <div className="edit-form-container">

            <form className="edit-product-form" onSubmit={handleSubmit}>
                <div className="edit-form-group">
                    <label htmlFor= "name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={product.name}
                        onChange={handleChange}
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        value={product.description}
                        onChange={handleChange}
                    />
                </div>

            
                <div className="edit-form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        min={0}
                        value={product.price}
                        onChange={handleChange}
                    />
                </div>

                <div className="edit-form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        id="image"
                        value={product.image}
                        onChange={handleChange}
                    />
                </div>
            
                <button type="submit" className="save-button" >Save</button>
            </form>

        </div>
       
    )
}