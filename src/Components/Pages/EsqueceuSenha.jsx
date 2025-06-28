// Components/Pages/EsqueceuSenha.jsx
import React from 'react';
import './EsqueceuSenha.css';

const EsqueceuSenha = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Se este e-mail existir, enviaremos instruções de recuperação.");
  };

  return (
    
    <div style={{ padding: '2rem', textAlign: 'center' }}>
      <h2>Recuperar Senha</h2>
      
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Digite seu e-mail"
          required
          style={{ padding: '10px', width: '250px', marginBottom: '10px' }}
        />
        <br />
        <button type="submit" style={{ padding: '10px 20px' }}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default EsqueceuSenha;
