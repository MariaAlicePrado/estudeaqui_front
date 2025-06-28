import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from './logo.png'

const Navbar = () => {
  const navigate = useNavigate();

 

  return (
    <header className='header'>
      <a href='/' className='logo'><img src={logo} alt='Logo'></img></a>
      <nav className='navbar'>
        <a href='/Solicitacoes'>Início</a>
        <a href='/Devolucoes'>Professores</a>
        <a href='/Ocorrencia'>Agenda</a>
        <a href='/Inicial'>Perfil</a>
        <a href='/'>Sair</a>
      </nav>
    </header>
  );
};

export default Navbar;