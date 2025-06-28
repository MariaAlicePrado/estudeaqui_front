import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Cadastro.css';
import logo from '../logo.png'; // Ajuste o caminho conforme onde sua imagem estiver

const Cadastro = () => {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Cadastro realizado:', { nome, email, senha });

    // Redireciona para login após cadastro
    navigate('/');
  };

  return (
    <div className="custom-background">

      <div className="card">
        <div className="cadastro-container">
          <div className="logo-container">
            <img className="logo" src={logo} alt="Logo da Empresa" />
          </div>
        </div>
        <form className="cadastro-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Nome"
            required
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="email"
            name="email"
            placeholder="E-mail"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            name="senha"
            placeholder="Senha"
            pattern="[0-9]+"
            title="Por favor, digite apenas números"
            required
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  );
};

export default Cadastro;
