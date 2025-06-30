import React, { useState, useEffect } from 'react';
import './CreateCourse.css';
import Header from '../components/Header';

function CreateCourse() {
  const [courseData, setCourseData] = useState({
    nome: '',
    categoria: '',
    descricao: '',
    videoUrl: '',
    professor: null
  });

  const [professores, setProfessores] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/professores')
      .then((res) => res.json())
      .then((data) => setProfessores(data));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCourseData({ ...courseData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Enviar curso com referência ao professor
    fetch('http://localhost:8080/cursos', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(courseData),
    })
      .then(() => {
        alert("Curso cadastrado com sucesso!");
        setCourseData({ nome: '', categoria: '', descricao: '', videoUrl: '', professor: null });
      });
  };

  return (
    <div>
      <Header />
      <main className="create-course-container">
        <h1>Cadastrar Novo Curso</h1>
        <form className="create-course-form" onSubmit={handleSubmit}>
          <label>Nome do Curso</label>
          <input name="nome" value={courseData.nome} onChange={handleChange} required />

          <label>Categoria</label>
          <select name="categoria" value={courseData.categoria} onChange={handleChange} required>
            <option value="">Selecione</option>
            <option value="Programação">Programação</option>
            <option value="Informática">Informática</option>
            <option value="Comunicação">Comunicação</option>
          </select>

          <label>Descrição</label>
          <textarea name="descricao" value={courseData.descricao} onChange={handleChange} />

          <label>Link do Vídeo</label>
          <input name="videoUrl" value={courseData.videoUrl} onChange={handleChange} />

          <label>Professor</label>
          <select
            name="professor"
            value={courseData.professor || ''}
            onChange={(e) => setCourseData({ ...courseData, professor: { id: e.target.value } })}
            required
          >
            <option value="">Selecione o professor</option>
            {professores.map((prof) => (
              <option key={prof.id} value={prof.id}>
                {prof.nome}
              </option>
            ))}
          </select>

          <button type="submit">Cadastrar</button>
        </form>
      </main>
    </div>
  );
}

export default CreateCourse;
