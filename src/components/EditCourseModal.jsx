import React, { useState, useEffect } from 'react';
import './EditCourseModal.css';

function EditCourseModal({ isOpen, onClose, curso, onUpdate }) {
  const [form, setForm] = useState(curso || {});
  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    setForm(curso || {});
    fetch('http://localhost:8080/professores')
      .then(res => res.json())
      .then(data => setProfessores(data));
  }, [curso]);

  if (!isOpen || !curso) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleProfessorChange = (e) => {
    const id = e.target.value;
    setForm({ ...form, professor: { id } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:8080/cursos/${form.id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form)
    })
      .then(res => res.json())
      .then(() => {
        alert("Curso atualizado!");
        onUpdate();
        onClose();
      })
      .catch(err => {
        console.error("Erro:", err);
        alert("Erro ao atualizar curso.");
      });
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <h2>Editar Curso</h2>
        <form onSubmit={handleSubmit}>
          <label>Nome</label>
          <input name="nome" value={form.nome || ''} onChange={handleChange} required />

          <label>Categoria</label>
          <input name="categoria" value={form.categoria || ''} onChange={handleChange} required />

          <label>Descrição</label>
          <textarea name="descricao" value={form.descricao || ''} onChange={handleChange} />

          <label>Link da Aula</label>
          <input name="videoUrl" value={form.videoUrl || ''} onChange={handleChange} />

          <label>Professor</label>
          <select value={form.professor?.id || ''} onChange={handleProfessorChange}>
            <option value="">Selecione</option>
            {professores.map((p) => (
              <option key={p.id} value={p.id}>{p.nome}</option>
            ))}
          </select>

          <div className="modal-buttons">
            <button type="submit">Salvar</button>
            <button type="button" className="cancel" onClick={onClose}>Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditCourseModal;
