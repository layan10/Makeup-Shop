import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

export default function NavBar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('email');
        localStorage.removeItem('password');
        localStorage.removeItem('isAdmin');
        navigate('/');

    }
    return (
    <ul>
        <Link to="/products">
            <li>Products</li>
        </Link>
        <Link to="/products/cart">
            <li>Cart</li>
        </Link>
        <button className="logout-button" onClick={handleLogout}>Logout</button>
    </ul>
    
    )
}