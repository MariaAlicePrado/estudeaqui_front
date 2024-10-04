import { Outlet, useLocation } from 'react-router-dom'
import NavBar from './Components/Navbar'
import './index.css'
 
function App() {
    const location = useLocation();
 
    return (
        <div>
           
            {location.pathname !== '/' && <NavBar />} 
            <Outlet /> 
        </div>
    );
}
 
export default App
 