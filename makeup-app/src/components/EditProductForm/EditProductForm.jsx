import "./EditProductForm.css";

import { useState,useContext } from "react";
import { ProductsContext } from "../../contexts/ProductsContext";
export default function EditProductForm() {

    const {addProduct } = useContext(ProductsContext);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState(1);
    const [image, setImage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Product:", name, description, price, image);
        addProduct({name, description, price, image});
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
                        name="name"
                        value={name}
                        onChange = {(e) => setName(e.target.value)}
                    />
                </div>
                <div className="edit-form-group">
                    <label htmlFor="description">Description</label>
                    <input
                        type="text"
                        id="description"
                        name="description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </div>

            
                <div className="edit-form-group">
                    <label htmlFor="price">Price</label>
                    <input
                        type="number"
                        id="price"
                        name="price"
                        min={1}
                        value={price}
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </div>

                <div className="edit-form-group">
                    <label htmlFor="image">Image</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={image}
                        onChange={(e) => setImage(e.target.value)}
                    />
                </div>
            
                <button type="submit" className="save-button" >Save</button>
            </form>

        </div>
       
    )
}