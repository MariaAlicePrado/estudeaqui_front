import { Link, Outlet } from "react-router-dom";
import './App.css';

function App() {
  return (
    <div className="app-container">
      <header className="header">
        <h1>Estude Aqui</h1>
        <nav>
          <Link to="/professores">Professores</Link>
          <Link to="/cadastrar-professor">Cadastrar Professor</Link>
          <Link to="/cadastrar-curso">Cadastrar Curso</Link>
          <Link to="/cursos">Cursos</Link>
        </nav>
      </header>
      <main className="content">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
