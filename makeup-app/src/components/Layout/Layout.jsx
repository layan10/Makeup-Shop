import { Outlet, useLocation } from 'react-router-dom';
import PageBackround from '../PageBackround/PageBackround'; 
import NavBar from "../../components/NavBar/NavBar"; 

export default function RootLayout() {
    const location = useLocation();
    const isHomePage = location.pathname === '/Makeup-Shop/';

    return (
        <>  
            {!isHomePage && <NavBar />}
            <PageBackround />
            <Outlet />
        </>
    );
}