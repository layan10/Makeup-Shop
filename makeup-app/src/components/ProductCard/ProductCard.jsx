import "./ProductCard.css";

import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { useContext } from "react";
import {ProductsContext} from "../../contexts/ProductsContext";

export default function ProductCard({ product, withInfo }) {
  const { removeProduct } = useContext(ProductsContext);
  const handleAddToCart = () => {}
  const handleDelete = () => {
    removeProduct(product.id);
  }
  const isAdmin = localStorage.getItem('isAdmin');
  return (
    <div className="product-card">
            {!withInfo && <Link to={`/products/${product.id}`}>
                <img src={product.image} alt={product.name} />
                <h3>{product.name}</h3>
            </Link>
            }
            {withInfo && 
                <div>
                    <img src={product.image} alt={product.name} />
                    <h3>{product.name}</h3>
                    <p> Description: <span>{product.description}</span></p>
                </div>
            }
            <p> Price: <span>{product.price} $</span></p>
            <button className="add-to-cart" onClick={handleAddToCart}>Add to Cart</button>
            {isAdmin && <div className="admin-edit">
                <Link to={`/products/edit/${product.id}`}><button className="edit-button">Edit</button> </Link>
                <button className="delete-button" onClick={handleDelete}>Delete</button>
            </div>}
  
        </div>
  );
}
ProductCard.propTypes = {
    product: PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
    }).isRequired,
    withInfo: PropTypes.bool.isRequired,
};

