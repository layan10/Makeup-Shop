import "./NavBar.css";
import { Link } from "react-router-dom";
export default function NavBar() {
    return (
    <ul>
        <Link to="/">
            <li>Home</li>
        </Link>
        <Link to="/products">
            <li>Products</li>
        </Link>
        <Link to="/products/:productId">
            <li>Product Info</li>
        </Link>
        <Link to="/products/edit">
            <li>Edit Products</li>
        </Link>
        <Link to="/products/cart">
            <li>Cart</li>
        </Link>
    </ul>
    
    )
}