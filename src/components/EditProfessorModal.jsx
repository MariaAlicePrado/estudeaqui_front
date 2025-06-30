import React, { useState, useEffect } from 'react';
import './EditProfessorModal.css';

function EditProfessorModal({ isOpen, onClose, professor, onUpdate }) {
  const [formData, setFormData] = useState(professor);

  useEffect(() => {
    setFormData(professor);
  }, [professor]);

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/professores/${formData.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    })
      .then(res => res.json())
      .then(data => {
        alert('Professor atualizado com sucesso!');
        onUpdate();  // atualiza a lista
        onClose();   // fecha modal
      })
      .catch(err => {
        console.error('Erro ao atualizar professor:', err);
        alert('Erro ao atualizar');
      });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Editar Professor</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input
            name="nome"
            value={formData.nome || ''}
            onChange={handleChange}
            required
          />

          <label>Idade</label>
          <input
            name="idade"
            type="number"
            value={formData.idade || ''}
            onChange={handleChange}
            required
          />

          <label>Telefone</label>
          <input
            name="telefone"
            value={formData.telefone || ''}
            onChange={handleChange}
          />

          <label>Licença</label>
          <input
            name="licenca"
            value={formData.licenca || ''}
            onChange={handleChange}
          />

          <div className="modal-buttons">
            <button type="submit">Salvar</button>
            <button type="button" className="cancel" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditProfessorModal;
