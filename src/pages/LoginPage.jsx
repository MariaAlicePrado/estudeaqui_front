import React from 'react';
import './LoginPage.css';

function LoginPage() {
  return (
    <div className="login-container">
      <h1 className="logo">ESTUDE AQUI</h1>
      <form className="login-form">
        <label>Email</label>
        <input type="email" placeholder="Digite seu email" />

        <label>Senha</label>
        <input type="password" placeholder="Digite sua senha" />

        <div className="remember-forgot">
          <label>
            <input type="checkbox" /> Lembrar-me
          </label>
          <a href="#">Esqueceu a senha?</a>
        </div>

        <button type="submit">Entrar</button>

        <p className="signup-link">
          Não tem uma conta? <a href="#">Criar conta</a>
        </p>
      </form>
    </div>
  );
}

export default LoginPage;
