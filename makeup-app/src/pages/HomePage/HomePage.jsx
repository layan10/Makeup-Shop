import "./HomePage.css";
import logo from "../../assets/Logo.svg";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UsersContext } from "../../contexts/UsersContext";
import { FAILED_LOGIN } from "../../models/constants";
import LoginForm from "../../components/LoginForm/LoginForm";

export default function HomePage() {
    const { users, addUser } = useContext(UsersContext);
    const navigate = useNavigate();
    console.log("handleLoginusers", users);

    const handleLogin = ({ email, password }) => {  
        console.log("Attempting login with:", email);
        console.log("Available users:", users);  
        
        const user = users.find(
            (user) => user.email === email && user.password === password
        );
        console.log("Found user:", user);

        if(user) {
            if(user.permission === 'A') {
                localStorage.setItem('isAdmin', 'true');
            }
            localStorage.setItem('email', email);
            localStorage.setItem('password', password);
            navigate('/products');
        } else {
            alert(FAILED_LOGIN);
        }
    }

    const handleSignup = ({ email, password, username }) => {
        const user = {
            email,
            password,
            username,
            permission: 'U'
        };
        addUser(user); 
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        navigate('/products');
    };

    return (
        <>  
            <LoginForm logo={logo} handleLogin={handleLogin} handleSignup={handleSignup} />
        </>
    )
}