import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('isAdmin');
        navigate('/Makeup-Shop/');

    }
    return (
    <ul>
        <Link to="/Makeup-Shop/products">
            <li>Products</li>
        </Link>
        <Link to="/Makeup-Shop/products/cart">
            <li>Cart</li>
        </Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
    </ul>
    
    )
}