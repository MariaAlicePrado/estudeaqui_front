import { BrowserRouter, Routes, Route, useLocation, Outlet } from 'react-router-dom';
import Login from './Components/Login';
import Cadastro from './Components/Pages/Cadastro';
import Inicial from './Components/Pages/Inicial';
import NavBar from './Components/Navbar';
import EsqueceuSenha from './Components/Pages/EsqueceuSenha';
import './index.css';

// Componente Layout definido dentro do App.jsx
const Layout = () => {
  const location = useLocation();
  const hideNavbarOnRoutes = ["/", "/cadastro"];
  const shouldShowNavbar = !hideNavbarOnRoutes.includes(location.pathname);

  return (
    <div>
      {shouldShowNavbar && <NavBar />}
      <Outlet />
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Login />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/inicial" element={<Inicial />} />
          <Route path="/recuperar-senha" element={<EsqueceuSenha />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
