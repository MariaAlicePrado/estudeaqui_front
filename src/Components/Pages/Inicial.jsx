import { Link } from 'react-router-dom';
import './Inicial.css';
import 'bootstrap-icons/font/bootstrap-icons.css';


const Blocos = () => {
  return (
    <div className="blocos-container">
      <Link to="/desenvolvimento-pessoal" className="bloco">
        <div className="bloco-conteudo">
          <i className="bi bi-code-slash"></i>
          <span>Desenvolvimento Pessoal</span>
        </div>
      </Link>
      <Link to="/programacao" className="bloco">
        <div className="bloco-conteudo">
          <i className="bi bi-code-slash"></i>
          <span>Programação</span>
        </div>
      </Link>
      <Link to="/educacao" className="bloco">
        <div className="bloco-conteudo">
          <i className="bi bi-code-slash"></i>
          <span>Educação</span>
        </div>
      </Link>
      <Link to="/negocios" className="bloco">
        <div className="bloco-conteudo">
          <i className="bi bi-code-slash"></i>
          <span>Negócios</span>
        </div>
      </Link>
      <Link to="/idiomas" className="bloco">
        <div className="bloco-conteudo">
          <i className="bi bi-code-slash"></i>
          <span>Idiomas</span>
        </div>
      </Link>
      <Link to="/comunicacao" className="bloco">
        <div className="bloco-conteudo">
          <i className="bi bi-code-slash"></i>
          <span>Comunicação</span>
        </div>
      </Link>

    </div>
  );
};

export default Blocos;
