import { Outlet } from 'react-router-dom';
import PageBackround from '../PageBackround/PageBackround'; 
import NavBar from "../../components/NavBar/NavBar"; 

export default function RootLayout() {
    return (
        <>  
            <NavBar />
            <PageBackround />
            <Outlet />
        </>
       
    )
  }