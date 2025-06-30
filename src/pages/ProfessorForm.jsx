import React, { useState } from 'react';
import './ProfessorForm.css';

function ProfessorForm() {
  const [professor, setProfessor] = useState({
    nome: '',
    idade: '',
    telefone: '',
    licenca: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfessor({ ...professor, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Professor cadastrado:", professor);
    // Aqui você pode usar fetch ou axios para enviar ao back-end
    alert("Professor cadastrado com sucesso!");
    setProfessor({ nome: '', idade: '', telefone: '', licenca: '' });
  };

  return (
    <div className="professor-form-container">
      <h2>Cadastrar Professor</h2>
      <form onSubmit={handleSubmit}>
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={professor.nome}
          onChange={handleChange}
          required
        />

        <label>Idade</label>
        <input
          type="number"
          name="idade"
          value={professor.idade}
          onChange={handleChange}
          required
        />

        <label>Telefone</label>
        <input
          type="tel"
          name="telefone"
          value={professor.telefone}
          onChange={handleChange}
        />

        <label>Licença</label>
        <input
          type="text"
          name="licenca"
          value={professor.licenca}
          onChange={handleChange}
        />

        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
}

export default ProfessorForm;
